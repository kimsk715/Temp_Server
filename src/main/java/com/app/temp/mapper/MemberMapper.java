package com.app.temp.mapper;

import com.app.temp.domain.dto.*;
import com.app.temp.domain.vo.MemberVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Optional;

@Mapper
public interface MemberMapper {
//    개인 회원가입
    public void insert(MemberVO memberVO);
//    개인회원 로그인
    public Optional<MemberVO> selectByEmail(MemberVO memberVO);
//    회원 로그인 할 때마다 MEMBER_RECENT_LOGIN 로그인 시간으로 갱신
    public void updateMemberRecentLogin(MemberVO memberVO);
//    id로 회원조회
    public Optional<MemberVO> selectById(Long id);

    public Optional<MemberDTO> selectByMemberId(Long id);
//    조회(이메일)
    public Optional<MemberDTO> selectByMemberEmail(String memberEmail);
//    개인회원 기업회원으로 전환
    public void updateMemberClass(Long id);
//    회원 최근 로그인시간 갱신
    public void updateMemberRecentLogin(Long id);
    //  관리자 페이지에서 개인회원 목록 조회
    public List<MemberAdminListDTO> selectAllAdmin(MemberPagination memberpagination);
    //  관리자 페이지에서 개인 회원 상세보기(ID로 조회)
    public Optional<MemberAdminListDTO> selectMemberInfoAdmin(Long id);
    //  관리자 페이지에서 회원 상태 변경(활성, 휴면, 정지 등...)
    public void update(MemberVO memberVO);

    //    pagination 의 total 을 계산하기 위한 카운트
    public int countAll(MemberPagination memberpagination);
//  마이페이지 조회하기
    public MemberVO selectByIdForInfo(Long id);
//   회원탈퇴
    public void memberDelete(Long id);
//   마이페이지 수정
    public void updateMember(MemberVO memberVO);
//   로그인
    public Optional<MemberVO> selectByMemberEmailAndMemberPassword(MemberVO memberVO);
//   결제내역 저장
    public void insertPayHistory(PayDTO payDTO);
//   결제내역 조회
    public List<PayDTO> selectPayHistory(Long id);


}
