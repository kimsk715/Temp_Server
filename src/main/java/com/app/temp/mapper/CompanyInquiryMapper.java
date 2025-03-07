package com.app.temp.mapper;


import com.app.temp.domain.dto.CompanyInquiryInfoDTO;
import com.app.temp.domain.dto.CompanyInquiryListDTO;
import com.app.temp.domain.vo.CompanyInquiryVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Optional;

@Mapper
public interface CompanyInquiryMapper {
    public void insertCompanyInquiry(CompanyInquiryVO companyInquiryVO);

    public List<CompanyInquiryListDTO> selectAllAdmin();

    public Optional<CompanyInquiryInfoDTO> selectInquiryById(Long id);

    public void update(CompanyInquiryVO companyInquiryVO);
}
