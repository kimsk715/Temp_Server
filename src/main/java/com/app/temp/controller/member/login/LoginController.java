package com.app.temp.controller.member.login;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/member/*")
@Slf4j
@RequiredArgsConstructor
public class LoginController {
    private final HttpSession session;

    @GetMapping(value = "login")
    public String loginMain () {
        log.info("로그인 페이지 들어옴");
        return "login/member-login";
    }

    //  관리자 로그인 페이지로 이동
    @GetMapping(value = "admin-login")
    public String admin () {
        return "login/admin-login";
    }

    //    로그인 여부 검사
    @ResponseBody
    @GetMapping("check-login")
    public boolean checkLogin () {
        return session.getAttribute("member") != null;
    }
}
