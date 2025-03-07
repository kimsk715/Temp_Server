package com.app.temp.mapper;

import com.app.temp.domain.dto.MemberDTO;
import com.app.temp.domain.vo.MemberVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface MemberMapper {
//    개인 회원가입
    public void insert(MemberVO memberVO);
//    개인회원 로그인
    public Optional<MemberVO> selectByEmailAndPassword(MemberVO memberVO);
//    회원 로그인 할 때마다 MEMBER_RECENT_LOGIN 로그인 시간으로 갱신
    public void updateMemberRecentLogin(MemberVO memberVO);
//    id로 회원조회
    public Optional<MemberVO> selectById(Long id);
//    조회(이메일)
    public Optional<MemberDTO> selectByMemberEmail(String memberEmail);
//    개인회원 기업회원으로 전환
    public void updateMemberClass(Long id);
    //    회원 최근 로그인시간 갱신
    public void updateMemberRecentLogin(Long id);

}
