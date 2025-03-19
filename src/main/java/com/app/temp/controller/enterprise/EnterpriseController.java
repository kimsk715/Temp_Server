package com.app.temp.controller.enterprise;

import com.app.temp.domain.vo.MemberVO;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("enterprise/*")
@Slf4j
public class EnterpriseController {

    @GetMapping("headerfooter")
    public void headerfooter(){

    }

    @GetMapping("account-info")
    public void accountInfo(){

    }

    @GetMapping("applicant-info")
    public void applicantInfo(){

    }

    @GetMapping("applicant-manage")
    public void applicantManage(){

    }

    @GetMapping("company-image")
    public void companyImage(){

    }

    @GetMapping("main-page")
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

    @GetMapping("viewer-invite")
    public void viewerInvite(){

    }

    @GetMapping("member-manage")
    public void memberManage(){

    }

    @GetMapping("program-list")
    public void programList(){

    }

    @GetMapping("program-edit")
    public void programEdit(){

    }


}
