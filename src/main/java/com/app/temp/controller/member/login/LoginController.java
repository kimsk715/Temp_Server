package com.app.temp.controller.member.login;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/member/*")
@Slf4j
public class LoginController {

    @GetMapping(value = "login")
    public String loginMain () {
        log.info("로그인 페이지 들어옴");
        return "/login/member-login";
    }
}
