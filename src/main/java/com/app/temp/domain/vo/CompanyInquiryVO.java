package com.app.temp.domain.vo;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter
@ToString
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class CompanyInquiryVO {
    @EqualsAndHashCode.Include
    private Long id;
    private String companyInquiryType;
    private String companyInquiryDetail;
    private String companyInquiryStatus;
    private Long memberId; // 특정 기업 담당자의 id
    private String createdDate;
    private String updatedDate;


}
