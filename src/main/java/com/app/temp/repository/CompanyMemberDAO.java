package com.app.temp.repository;

import com.app.temp.domain.dto.CompanyMemberDTO;
import com.app.temp.domain.vo.CompanyMemberVO;
import com.app.temp.mapper.CompanyMemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class CompanyMemberDAO {
    private final CompanyMemberMapper companyMemberMapper;

//    이메일로 기업회원 조회
    public Optional<CompanyMemberDTO> findByMemberEmail(String memberEmail) {
        return companyMemberMapper.selectBymemberEmail(memberEmail);
    }

//    기업회원 정보 생성(기업 첫 회원, 관리자 권한)
    public void saveFirstCompanyMember(CompanyMemberVO companyMemberVO) {
        companyMemberMapper.insertCompanyMemberAdmin(companyMemberVO);
    }
}
