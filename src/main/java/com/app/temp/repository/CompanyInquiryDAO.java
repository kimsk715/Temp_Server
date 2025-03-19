package com.app.temp.repository;

import com.app.temp.domain.dto.CompanyInquiryInfoDTO;
import com.app.temp.domain.dto.CompanyInquiryListDTO;
import com.app.temp.domain.dto.CompanyInquiryPagination;
import com.app.temp.domain.vo.CompanyInquiryAnswerVO;
import com.app.temp.mapper.CompanyInquiryAnswerMapper;
import com.app.temp.mapper.CompanyInquiryMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class CompanyInquiryDAO {
    private final CompanyInquiryMapper companyInquiryMapper;
    private final CompanyInquiryAnswerMapper companyInquiryAnswerMapper;

    public List<CompanyInquiryListDTO> findAllAdmin(CompanyInquiryPagination companyInquiryPagination) {
        return companyInquiryMapper.selectAllAdmin(companyInquiryPagination);
    }

    public int countAllAdmin(CompanyInquiryPagination companyInquiryPagination) {
        return companyInquiryMapper.countAllAdmin(companyInquiryPagination);
    }

    public CompanyInquiryListDTO findById(Long id) {
        return companyInquiryMapper.selectById(id);
    }

    public List<CompanyInquiryListDTO> findByCompanyId(Long companyId) {
        return companyInquiryMapper.selectByCompanyId(companyId);
    }

    public void setCompanyInquiryAnswer(CompanyInquiryAnswerVO companyInquiryAnswerVO) {
        companyInquiryAnswerMapper.insert(companyInquiryAnswerVO);
    }

    public Optional<CompanyInquiryInfoDTO> findInquiryById(Long id) {
        return companyInquiryMapper.selectInquiryById(id);
    }
}
