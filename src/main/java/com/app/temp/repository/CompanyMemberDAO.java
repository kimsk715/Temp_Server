package com.app.temp.repository;

import com.app.temp.domain.dto.CompanyMemberDTO;
import com.app.temp.domain.dto.CompanyMemberInfoAdminDTO;
import com.app.temp.domain.dto.CompanyMemberPagination;
import com.app.temp.domain.vo.CompanyMemberVO;
import com.app.temp.mapper.CompanyMemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class CompanyMemberDAO {
    private final CompanyMemberMapper companyMemberMapper;

//    이메일로 기업회원 조회
    public Optional<CompanyMemberDTO> findByMemberEmail(String memberEmail) {
        return companyMemberMapper.selectByMemberEmail(memberEmail);
    }

    //    기업회원 정보 생성(기업 첫 회원, 관리자 권한)
    public void saveFirstCompanyMember(CompanyMemberVO companyMemberVO) {
        companyMemberMapper.insertCompanyMemberAdmin(companyMemberVO);
    }

    //    기업회원 정보 생성(초대받은 기업회원, 초대받은 권한)
    public void saveInvitedCompanyMember(CompanyMemberVO companyMemberVO) {
        companyMemberMapper.insertInvitedCompanyMember(companyMemberVO);
    }

    public List<CompanyMemberInfoAdminDTO> findAllAdmin(CompanyMemberPagination companyMemberPagination) {
        return companyMemberMapper.selectAllAdmin(companyMemberPagination);
    }

    public int countAllCompanyMember(CompanyMemberPagination companyMemberPagination) {
        return companyMemberMapper.countAllCompanyMember(companyMemberPagination);
    }

    public Optional<CompanyMemberInfoAdminDTO> findById(Long memberId) {
        return companyMemberMapper.selectById(memberId);
    }


}
