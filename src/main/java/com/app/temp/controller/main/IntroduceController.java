package com.app.temp.controller.main;

import com.app.temp.domain.dto.*;
import com.app.temp.domain.vo.MemberInquiryVO;
import com.app.temp.domain.vo.MemberVO;
import com.app.temp.mapper.InquiryAnswerMapper;
import com.app.temp.service.*;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

@Controller
@RequiredArgsConstructor
@Slf4j
public class IntroduceController {
    private final InquiryService inquiryService;
    private final InquiryAnswerMapper inquiryAnswerMapper;
    private final ProgramService programService;
    private final MemberService memberService;
    private final ResumeService resumeService;
    private final CompanyService companyService;
    private final HttpSession session;



    @GetMapping("introduce")
    public void introduce() {

    }

    @GetMapping("/insert-inquiry")
    public String setMemberInquiry(@RequestParam("inquiry-type") String memberInquiryType, @RequestParam("inquiry-content") String memberInquiryContent, HttpSession httpsession) {
        MemberInquiryVO memberInquiryVO = new MemberInquiryVO();
        log.info("memberInquiryType:{}", memberInquiryType);
        log.info("memberInquiryContent:{}", memberInquiryContent);
        if(httpsession.getAttribute("member") != null) {
            MemberVO member = (MemberVO) httpsession.getAttribute("member");
            Long memberId = member.getId();
            log.info("memberId:{}", memberId);

            memberInquiryVO.setMemberInquiryType(memberInquiryType);
            memberInquiryVO.setMemberInquiryDetail(memberInquiryContent);
            memberInquiryVO.setMemberId(memberId);
            memberInquiryVO.setMemberInquiryStatus("처리대기");
            log.info("memberInquiryVO:{}", memberInquiryVO);
        }
        // 로그인이 안되어있을 때 예외처리로 alert 뜨게 하기
        inquiryService.setMemberInquiry(memberInquiryVO);

        return "redirect:/";
    }

    @GetMapping("/")
    public String getByTopReadCount(HttpSession httpsession, Model model) {
        SearchInfoDTO searchInfoDTO = new SearchInfoDTO();
        if(httpsession.getAttribute("member") != null) {
            // 임시수정(원본: MemberVO)
            MemberDTO member = (MemberDTO) httpsession.getAttribute("member");
            Long memberId = member.getId();
            MemberDTO newMember = memberService.getMemberById(member.getId());
            newMember.setMemberBirth(member.getMemberBirth()); // 공고 상세보기를 위한 생일 추가
            newMember.setResumeList(resumeService.check(newMember.getId()));
            // 회원 정보에 이력서 목록 추가 및 사용 가능한 이력서인지 여부도 체크
            httpsession.setAttribute("memberDTO", newMember);
            searchInfoDTO.setMemberId(memberId);
//            log.info(newMember.toString());
        }

        CompanyDTO company = (CompanyDTO) session.getAttribute("company");
        CompanyFileDTO thumbnail = companyService.selectCompanyThumnail(company.getId());
        CompanyFileDTO logo = companyService.selectCompanyThumnail(company.getId());

        log.info("thumbnail:{}", thumbnail);
        log.info("logo:{}", logo);

        model.addAttribute("logo", logo);
        model.addAttribute("thumbnail", thumbnail);

        List<MainProgramListDTO> topList = programService.getByTopReadCount(searchInfoDTO);
        log.info(topList.toString());
        httpsession.setAttribute("topLists", topList);
        log.info(httpsession.getAttribute("topLists").toString());
        return "index";
    }
}
