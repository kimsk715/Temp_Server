package com.app.temp.controller.resume;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("resume/*")
public class ResumeController {

    @GetMapping("main")
    public void mainPage(){

    }

    @GetMapping("edit")
    public void edit(){

    }

}
