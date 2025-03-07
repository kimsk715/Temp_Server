package com.app.temp.repository;

import com.app.temp.domain.dto.CompanyDTO;
import com.app.temp.domain.vo.CompanyVO;
import com.app.temp.mapper.CompanyMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class CompanyDAO {
    private final CompanyMapper companyMapper;

//    기업 회원가입
    public void save(CompanyVO companyVO){
        companyMapper.insert(companyVO);
    }

//    사업자등록번호 중복검사
    public Optional<CompanyDTO> findByCompanyBusinessNumber(String companyBusinessNumber) {
        return companyMapper.selectByCompanyBusinessNumber(companyBusinessNumber);
    }

//    기업회원 id로 기업정보 조회
    public Optional<CompanyDTO> findById(Long id) {
        return companyMapper.selectById(id);
    }
}
