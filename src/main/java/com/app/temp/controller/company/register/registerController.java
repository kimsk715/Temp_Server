package com.app.temp.controller.company.register;


import com.app.temp.controller.exception.BusinessNumberAlreadyExistsException;
import com.app.temp.controller.exception.MemberNotFoundException;
import com.app.temp.domain.dto.CompanyDTO;
import com.app.temp.domain.dto.CompanyMemberDTO;
import com.app.temp.domain.dto.MemberDTO;
import com.app.temp.service.CompanyMemberService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.swing.plaf.multi.MultiFileChooserUI;

@Controller
@Slf4j
@RequestMapping(value = "/company/*")
@RequiredArgsConstructor
public class registerController {
    private final CompanyMemberService companyMemberService;

    @GetMapping(value = "register")
    public String register(Model model) {
        model.addAttribute("companyDTO", new CompanyDTO());
        return "/login/company-register";
    }

    @PostMapping("register")
    public String registerCompanyMember(@RequestParam(required = false) MultipartFile file,
                                        HttpSession session, Model model,
                                        @ModelAttribute CompanyDTO companyDTO,
                                        @ModelAttribute CompanyMemberDTO companyMemberDTO,
                                        @RequestParam(value = "next_certification_check", defaultValue = "false") boolean noCertificate) {
        log.info("--------{}", file.getOriginalFilename());

//        log.info("companyDTO: {}", companyDTO);
//        log.info("companyMemberDTO: {}", companyMemberDTO);
        try {
            // 세션에서 멤버 정보 가져오기
            MemberDTO memberDTO = (MemberDTO) session.getAttribute("member");

            if (memberDTO == null) {
                throw new MemberNotFoundException("회원정보 찾을 수 없음");
            }

            // noCertificate 값 확인
            System.out.println("noCertificate: " + noCertificate);

            // companyMemberDTO에 member 정보를 추가
            companyMemberDTO.setMemberEmail(memberDTO.getMemberEmail());
            companyMemberDTO.setMemberName(memberDTO.getMemberName());
            companyMemberDTO.setMemberPhone(memberDTO.getMemberPhone());

            // 기업회원 등록 처리 서비스 호출
            companyMemberService.registerCompanyMember(session, companyDTO, companyMemberDTO, file);

            // 기업회원 등록 완료 후 마이페이지로 리다이렉션
            return "redirect:/enterprise/main-page";  // 기업 마이페이지로 리디렉션
        } catch (BusinessNumberAlreadyExistsException e) {
            log.error("사업자등록번호 중복 오류", e);
            return "redirect:/company/register?error=businessNumber";  // 중복 오류 시 리디렉션
        } catch (MemberNotFoundException e) {
            log.error("회원 정보 없음", e);
            return "redirect:/company/register?error=memberNotFound";  // 회원 미발견 시 리디렉션
        } catch (Exception e) {
            // 예외 처리
            log.error("기업회원 등록 실패", e);
            return "redirect:/company/register?error=true";  // 등록 실패 시 다시 등록 페이지로 리디렉션
        }
    }
}
