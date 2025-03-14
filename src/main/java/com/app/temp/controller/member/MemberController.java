package com.app.temp.controller.member;

import com.app.temp.domain.vo.MemberVO;
import com.app.temp.mapper.MemberMapper;
import com.app.temp.service.MemberService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("member/*")
@RequiredArgsConstructor
@Slf4j
public class MemberController {
    final private MemberService memberService;
    final private HttpSession session;

    @GetMapping("header")
    public void header() {
        log.info("header");
    }
    
//    지원현황
    @GetMapping("account-applied")
    public void accountApplied(){
        log.info("실행됨");
    }
//    결제관리
    @GetMapping("account-payment")
    public void accountPayment(){
        log.info("실행됨");
    }
//    회원탈퇴
    @GetMapping("account-withdrawal")
    public String accountWithdrawal(HttpSession session, Long id, RedirectAttributes redirectAttributes){
        MemberVO member = (MemberVO) session.getAttribute("member");


        if (member == null) {
            redirectAttributes.addFlashAttribute("message", "로그인이 필요합니다.");
            return "redirect:/login"; // 로그인 페이지로 리다이렉트
        } else {
            memberService.memberDelete(member.getId());
            redirectAttributes.addFlashAttribute("message", "회원 탈퇴가 완료되었습니다.");
            session.invalidate();
            return "redirect:/"; // 홈 페이지로 리다이렉트
        }
    }


}
