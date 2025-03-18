package com.app.temp.mapper;


import com.app.temp.domain.dto.CompanyInquiryInfoDTO;
import com.app.temp.domain.dto.CompanyInquiryListDTO;
import com.app.temp.domain.dto.CompanyInquiryPagination;
import com.app.temp.domain.vo.CompanyInquiryVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Optional;

@Mapper
public interface CompanyInquiryMapper {
    public void insertCompanyInquiry(CompanyInquiryVO companyInquiryVO);

    public List<CompanyInquiryListDTO> selectAllAdmin(CompanyInquiryPagination companyInquiryPagination);

    public Optional<CompanyInquiryInfoDTO> selectInquiryById(Long id);

    public void update(CompanyInquiryVO companyInquiryVO);

    public int countAllAdmin(CompanyInquiryPagination companyInquiryPagination);

    public CompanyInquiryListDTO selectById(Long id);
    //    기업회원 상세정보에 들어갈 기업별 문의 목록
    public List<CompanyInquiryListDTO> selectByCompanyId(Long companyId);
}
