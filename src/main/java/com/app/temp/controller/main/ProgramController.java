package com.app.temp.controller.main;

import com.app.temp.domain.dto.*;
import com.app.temp.domain.vo.MemberVO;
import com.app.temp.domain.vo.ScrapVO;
import com.app.temp.service.*;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Controller
@RequestMapping("/program")
// 여기 맵핑에 * 달면 스크랩 버튼이 망가지니 혹시나 바꿔야 될 일 있으면 말씀해주세요!
@Slf4j
public class ProgramController {
    private final ProgramService programService;
    private final ScrapService scrapService;
    private final MemberService memberService;
    private final ResumeService resumeService;
    private final CompanyService companyService;
    private final ImageService imageService;
    private final ApplyService applyService;
    private final ApplyDTO applyDTO;


    public ProgramController(ProgramService programService, ScrapService scrapService, MainProgramInfoDTO mainProgramInfoDTO, MemberService memberService, ResumeService resumeService, CompanyService companyService, ImageService imageService, ApplyService applyService, ApplyDTO applyDTO) {
        this.programService = programService;
        this.scrapService = scrapService;
        this.memberService = memberService;
        this.resumeService = resumeService;
        this.companyService = companyService;
        this.imageService = imageService;
        this.applyService = applyService;
        this.applyDTO = applyDTO;
    }

//    필터링 + 검색기능 모두 포함.
    @GetMapping("list")
    public String list(Model model, HttpSession httpSession,
                       @RequestParam(required = false) String keyword,
                       @RequestParam(value = "categories", required = false) String[] categories){
        httpSession.setAttribute("keyword", keyword);
        SearchInfoDTO searchInfoDTO = new SearchInfoDTO();
        // 검색 키워드
        if(httpSession.getAttribute("keyword") != null) {
            String getKeyword = httpSession.getAttribute("keyword").toString();
            searchInfoDTO.setKeyword(getKeyword);
        }
        // 카테고리 버튼 클릭에 따른 필터
        if(categories != null && categories.length > 0) {
            searchInfoDTO.setCategories(categories);
        }
        // 로그인 했을 때 회원 정보 등록
        if((MemberVO) httpSession.getAttribute("member") != null){
            MemberVO member = (MemberVO) httpSession.getAttribute("member");
            MemberDTO newMember = memberService.getMemberById(member.getId());
            newMember.setMemberBirth(member.getMemberBirth()); // 공고 상세보기를 위한 생일 추가
            newMember.setResumeList(resumeService.check(newMember.getId()));
            // 회원 정보에 이력서 목록 추가 및 사용 가능한 이력서인지 여부도 체크
            httpSession.setAttribute("memberDTO", newMember);
            // 세션에 정보를 올려서 다른 페이지에서도 사용.
            searchInfoDTO.setMemberId(member.getId());
        }
        ArrayList<MainProgramListDTO> mainProgramListDTOS = new ArrayList<>();
        mainProgramListDTOS = programService.getAllByCategories(searchInfoDTO);
        model.addAttribute("mainProgramListDTOS", mainProgramListDTOS);
        return "/main/program-list";
    }

/*====================================================================================*/
    // 검색 키워드를 받아서 리스트 페이지로 전달
    @GetMapping("/search")
    public String search(@RequestParam("keyword") String keyword, Model model, HttpSession httpSession) {
//        model.addAttribute("keyword", keyword); // 검색어 전달
//        httpSession.setAttribute("keyword", keyword);
        return "forward:/program/list";
    }

    //   각 프로그램으로 이동
    @GetMapping("detail/{id}")
    public String programDetail(@PathVariable Long id, Model model, HttpSession httpSession) {
        Optional<MainProgramInfoDTO> programInfo =  programService.getMainProgramInfoDTOById(id);
        programInfo.ifPresent(mainProgramInfoDTO -> {mainProgramInfoDTO.setCompanyImageList(imageService.getByCompanyId(mainProgramInfoDTO.getCompanyId()));});
//        log.info(programInfo.get().toString());
        if(programInfo.isPresent()) {
            model.addAttribute("programInfo", programInfo.get());
        }
        else{
            model.addAttribute("programInfo", new MainProgramInfoDTO());
        }

        return "/main/program-detail";

    }
    //    지원하기 버튼 누를 시 실행
    @PostMapping(value = "detail/submit")
    @ResponseBody
    public void submit(@RequestBody ApplyIDDTO data) {
        applyService.apply(data);
    }


    @GetMapping("company-info/{id}")
    public String companyInfo(@PathVariable Long id, HttpSession httpSession, Model model) {
        Optional<CompanyDTO> companyDTO = companyService.getById(id);
        companyDTO.ifPresent(company -> company.setCompanyImageList(imageService.getByCompanyId(company.getId())));
        companyDTO.ifPresent(company -> company.setProgramCount(programService.countByCompanyId(company.getId())));
//        log.info(imageService.getByCompanyId(id).toString());
//        log.info(companyDTO.toString());
        model.addAttribute("companyDTO", companyDTO.get());
        List<CompanyProgramDTO> programDTOList = programService.getAllProgramByCompanyId(id);
        model.addAttribute("programDTOList", programDTOList);
        return "/main/company-info";
    }

    // 스크랩 추가
    @PostMapping("list/add/{programId}")
    public ResponseEntity<Void> addScrap(@PathVariable Long programId, HttpSession httpSession) {
        ScrapVO scrapVO = new ScrapVO();
        MemberVO member = (MemberVO) httpSession.getAttribute("member");
        Long memberId = member.getId();
        MemberDTO newMember = memberService.getMemberById(memberId);
        scrapVO.setProgramId(programId);
        scrapVO.setMemberId(memberId); //테스트용
        scrapService.create(scrapVO);
        return ResponseEntity.ok().build();
    }
    // 스크랩 제거
    @DeleteMapping("list/delete/{programId}")
    public ResponseEntity<Void> deleteScrap(@PathVariable Long programId, HttpSession httpSession) {
        ScrapVO scrapVO = new ScrapVO();
        MemberVO member = (MemberVO) httpSession.getAttribute("member");
        Long memberId = member.getId();
        MemberDTO newMember = memberService.getMemberById(memberId);
        scrapVO.setProgramId(programId);
        scrapVO.setMemberId(memberId); //테스트용
        scrapService.delete(scrapVO);
        return ResponseEntity.ok().build();
    }
    // 스크랩 버튼 클릭 시 스크랩의 null 여부 확인.
    @GetMapping("list/exists/{programId}")
    public ResponseEntity<Map<String, Boolean>> checkScrapExists(@PathVariable Long programId, HttpSession httpSession) {
        ScrapVO scrapVO = new ScrapVO();
        MemberVO member = (MemberVO) httpSession.getAttribute("member");
        Long memberId = member.getId();
        MemberDTO newMember = memberService.getMemberById(memberId);
        scrapVO.setProgramId(programId);
        System.out.println("🔍 존재 여부 확인 요청: programId = " + programId);
        scrapVO.setMemberId(memberId); //테스트용
        boolean exists = scrapService.isExists(scrapVO);
        System.out.println("✅ 존재 여부: " + exists);
        return ResponseEntity.ok(Collections.singletonMap("exists", exists));
    }
//  카테고리 버튼 눌렀을 때 필터링하는 기능.
//    검색 키워드가 있으면 그 키워드를 유지하고, 거기에 추가로 카테고리까지 쿼리에 적용.



}
