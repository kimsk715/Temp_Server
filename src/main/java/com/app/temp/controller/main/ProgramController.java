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

    @GetMapping("list")
    public String list(Model model, HttpSession httpSession, @RequestParam(required = false) String keyword) {
        MemberVO member = (MemberVO) httpSession.getAttribute("member");
        log.info("member: {}", member);
// 회원일 경우 스크랩 여부 검증
        if (member != null) {
            Long memberId = member.getId();
            MemberDTO newMember = memberService.getMemberById(memberId);
            newMember.setResumeList(resumeService.check(newMember.getId()));
            httpSession.setAttribute("memberDTO", newMember);
            log.info(httpSession.getAttribute("memberDTO").toString());
            ArrayList<MainProgramListDTO> mainProgramListDTOS = new ArrayList<>();

            // 검색창을 이용한 경우
            if (keyword != null && !keyword.isEmpty()) {
                mainProgramListDTOS = programService.searchProgramsByKeyword(keyword);
                model.addAttribute("keyword", keyword);
            }
            // 네비게이션 바에서 직접 이동한 경우
            else {
                mainProgramListDTOS = programService.getAllMain(memberId); // 전체 목록 반환
            }

            model.addAttribute("mainProgramListDTOS", mainProgramListDTOS);
        }
        // 비로그인 사용자
        else {
            ArrayList<MainProgramListDTO> mainProgramListDTOS = new ArrayList<>();

            // 검색을 수행한 경우
            if (keyword != null && !keyword.isEmpty()) {
                mainProgramListDTOS = programService.searchProgramsByKeyword(keyword);
                model.addAttribute("keyword", keyword);

            }
            // 네비게이션 바에서 직접 이동한 경우
            else {
                mainProgramListDTOS = programService.getAllMainNonLogin(); // 전체 목록 반환

            }

            model.addAttribute("mainProgramListDTOS", mainProgramListDTOS);
        }
        return "/main/program-list";
    }

    // 검색 키워드를 받아서 리스트 페이지로 전달
    @GetMapping("/search")
    public String search(@RequestParam("keyword") String keyword, Model model) {
        model.addAttribute("keyword", keyword); // 검색어 전달
        return "forward:/program/list"; // 검색어를 포함하여 바로 리스트 페이지로 이동
    }


    //   각 프로그램으로 이동
    @GetMapping("detail/{id}")
    public String programDetail(@PathVariable Long id, Model model, HttpSession httpSession) {
        Optional<MainProgramInfoDTO> programInfo =  programService.getMainProgramInfoDTOById(id);

        if(programInfo.isPresent()) {
            model.addAttribute("programInfo", programInfo.get());
        }
        else{
            model.addAttribute("programInfo", new MainProgramInfoDTO());
        }

        return "/main/program-detail";

    }
    //    지원하기 버튼 누를 시 실행
    @PostMapping(value = "detail/submit", consumes = "application/json")
    public String submit(@RequestBody ApplyIDDTO data) {
        applyService.apply(data);
        return "forward:/program/list";
    }

    @GetMapping("company-info/{id}")
    public String companyInfo(@PathVariable Long id, HttpSession httpSession, Model model) {
        Optional<CompanyDTO> companyDTO = companyService.getById(id);
        companyDTO.ifPresent(company -> company.setCompanyImageList(imageService.getByCompanyId(company.getId())));
        companyDTO.ifPresent(company -> company.setProgramCount(programService.countByCompanyId(company.getId())));
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



}
