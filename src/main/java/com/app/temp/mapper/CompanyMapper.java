package com.app.temp.mapper;

import com.app.temp.domain.dto.CompanyDTO;
import com.app.temp.domain.vo.CompanyVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface CompanyMapper {
//    기업 회원가입
    public void insert(CompanyVO companyVO);
//    사업자등록번호 중복검사
    public Optional<CompanyDTO> selectByCompanyBusinessNumber(String companyBusinessNumber);
//    기업회원 id로 기업정보 조회
    public Optional<CompanyDTO> selectById(Long id);
//    기업명으로 기업정보 조회
    public Optional<CompanyDTO> selectByCompanyName(String companyName);
}
