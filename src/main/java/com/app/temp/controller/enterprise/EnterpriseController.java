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
       log.info("멤버: {}", companyMember);
       log.info(companyService.selectProgramsByCompanyId(companyMember.getCompanyId()).toString());

        return companyService.selectProgramsByCompanyId(companyMember.getCompanyId());
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


    @GetMapping("master-invite")
    public String masterInvite(Model model, HttpSession session, @RequestParam(name = "code") String code){
//        log.info("Received code from URL: {}", code);  // code 값 로그 출력
        model.addAttribute("code", code);


//        세션에서 member 정보 가져오기
        MemberVO member = (MemberVO) session.getAttribute("member");

//        로그인 정보가 없으면 로그인 페이지로
        if(member == null) {
            return "redirect:/member/login";
        }

//        세션에서 초대자 정보 가져오기
        String inviterName = (String)session.getAttribute("inviterName");
        String companyName = (String)session.getAttribute("companyName");

        String memberName = member.getMemberName();

        String role = (String)session.getAttribute("role");
        String token = (String)session.getAttribute("token");

        model.addAttribute("inviterName", inviterName);
        model.addAttribute("companyName", companyName);
        model.addAttribute("role", role);
        model.addAttribute("token", token);
        model.addAttribute("memberName", memberName);

        return "/enterprise/master-invite";
    }

    @GetMapping("enterprise/viewer-invite")
    public void viewerInvite(){

    }

    @GetMapping("enterprise/member-manage")
    public void memberManage(){

    }

    @GetMapping("enterprise/program-edit")
    public void programEdit(){

    }


}
