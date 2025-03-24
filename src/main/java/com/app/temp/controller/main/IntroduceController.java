package com.app.temp.controller.main;

import com.app.temp.domain.vo.MemberInquiryVO;
import com.app.temp.domain.vo.MemberVO;
import com.app.temp.mapper.InquiryAnswerMapper;
import com.app.temp.service.InquiryService;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@Slf4j
public class IntroduceController {
    private final InquiryService inquiryService;
    private final InquiryAnswerMapper inquiryAnswerMapper;

    public IntroduceController(InquiryService inquiryService, InquiryAnswerMapper inquiryAnswerMapper) {
        this.inquiryService = inquiryService;
        this.inquiryAnswerMapper = inquiryAnswerMapper;
    }

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
}
