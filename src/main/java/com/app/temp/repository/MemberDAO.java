package com.app.temp.repository;

import com.app.temp.domain.dto.MemberDTO;
import com.app.temp.domain.dto.MemberInfoAdminDTO;
import com.app.temp.domain.vo.MemberVO;
import com.app.temp.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class MemberDAO {
    private final MemberMapper memberMapper;

    //    추가
    public void save(MemberVO memberVO){
        memberMapper.insert(memberVO);
    }

    //    조회(이메일)
    public Optional<MemberDTO> findByMemberEmail(String memberEmail){
        return memberMapper.selectByMemberEmail(memberEmail);
    }

//    개인회원 기업으로 전환
    public void setMemberClass(Long id){
        memberMapper.updateMemberClass(id);
    }
//    회원 최근 로그인시간 갱신
    public void updateMemberRecentLogin(Long id){
        memberMapper.updateMemberRecentLogin(id);
    }

//  아이디로 회원 정보 조회
    public MemberInfoAdminDTO findMemberInfoAdmin(Long id) {
        return memberMapper.selectMemberInfoAdmin(id);
    }
}
