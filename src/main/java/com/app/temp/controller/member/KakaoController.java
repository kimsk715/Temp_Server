package com.app.temp.controller.member;

import com.app.temp.controller.exception.LoginFailException;
import com.app.temp.domain.dto.CompanyDTO;
import com.app.temp.domain.dto.CompanyMemberDTO;
import com.app.temp.domain.dto.MemberDTO;
import com.app.temp.service.CompanyMemberService;
import com.app.temp.service.KakaoService;
import com.app.temp.service.MemberService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


import java.util.Optional;

@Controller
@Slf4j
@RequiredArgsConstructor
public class KakaoController {
    private final HttpSession session;
    private final KakaoService kakaoService;
    private final MemberService memberService;
    private final CompanyMemberService companyMemberService;

    @GetMapping("/kakao/login")
    public String login(@RequestParam String code, @RequestParam String type){
        // 카카오 로그인 후 토큰 받기
        String token = kakaoService.getKakaoAccessToken(code, type);
        Optional<MemberDTO> foundInfo = kakaoService.getKakaoInfo(token);

        // 회원 정보 조회 실패 시 예외 처리
        MemberDTO memberDTO = foundInfo.orElseThrow(() -> new LoginFailException("회원 조회 실패"));

        // 기존 회원 조회
        Optional<MemberDTO> foundMember = memberService.getMember(memberDTO.getMemberEmail());

        // 기업회원 여부 확인
        Optional<CompanyMemberDTO> foundCompanyMember = companyMemberService.selectByMemberEmail(memberDTO.getMemberEmail());

        // 개인회원 로그인 처리
        if ("personal".equals(type)) {
            if (foundCompanyMember.isPresent()) {
                // 기업회원인데 개인회원 로그인을 시도할 때 alert 메시지 출력하고 로그인창으로 돌아가기
                return "redirect:/member/login?error=company_member";
            }

            if (!foundMember.isPresent()) {
                // 개인회원이 없다면 TBL_MEMBER에 등록
                memberService.join(memberDTO);  // 개인회원 가입

                foundMember = Optional.of(memberService.getMember(memberDTO.getMemberEmail()).orElseThrow(() -> new LoginFailException("회원 정보 조회 실패")));
            }

            MemberDTO existingMember = foundMember.get();

            // 최근 로그인 시간 업데이트
            memberService.updateMemberRecentLogin(existingMember.getId());

            // 세션에 member 정보 저장
            session.setAttribute("member", existingMember.toVO());
            log.info("Set session attribute: member = {}", session.getAttribute("member"));

            return "redirect:/mypage/account-info"; // 홈으로 리디렉션
        }

        // 기업회원 로그인 처리
        if ("company".equals(type)) {
            if (!foundMember.isPresent()) {
                // 기업회원이 없다면 TBL_MEMBER에 등록
                memberService.join(memberDTO); // TBL_MEMBER에 기업회원 정보 삽입
            }

            // 기업회원 정보를 저장 후, 해당 이메일을 기준으로 member 정보를 다시 조회
            memberDTO = memberService.getMember(memberDTO.getMemberEmail()).orElseThrow(() -> new LoginFailException("기업회원 조회 실패"));
            session.setAttribute("member", memberDTO);

            // 기업회원 정보가 없을 경우 기업회원 등록을 유도
            if (!foundCompanyMember.isPresent()) {
                return "redirect:/company/register"; // 기업 추가 정보 입력 페이지
            }

            // 기업 정보 조회 (Company 테이블에서 해당 회사 정보 조회)
            CompanyDTO companyDTO = companyMemberService.getCompanyInfoById(foundCompanyMember.get().getCompanyId())
                    .orElseThrow(() -> new LoginFailException("기업정보 조회 실패"));

            // 세션에 member, companyMember, company 정보 저장
            memberService.updateMemberRecentLogin(memberDTO.getId()); // 최근 로그인 갱신
            session.setAttribute("member", memberDTO);
            session.setAttribute("companyMember", foundCompanyMember.get());
            session.setAttribute("company", companyDTO);

            log.info("Set session attribute: member = {}", session.getAttribute("member"));
            log.info("Set session attribute: companyMember = {}", session.getAttribute("companyMember"));
            log.info("Set session attribute: company = {}", session.getAttribute("company"));

            // 이미 가입된 기업회원이면 기업회원 마이페이지로 이동
            return "redirect:/enterprise/program-list"; // 기업 마이페이지
        }

        // type이 personal이나 company가 아닐 경우
        return "redirect:/"; // 기본 리디렉션
    }
    }