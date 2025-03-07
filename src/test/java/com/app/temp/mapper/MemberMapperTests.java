package com.app.temp.mapper;

import com.app.temp.controller.exception.LoginFailException;
import com.app.temp.domain.vo.MemberVO;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
@Slf4j
public class MemberMapperTests {
    @Autowired
    private MemberMapper memberMapper;

    @Test
//    개인회원 회원가입
    public void testInsert() {
        MemberVO memberVO = new MemberVO();

        memberVO.setMemberName("test");
        memberVO.setMemberPhone("1234567890");
        memberVO.setMemberEmail("test@test.com");
        memberVO.setMemberPassword("123456");
        memberVO.setMemberProfilePath("test.jpg");
        memberVO.setMemberClass("test");

        memberMapper.insert(memberVO);
    }

    @Test
//    개인회원 로그인
    public void testSelect() {
        MemberVO memberVO = new MemberVO();

        memberVO.setMemberEmail("test@test.com");
        memberVO.setMemberPassword("123456");

        Optional<MemberVO> foundMember = memberMapper.selectByEmailAndPassword(memberVO);
//        member 조회에 성공하면
        foundMember.ifPresentOrElse(
                member ->  {log.info("로그인 성공: " + member);},
                () -> {
//                    회원이 존재하지 않으면 loginFailException
                    throw new LoginFailException("이메일 혹은 비밀번호가 잘못되었습니다");
                }
        );
    }

    @Test
// 로그인할 때마다 MEMBER_RECENT_LOGIN 갱신
    public void testUpdate() {
        // 로그인 정보 담을 DTO 객체
        MemberVO memberVO = new MemberVO();

        memberVO.setMemberEmail("test@test.com");
        memberVO.setMemberPassword("123456");

        // 로그인 정보 조회 (이메일과 비밀번호로)
        Optional<MemberVO> foundMember = memberMapper.selectByEmailAndPassword(memberVO);

        if (foundMember.isPresent()) {
            // 로그인 성공 시 해당 회원의 ID를 memberVO에 설정
            memberVO.setId(foundMember.get().getId()); // 로그인한 회원의 ID

            // 최근 로그인 시간 갱신
            memberMapper.updateMemberRecentLogin(memberVO);

            log.info("로그인 성공: 최근 로그인 시간 갱신 완료.");
        } else {
            // 로그인 실패 시 예외 처리
            throw new LoginFailException("아이디 또는 비밀번호가 잘못되었습니다.");
        }
    }
}
