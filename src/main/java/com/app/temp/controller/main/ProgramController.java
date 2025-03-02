package com.app.temp.controller.main;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/program/*")
@Slf4j
public class ProgramController {

    @GetMapping("list")
    public String list() {
        return "/main/program-list";
    }

    @GetMapping("detail")
    public String detail() {
        return "/main/program-detail";
    }

    @GetMapping("company-info")
    public String companyInfo() {
        return "/main/company-info";
    }
}
