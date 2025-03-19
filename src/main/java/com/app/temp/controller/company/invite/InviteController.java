package com.app.temp.controller.company.invite;

import com.app.temp.domain.dto.CompanyDTO;
import com.app.temp.domain.dto.MemberDTO;
import com.app.temp.domain.vo.MemberVO;
import com.app.temp.service.CompanyMemberService;
import com.app.temp.service.InviteService;
import jakarta.mail.MessagingException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import java.io.IOException;

@Controller
@RequestMapping("/auth/*")
@RequiredArgsConstructor
@Slf4j
public class InviteController {
    private final InviteService inviteService;
    private final CompanyMemberService companyMemberService;

    //    메일 전송
    @PostMapping("link")
    public void link(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes) throws MessagingException, IOException {

        //        세션에서 기업명 받아오기
        HttpSession session = request.getSession();
        CompanyDTO company = (CompanyDTO) session.getAttribute("company");
        String companyName = company.getCompanyName();
        log.info("회사명 " + companyName);

//        이메일 목록 받기
        String[] emails = request.getParameterValues("emails");// 폼에서 받은 이메일들

//        권한(role) 받기
        String role = request.getParameter("role");

        if (emails != null && emails.length > 0 && role != null) {
//            서비스에서 이메일과 역할 처리
            inviteService.sendInviteEmails(emails, role, companyName, request, response);
            response.sendRedirect("/kakao/logout"); // 테스트용 임시 로그아웃 처리(관리페이지로 돌아가게)
        } else {
//            없으면 오류처리
            throw new MessagingException();
        }
    }

    //    링크 확인
    @GetMapping("confirm")
    public String confirm(@CookieValue(name = "token", required = false) String token, String code, HttpServletResponse response, Model model, HttpSession session) throws MessagingException {

        if (token == null || token.isEmpty()) {
            log.info("토큰에 문제있음");
            model.addAttribute("message", "초대 링크가 만료되었습니다.");
            return "redirect:/";
        }
        if (token.equals(code)) {
            Cookie cookie = new Cookie("token", "");
            cookie.setMaxAge(0);
            cookie.setPath("/");
            response.addCookie(cookie);

            MemberVO member = (MemberVO) session.getAttribute("member");
            log.info(member.toString());

            if(member == null) {
                return "redirect:/member/login";
            } else{
                companyMemberService.addInvitedMember(member, (String)session.getAttribute("companyName"), (String)session.getAttribute("role"));
                session.removeAttribute("companyName");
                session.removeAttribute("role");
                session.removeAttribute("inviterName");
                return "redirect:/enterprise/main-page";
            }
        }

        log.info("토큰이 다름");
        model.addAttribute("message", "초대 링크가 만료되었습니다.");
        return "redirect:/";
    }

    @GetMapping("success")
    public void goToSuccessPage(){}

    @GetMapping("fail")
    public void goToFailPage(){}
}
