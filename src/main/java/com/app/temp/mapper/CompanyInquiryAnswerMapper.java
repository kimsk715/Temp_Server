package com.app.temp.mapper;

import com.app.temp.domain.vo.CompanyInquiryAnswerVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CompanyInquiryAnswerMapper {
    public void insert(CompanyInquiryAnswerVO companyInquiryAnswerVO);
}
