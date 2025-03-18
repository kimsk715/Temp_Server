package com.app.temp.controller.resume;


import com.app.temp.domain.dto.ResumeDTO;
import com.app.temp.domain.vo.MemberVO;
import com.app.temp.service.ResumeService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@Controller
@Slf4j
public class ResumeController {
    private final HttpSession session;
    private final ResumeService resumeService;
    private final MemberVO memberVO;

    //


    @GetMapping("resume/main")
    public String main() {

        return "resume/main";
    }

    @ResponseBody
    @GetMapping("resumes/main")
    public List<ResumeDTO> mainPage(RedirectAttributes redirectAttributes){
        MemberVO member = (MemberVO) session.getAttribute("member");
        log.info(resumeService.selectAllMemberResume(member.getId()).toString());
        return resumeService.selectAllMemberResume(member.getId());
    }
//  이력서 파일 첨부
    @PostMapping("resume/post")
    public String post( MultipartFile file) throws IOException {
        log.info("파일개수 {}" , file);
        resumeService.uploadFile(file);
        return "resume/main";
    }
//
    @GetMapping("resume/insert")
    public String insertPage(){
        MemberVO member = (MemberVO) session.getAttribute("member");

        resumeService.insertResume(member);


        return "/resume/edit";
    }

//
    @DeleteMapping("resume/delete")
    public String delete(@RequestParam Long id){
        log.info("삭제할 id {}" , id);
        resumeService.deleteResume(id);
        return "redirect:/resume/main";
    }

//
    @GetMapping("resume/edit")
    public void edit(){

    }



}
