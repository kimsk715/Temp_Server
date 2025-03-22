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

    @GetMapping("enterprise/master-invite")
    public void masterInvite(){

    }

    @GetMapping("enterprise/viewer-invite")
    public void viewerInvite(){

    }

    @GetMapping("enterprise/member-manage")
    public void memberManage(){

    }

//    공고목록 등록
    @GetMapping("enterprise/program-edit")
    public void programEdit(){

    }


}
