package com.app.temp.controller.member;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("member/*")
@Slf4j
public class MemberController {

    @GetMapping("header")
    public void header() {
        log.info("header");
    }

    @GetMapping("account-info")
    public void accountInfo(){
        log.info("실행됨");
    }
    @GetMapping("account-applied")
    public void accountApplied(){
        log.info("실행됨");
    }
    @GetMapping("account-main")
    public void accountMain(){
        log.info("실행됨");
    }
    @GetMapping("account-payment")
    public void accountPayment(){
        log.info("실행됨");
    }
    @GetMapping("account-scraplist")
    public void accountScraplist(){
        log.info("실행됨");
    }
    @GetMapping("account-withdrawal")
    public void accountWithdrawal(){
        log.info("실행됨");
    }


}
