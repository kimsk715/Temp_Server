package com.app.temp.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class CompanyInquiryListDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String companyInquiryType;
    private String memberName;
    private String companyName;
    private String createdDate;
    private String companyInquiryStatus;
    private String companyInquiryDetail;

}
