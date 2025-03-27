package com.app.temp.controller.resume;


import ch.qos.logback.core.testUtil.TeeOutputStream;
import com.app.temp.domain.dto.ResumeDTO;
import com.app.temp.domain.vo.MemberVO;
import com.app.temp.service.ResumeService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.*;
import java.util.Arrays;
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

//  이력서 추가
    @GetMapping("resume/insert")
    public String insertPage(){
        MemberVO member = (MemberVO) session.getAttribute("member");

        resumeService.insertResume(member);


        return "/resume/edit";
    }

//  이력서 삭제
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

    @ResponseBody
    @GetMapping("resume/download")
    // ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
    public ResponseEntity<byte[]> downloadPdf() throws IOException, InterruptedException {
        // PDF를 생성할 HTML 파일 경로
        String htmlFilePath = "Users\\Desktop\\my_study\\gb_0900_HSW\\spring\\workspace\\temp\\server\\server\\src\\main\\resources\\templates\\resume\\popup.html";

        // PDF를 저장할 임시 위치 (메모리)
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

        // ProcessBuilder로 wkHtmlToPdf 명령어 실행
        ProcessBuilder processBuilder = new ProcessBuilder(
                "\"\\Program Files\\wkhtmltopdf\\bin\\wkhtmltopdf.exe\"",
                "--enable-local-file-access",  // 로컬 파일 접근 허용
                "--no-images",  // 이미지를 로드하지 않음
                "--disable-javascript",  // 자바스크립트 비활성화
                "--encoding", "utf-8",  // 인코딩 설정
                htmlFilePath, "-");


        // 프로세스 시작
        Process process = processBuilder.start();

        // 에러 로그 읽기
        // **에러 스트림 출력**
//        try (BufferedReader errorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()))) {
//            String errorLine;
//            while ((errorLine = errorReader.readLine()) != null) {
//                log.error("wkhtmltopdf error: {}", errorLine);
//            }
//        }

        // 프로세스의 출력을 읽어서 메모리에 저장
        try (BufferedInputStream reader = new BufferedInputStream(process.getInputStream())) {
            byte[] buffer = new byte[1024];
            int bytesRead;
            while ((bytesRead = reader.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }
        }

        // 프로세스 종료 대기
        process.waitFor();

        // PDF 파일을 바이트 배열로 반환하여 클라이언트에게 다운로드
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=download.pdf");
        return ResponseEntity.ok()
                .headers(headers)
                .body(outputStream.toByteArray());
    }

}
