package com.app.temp.controller.main;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/notice/*")
@Slf4j
public class NoticeController {
    @GetMapping("list")
    public String notice() {
        return "main/notice-list";
    }

    @GetMapping("detail")
    public String detail() {
        return "main/notice-detail";
    }

}
