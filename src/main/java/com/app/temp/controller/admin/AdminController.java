package com.app.temp.controller.admin;

import com.app.temp.domain.dto.*;
import com.app.temp.domain.vo.*;
import com.app.temp.service.*;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.Optional;

@Controller
@Slf4j
@RequiredArgsConstructor
public class AdminController {
    private final HttpSession session;
    private final AdminService adminService;
    private final ProgramService programService;
    private final MemberService memberService;
    private final CompanyMemberService companyMemberService;
    private final InquiryService inquiryService;
    private final NoticeService noticeService;


    @GetMapping("admin/home")
    public void home(Model model) {
    }

    @PostMapping("admin/home")
    public String adminLogin(String adminId, String adminPassword, RedirectAttributes redirectAttributes) {
        Optional<AdminVO> admin = adminService.login(adminId, adminPassword);

        if (admin.isEmpty()) {
            // 로그인 실패 시, 로그인 페이지로 돌아가기
            redirectAttributes.addFlashAttribute("error", "아이디나 비밀번호가 잘못되었습니다.");
            return "redirect:/member/admin-login"; // 로그인 페이지로 리디렉트
        }

        // 로그인 성공 시 세션에 관리자 정보 저장
        session.setAttribute("admin", admin.get());
        return "redirect:/admin/home"; // 관리자 홈으로 리디렉트
    }

    //  프로그램 목록 조회
    @GetMapping("/admin/home/programs")
    @ResponseBody
    public AdminProgramListDTO getProgramList(ProgramPagination programPagination) {
        return programService.getAllProgram(programPagination);
    }

    //   프로그램 상세 정보
    @GetMapping("/admin/home/program")
    @ResponseBody
    public ProgramListDTO getProgram(@RequestParam("program-id") Long programId) {
        Optional<ProgramListDTO> program = programService.getProgramInfoDTOById(programId);
        return program.orElse(null);
    }


    @GetMapping("/admin/home/members")
    @ResponseBody
    public AdminMemberListDTO getMemberList(MemberPagination memberpagination, Model model) {
        return memberService.getAllAdmin(memberpagination);
    }

    @GetMapping("/admin/home/member")
    @ResponseBody
    public MemberAdminListDTO getMember(@RequestParam("member-id") Long memberId) {
        Optional<MemberAdminListDTO> member = memberService.getMemberInfoAdmin(memberId);
        log.info(member.toString());
        return member.orElse(null);
    }

    @GetMapping("/admin/home/company-members")
    @ResponseBody
    public AdminCompanyMemberListDTO getCompanyMemberList(CompanyMemberPagination companyMemberPagination, Model model, HttpSession session) {
        return companyMemberService.getAllAdmin(companyMemberPagination);
    }

    @GetMapping(value = "/admin/home/company-member")
    @ResponseBody
    public Optional<CompanyMemberInfoAdminDTO> getCompanyMember(@RequestParam("company-member-id") Long memberId) {
        return companyMemberService.getById(memberId);
    }

    @GetMapping("/admin/home/member-inquiries")
    @ResponseBody
    public AdminMemberInquiryDTO getMemberInquiryList(MemberInquiryPagination memberInquiryPagination, Model model) {
        log.info(inquiryService.getAll(memberInquiryPagination).getMemberInquiryList().toString());
        return inquiryService.getAll(memberInquiryPagination);
    }

    @GetMapping("/admin/home/member-inquiry")
    @ResponseBody
    public MemberInquiryDTO getMemberInquiry(@RequestParam("inquiry-id") Long inquiryId) {
        return inquiryService.getMemberInquiryById(inquiryId);
    }

    @GetMapping("/admin/home/company-inquiries")
    @ResponseBody
    public AdminCompanyInquiryListDTO getCompanyInquiryList(CompanyInquiryPagination companyInquiryPagination, Model model) {
        return inquiryService.getAllCompany(companyInquiryPagination);
    }

    @GetMapping("/admin/home/company-inquiry")
    @ResponseBody
    public CompanyInquiryListDTO getCompanyInquiry(@RequestParam("company-inquiry-id") Long companyInquiryId) {
        return inquiryService.getCompanyInquiryById(companyInquiryId);
    }

    @GetMapping("/admin/home/notices")
    @ResponseBody
    public AdminNoticeListDTO getNoticeList(NoticePagination noticePagination) {
        return noticeService.getAll(noticePagination);
    }

    @GetMapping("/admin/home/notice")
    @ResponseBody
    public NoticeListDTO getNotice(NoticePagination noticePagination, @RequestParam("notice-id") Long noticeId) {
        log.info(noticeService.getNotice(noticeId).toString());
        return noticeService.getNotice(noticeId);
    }

