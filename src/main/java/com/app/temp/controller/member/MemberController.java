package com.app.temp.controller.member;

import com.app.temp.domain.dto.MemberDTO;

import com.app.temp.domain.vo.MemberVO;
import com.app.temp.service.ApplyService;
import com.app.temp.service.MemberService;
import com.app.temp.domain.dto.*;
import com.app.temp.service.ProgramService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping
@RequiredArgsConstructor
@Slf4j
public class MemberController {
    final private MemberService memberService;
    final private HttpSession session;
    private final ApplyService applyService;
    private final ProgramService programService;

    @GetMapping("member/header")
    public void header() {
        log.info("header");

    }



//    지원현황
    @GetMapping("member/account-applied")
    public void accountApplied(){
        log.info("실행됨");
    }
//    결제관리
    @GetMapping("member/account-payment")
    public void accountPayment(){
        log.info("실행됨");
    }

//    회원탈퇴
    @GetMapping("member/account-withdrawal")
    public String accountWithdrawal(HttpSession session, Long id, RedirectAttributes redirectAttributes){
        MemberVO member = (MemberVO) session.getAttribute("member");


        if (member == null) {
            redirectAttributes.addFlashAttribute("message", "로그인이 필요합니다.");
            return "redirect:/login"; // 로그인 페이지로 리다이렉트
        } else {
            memberService.memberDelete(member.getId());
            redirectAttributes.addFlashAttribute("message", "회원 탈퇴가 완료되었습니다.");
            session.invalidate();

            return "redirect:/"; // 홈 페이지로 리다이렉트
        }
    }


//    결제내역 저장하기
    @ResponseBody
    @PostMapping("member/insert-pay-history")
    public void insertPayHistory(@RequestBody PayDTO data){
        log.info(data.getPaymentStatusLocale());
        MemberVO member = (MemberVO) session.getAttribute("member");
        data.setMemberId(member.getId());
        memberService.charge(data);
//        테스트용 멤버 아이디
        log.info(data.toString());
        memberService.insertPayHistory(data);
    }

//    결제내역 조회하기
    @ResponseBody
    @GetMapping("member/select-pay-history")
    public List<PayDTO> selectPayHistory(){
        MemberVO member = (MemberVO) session.getAttribute("member");
//        log.info(memberService.selectPayHistory(member.getId()).toString());
        return memberService.selectPayHistory(member.getId());
    }

    @ResponseBody
    @GetMapping("/member/pay")
    public void pay(@RequestParam("program-id") Long programId){
        MemberVO member = (MemberVO) session.getAttribute("member");
        log.info(member.getId().toString());
        PayDTO data = new PayDTO();
        data.setProgramId(programId);
        data.setMemberId(member.getId());
        Optional<MainProgramInfoDTO> foundProgram = programService.getMainProgramInfoDTOById(programId);
        int programPrice = foundProgram.get().getProgramPrice();
        data.setProgramPrice(programPrice);
        memberService.pay(data);
    }
}
