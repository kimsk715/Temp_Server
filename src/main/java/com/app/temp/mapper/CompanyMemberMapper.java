package com.app.temp.mapper;

import com.app.temp.domain.dto.CompanyMemberDTO;
import com.app.temp.domain.vo.CompanyMemberVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface CompanyMemberMapper {
//    기업회원 정보 생성(기업 첫 회원, 관리자 권한)
    public void insertCompanyMemberAdmin(CompanyMemberVO companyMemberVO);
//    기업회원 정보 생성(링크 초대받음, 권한과 직급 직접설정)
    public void insertInvitedCompanyMember(CompanyMemberVO companyMemberVO);
//    로그인 할 때 개인회원인지 기업회원인지 조회(이메일로 기업회원 정보 테이블이 있는지 확인)
    public Optional<CompanyMemberDTO> selectBymemberEmail(String memberEmail);
}

