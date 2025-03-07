package com.app.temp.domain.dto;

import com.app.temp.domain.vo.CompanyInquiryAnswerVO;
import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class CompanyInquiryAnswerDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String inquiryAnswerTitle; // 답변 제목 = 문의의 상세 내용
    private String inquiryAnswerDetail;
    private Long companyInquiryId;

    public CompanyInquiryAnswerVO toCompanyInquiryAnswerVO(){
        CompanyInquiryAnswerVO companyInquiryAnswerVO = new CompanyInquiryAnswerVO();
        companyInquiryAnswerVO.setId(id);
        companyInquiryAnswerVO.setInquiryAnswerTitle(inquiryAnswerTitle);
        companyInquiryAnswerVO.setInquiryAnswerDetail(inquiryAnswerDetail);
        companyInquiryAnswerVO.setCompanyInquiryId(companyInquiryId);
        return companyInquiryAnswerVO;
    }
}


