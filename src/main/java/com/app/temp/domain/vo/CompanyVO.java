package com.app.temp.domain.vo;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class CompanyVO {
    @EqualsAndHashCode.Include
    private Long id;
    private String companyBusinessNumber;
    private String companyName;
    private String companyCEO;
    private String companyEstablishment;
    private int companyEmployee;
    private String companyMainAddress;
    private String companySubAddress;
    private String companyLogoPath;
    private String companyUrl;
    private String companyCertificatePath;
    private String companyIntroduce;
    private String companyWelfare;
    private String companyCulture;
    private String createdDate;
    private String updatedDate;
}
