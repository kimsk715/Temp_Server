package com.app.temp.controller.member;

import com.app.temp.controller.exception.StatusNotFoundException;
import com.app.temp.domain.dto.ApplicationDTO;
import com.app.temp.domain.dto.ApplyDTO;
import com.app.temp.domain.dto.MypageDTO;
import com.app.temp.domain.dto.Pagination;
import com.app.temp.domain.vo.MemberVO;
import com.app.temp.controller.exception.MypageSelectExcpetion;
import com.app.temp.exception.NotFoundError;
import com.app.temp.mapper.MemberMapper;
import com.app.temp.repository.MemberDAO;
import com.app.temp.service.ApplyService;
import com.app.temp.service.MypageService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.security.auth.login.LoginException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("mypage/*")
@RequiredArgsConstructor
@Slf4j
public class MypageController {
    private final MemberMapper memberMapper;
    private final HttpSession session;
    private final MypageService mypageService;
    private final MemberDAO memberDAO;
    private final ApplyService applyService;
    private final ApplyDTO applyDTO;


    //     마이페이지 조회
    @GetMapping("account-info")
    public String accountInfo(Model model) {
        MemberVO member = (MemberVO) session.getAttribute("member");


        Optional<MemberVO> foundMember = mypageService.accountInfoSelect(member.getId());

        model.addAttribute("member", foundMember.orElseThrow(()-> new MypageSelectExcpetion("찾지못함")));

        return "/member/account-info";
    }


//    마이페이지 수정
    @PostMapping ("account-update")
    public String accountUpdate(@ModelAttribute MemberVO member, HttpSession session) {
        MemberVO sessionMember = (MemberVO) session.getAttribute("member");

        log.info(member.toString());

        sessionMember.setMemberName(member.getMemberName());

        mypageService.accountInfoUpdate(sessionMember, session);
        log.info(sessionMember.toString());

        return "redirect:/mypage/account-info";
    }


//     마이페이지 스크랩 리스트 조회
    @GetMapping("account-main")
    public String accountMain(Model model, HttpSession session) {
    //    세션에서 회원 정보 가져오기
        MemberVO member = (MemberVO) session.getAttribute("member");
        log.info("이건 로그인정보 = {}", member.toString());
    //    가져온 정보가 없다면 메인페이지로
        if (member == null) {
            return "redirect:/";
        }
    //    마이페이지 스크랩 리스트 조회
        List<MypageDTO> scrapList = mypageService.mypageDTOList(member.getId(), session);
        log.info("scrapList 스크랩 리스트 = {}", scrapList);
    //    조회된 데이터를 모델에 추가
        model.addAttribute("scrapList", scrapList);
        
    //    account-main 으로 이동
        return "/member/account-main";
    }



//    지원 LIST를 REST로
    @GetMapping("account-applied")
    public String gotoApplied() {
        return "/member/account-applied";
    }

//
    @PostMapping("account-applis")
    @ResponseBody
    public List<ApplicationDTO> getList( @RequestBody Pagination pagination,  String applyMemberStatus) {
        MemberVO member = (MemberVO) session.getAttribute("member");

        List<ApplicationDTO> applicationDTOList = applyService.selelctApllyById(member.getId(), pagination, applyMemberStatus);

        return applyService.selelctApllyById(member.getId(), pagination, applyMemberStatus);
    }

//    //    결제 내역 서버에 저장
//    @PostMapping("pay-history")
//    public void payHistory (@RequestParam payload) {;};
}
