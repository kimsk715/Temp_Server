package com.app.temp.service;

import com.app.temp.domain.vo.MemberVO;
import com.app.temp.mapper.MemberMapper;
import com.app.temp.repository.MemberDAO;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class MypageService {
    private final MemberDAO memberDAO;
    private final MemberMapper memberMapper;
    private HttpSession session;

    // 마이페이지 회원 정보 조회
    public Optional<MemberVO> accountInfoSelect(Long id) {
        Optional<MemberVO> memberInfo = memberDAO.findById(id);
        return memberInfo;
    }
    // 마이페이지 회원정보 수정
    public void accountInfoUpdate(MemberVO memberVO) {
        memberDAO.setMember(memberVO);
        memberMapper.updateMember(memberVO);
        Optional<MemberVO> foundMember = memberDAO.findById(memberVO.getId());
        session.setAttribute("member", foundMember.orElseThrow());
    }
}
