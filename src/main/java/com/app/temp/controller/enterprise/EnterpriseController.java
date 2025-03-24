package com.app.temp.controller.enterprise;

import com.app.temp.controller.exception.MypageSelectExcpetion;
import com.app.temp.domain.dto.*;
import com.app.temp.domain.vo.MemberVO;
import com.app.temp.service.CompanyMemberService;
import com.app.temp.service.CompanyService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Member;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping
@RequiredArgsConstructor
@Slf4j
public class EnterpriseController {

    private final CompanyService companyService;
    private final CompanyMemberService companyMemberService;
    private final HttpSession session;
    private final CompanyMemberInfoAdminDTO companyMemberInfoAdminDTO;

    @GetMapping("enterprise/header-footer")
    public void headerfooter(){

    }

//
    @GetMapping("enterprise/account-info")
    public String accountInfo(Model model) {
        MemberDTO member = (MemberDTO) session.getAttribute("member");

        Optional<CompanyMemberInfoAdminDTO> companyMember = companyMemberService.selectCompanyMemberInfoById(member.getId());

        log.info("이건 출력: {}", companyMember);

        if(companyMember.isPresent()){
        model.addAttribute("companyMember", companyMember.orElseThrow(() -> new MypageSelectExcpetion("못찾음")));
        return "enterprise/account-info";

        }else{
            return "enterprise/account-info";
        }
    }

    // 기업 마이페이지 공고목록 조회
    @GetMapping("enterprise/program-list")
    public void goprogramlist() {;}

    @ResponseBody
    @PostMapping("enterprises/programs-list")
    public CompanyProgramListDTO programList(){
       CompanyMemberDTO companyMember = (CompanyMemberDTO) session.getAttribute("companyMember");

        return companyService.selectProgramsByCompanyId(21L);
    }

//    게시물 등록 페이지 이동
    @GetMapping("enterprise/program-edit")
    public String programEdit() {
        return "enterprise/program-edit";
    }

//    기업 공고 등록 임시저장
    @GetMapping("enterprise/program-pending-insert")
    public String programPendingInsert(ProgramInfoDTO programInfoDTO) {
        companyService.pendingCompanyProgram(programInfoDTO);
        return "redirect:/enterprise/program-list";
    }

//    기업 공고 등록
    @PostMapping("enterprise/program-edit")
    public String createPost(@ModelAttribute ProgramInfoDTO programInfoDTO) {
        // Service를 통해 게시물 등록
        companyService.insertCompanyProgram(programInfoDTO);
        return "redirect:/post/list";  // 등록 후 게시물 목록으로 리디렉션
    }

//    기업 공고 임시저장
    @GetMapping("enterprise/program-wait")
    public String programWait() {
        return "redirect:/enterprise/program-list";
    }

//    기업 공고 수정페이지로 이동
    @GetMapping("enterprise/program-edit/{id}")
    public String programEdit(@PathVariable Long id, Model model) {
        log.info(id.toString());
        ProgramInfoDTO programInfoDTO = companyService.selectCompanyProgramById(id);
        model.addAttribute("programInfoDTO", programInfoDTO);
        return "redirect:/enterprise/program-list";
    }

//    기업 공고 수정기능
    @PostMapping("enterprise/program-edit/{id}")
    public String updateCompanyProgram(@PathVariable Long id, @ModelAttribute ProgramInfoDTO programInfoDTO) {
        log.info(id.toString());
        log.info(programInfoDTO.toString());
        programInfoDTO.setId(id);
        companyService.updateCompanyProgram(programInfoDTO);

        return "redirect:/enterprise/list";
    }

    
//    기업 공고 삭제
    @PostMapping("enterpirse/program-delete")
    public String programDelete(@RequestParam Long id) {
        log.info("id: {}",id);
        companyService.deleteCompanyProgram(id);
        return "redirect:/enterprise/program-list";
    }

    @GetMapping("enterprise/applicant-info")
    public void applicantInfo(){

    }

    @GetMapping("enterprise/applicant-manage")
    public void applicantManage(){

    }

    @GetMapping("enterprise/company-image")
    public void companyImage(){

    }

    @GetMapping("enterprise/main-page")
    public void mainPage(){

    }

    @GetMapping("enterprise/master-invite")
    public void masterInvite(){

    }

    @GetMapping("enterprise/viewer-invite")
    public void viewerInvite(){

    }

    @GetMapping("enterprise/member-manage")
    public void memberManage(){

    }


}
