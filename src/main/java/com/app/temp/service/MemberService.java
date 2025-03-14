package com.app.temp.service;

import com.app.temp.domain.dto.MemberDTO;
import com.app.temp.domain.vo.MemberVO;
import com.app.temp.repository.MemberDAO;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class MemberService {
    private final MemberDAO memberDAO;

//    회원가입
    public void join(MemberDTO memberDTO){
        memberDAO.save(memberDTO.toVO());
    }

//    이메일로 회원 조회
    public Optional<MemberDTO> getMember(String memberEmail){
        return memberDAO.findByMemberEmail(memberEmail);
    }


//     로그인하면 회원 최근 로그인 시간 갱신
    public void updateMemberRecentLogin(Long id){
        memberDAO.updateMemberRecentLogin(id);
    }

//    회원 탈퇴
    public void memberDelete(Long id){
        memberDAO.deleteMember(id);
    }
}
