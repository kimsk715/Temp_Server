package com.app.temp.mapper;

import com.app.temp.domain.dto.CompanyMemberAdminListDTO;
import com.app.temp.domain.dto.CompanyMemberDTO;
import com.app.temp.domain.dto.CompanyMemberInfoAdminDTO;
import com.app.temp.domain.dto.CompanyMemberPagination;
import com.app.temp.domain.vo.CompanyMemberVO;
import com.app.temp.domain.vo.MemberVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Optional;

@Mapper
public interface CompanyMemberMapper {
//    기업회원 정보 생성(기업 첫 회원, 관리자 권한)
    public void insertCompanyMemberAdmin(CompanyMemberVO companyMemberVO);
//    기업회원 정보 생성(링크 초대받음, 권한과 직급 직접설정)
    public void insertInvitedCompanyMember(CompanyMemberVO companyMemberVO);
//    로그인 할 때 개인회원인지 기업회원인지 조회(이메일로 기업회원 정보 테이블이 있는지 확인)
    public Optional<CompanyMemberDTO> selectByMemberEmail(String memberEmail);
//  관리자 페이지에서 기업회원 목록 조회(기업이 아닌 기업에 소속된 회원)
    public List<CompanyMemberInfoAdminDTO> selectAllAdmin(CompanyMemberPagination companyMemberPagination);
//  관리자 페이지에서 상세 보기 조회 시 나오는 (기업 회원의 개인 정보 + 그 회원이 속한 기업 정보)
    public Optional<CompanyMemberInfoAdminDTO> selectMemberInfoAdmin(Long id);
//  기업 회원(TBL_COMPANY_MEMBER 의 상태 변경)
    public void update(MemberVO memberVO);

    public int countAllCompanyMember(CompanyMemberPagination companyMemberPagination);

    public Optional<CompanyMemberInfoAdminDTO> selectCompanyMemberInfoById(Long id);
}

