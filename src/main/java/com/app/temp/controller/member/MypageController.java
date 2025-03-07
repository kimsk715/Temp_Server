package com.app.temp.controller.member;

import com.app.temp.domain.vo.MemberVO;
import com.app.temp.controller.exception.MypageSelectExcpetion;
import com.app.temp.exception.NotFoundError;
import com.app.temp.mapper.MemberMapper;
import com.app.temp.service.MypageService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@Controller
@RequestMapping("mypage/*")
@RequiredArgsConstructor
@Slf4j
public class MypageController {
    private final MemberMapper memberMapper;
    private final HttpSession session;
    private final MypageService mypageService;


    //    마이페이지 조회
    @GetMapping("account-info")
    public String accountInfo(Model model) {
//        MemberVO member = (MemberVO) session.getAttribute("member");
        Long id = 2L;
        Optional<MemberVO> member = mypageService.accountInfoSelect(id);

        log.info(member.toString());

        MemberVO memberVO = member.orElseThrow(()-> new MypageSelectExcpetion("값을 가져오지못함"));

        model.addAttribute("member", memberVO);

        return "/member/account-info";
    }
    //    마이페이지 수정
    @PostMapping("account-update")
    public void accountUpdate(MemberVO memberVO) {
        MemberVO member = new MemberVO();
        mypageService.accountInfoUpdate(member);
    }
}