    //    @PutMapping
//    @PatchMapping
    @PatchMapping("/admin/home/programs")
    public String setProgramStatus(@RequestParam("program-id") Long programId, @RequestParam("program-status") String programStatus) {
        ProgramVO programVO = new ProgramVO();
        programVO.setId(programId);
        programVO.setProgramStatus(programStatus);
        programService.set(programVO);
        return "/admin/home";
    }

    @PatchMapping("/admin/home/members")
    public String setMemberStatus(@RequestParam("member-id") Long memberId, @RequestParam("memberStatus") String memberStatus) {
        MemberVO memberVO = new MemberVO();
        memberVO.setId(memberId);
        memberVO.setMemberStatus(memberStatus);
        memberService.set(memberVO);
        return "/admin/home";
    }

    @PatchMapping("/admin/home/company-members")
    public String setCompanyMemberStatus(@RequestParam("company-member-id") Long companyMemberId, @RequestParam("companyMemberStatus")  String companyMemberStatus) {
        MemberVO memberVO = new MemberVO();
        memberVO.setId(companyMemberId);
        memberVO.setMemberStatus(companyMemberStatus);
        memberService.set(memberVO);
        return "/admin/home";
    }
    @PatchMapping("/admin/home/member-inquiries")
    public String setMemberInquiryStatus(@RequestParam("inquiry-id") Long inquiryId, @RequestParam("inquiryStatus")  String inquiryStatus, @RequestParam("inquiry-answer") String inquiryAnswer){
        MemberInquiryVO memberInquiryVO = new MemberInquiryVO();
        memberInquiryVO.setId(inquiryId);
        memberInquiryVO.setMemberInquiryStatus(inquiryStatus);
        inquiryService.updateMemberInquiry(memberInquiryVO);
        log.info(inquiryAnswer);
        MemberInquiryDTO newInquiry = inquiryService.getMemberInquiryById(inquiryId);
//        log.info(newInquiry.toString());
        InquiryAnswerVO inquiryAnswerVO = new InquiryAnswerVO();
        inquiryAnswerVO.setInquiryAnswerTitle(newInquiry.getMemberInquiryDetail());
        inquiryAnswerVO.setInquiryAnswerDetail(inquiryAnswer);
        inquiryAnswerVO.setMemberInquiryId(inquiryId);
        inquiryService.setMemberInquiryAnswer(inquiryAnswerVO);
        return "/admin/home";
    }

    @PatchMapping("/admin/home/company-inquiries")
    public String setCompanyInquiryStatus(@RequestParam("company-inquiry-id") Long companyInquiryId,
                                          @RequestParam("companyInquiryStatus")  String companyInquiryStatus,
                                          @RequestParam("company-inquiry-answer") String companyInquiryAnswer){
        CompanyInquiryVO companyInquiryVO = new CompanyInquiryVO();
        companyInquiryVO.setId(companyInquiryId);
        companyInquiryVO.setCompanyInquiryStatus(companyInquiryStatus);
        inquiryService.updateCompanyInquiry(companyInquiryVO);
        Optional<CompanyInquiryInfoDTO> newCompanyInquiry = inquiryService.getCompanyInquiryInfoById(companyInquiryId);
        CompanyInquiryAnswerVO companyInquiryAnswerVO = new CompanyInquiryAnswerVO();
        companyInquiryAnswerVO.setCompanyInquiryId(companyInquiryId);
        companyInquiryAnswerVO.setInquiryAnswerTitle(newCompanyInquiry.get().getCompanyInquiryDetail());
        companyInquiryAnswerVO.setInquiryAnswerDetail(companyInquiryAnswer);
        inquiryService.setCompanyInquiryAnswer(companyInquiryAnswerVO);


        return "/admin/home";
    }

    @PatchMapping("/admin/home/notices")
    public String updateNotice(@RequestParam("notice-id") Long id, @RequestParam("notice-title") String noticeTitle,
                               @RequestParam("notice-content") String noticeContent, @RequestParam("notice-category") String noticeCategory) {
        NoticeVO noticeVO = new NoticeVO();
        noticeVO.setId(id);
        noticeVO.setNoticeTitle(noticeTitle);
        noticeVO.setNoticeContent(noticeContent);
        noticeVO.setNoticeCategory(noticeCategory);
        noticeService.updateNotice(noticeVO);
        return "/admin/home";
    }

    @PutMapping("admin/home/notices")
    public String insertNotice(@RequestParam("notice-title") String noticeTitle,
                               @RequestParam("notice-content") String noticeContent,
                               @RequestParam("notice-category") String noticeCategory) {
        NoticeVO noticeVO = new NoticeVO();
        noticeVO.setNoticeCategory(noticeCategory);
        noticeVO.setNoticeTitle(noticeTitle);
        noticeVO.setNoticeContent(noticeContent);
        noticeService.insertNotice(noticeVO);
        return "/admin/home";

    }


}