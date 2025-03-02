package com.app.temp.controller.enterprise;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

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
    public void masterInvite(){

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
