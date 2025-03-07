package com.app.temp.domain.dto;

import com.app.temp.domain.vo.CompanyInquiryVO;
import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class CompanyInquiryInfoDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String companyInquiryType;
    private String companyName;
    private String companyEmail;
    private String companyInquiryStatus;
    private String companyInquiryDetail;
    private String createdDate;

    public CompanyInquiryVO toCompanyInquiryVO(){
        CompanyInquiryVO companyInquiryVO = new CompanyInquiryVO();
        companyInquiryVO.setId(id);
        companyInquiryVO.setCompanyInquiryType(companyInquiryType);
        companyInquiryVO.setCompanyInquiryStatus(companyInquiryStatus);
        companyInquiryVO.setCompanyInquiryDetail(companyInquiryDetail);
        companyInquiryVO.setCreatedDate(createdDate);
        return companyInquiryVO;
    }
}
