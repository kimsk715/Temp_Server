package com.app.temp.mapper;

import com.app.temp.domain.vo.InquiryAnswerVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface InquiryAnswerMapper {
    public void insert(InquiryAnswerVO inquiryAnswerVO);


}
