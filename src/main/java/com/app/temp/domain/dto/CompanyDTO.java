package com.app.temp.domain.dto;

import com.app.temp.domain.vo.CompanyVO;
import lombok.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter @Setter @ToString
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class CompanyDTO {
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
    private int programCount;
    private List<CompanyImageDTO> companyImageList;

    public CompanyVO toVO(){
        CompanyVO companyVO = new CompanyVO();

        companyVO.setId(id);
        companyVO.setCompanyBusinessNumber(companyBusinessNumber);
        companyVO.setCompanyName(companyName);
        companyVO.setCompanyCEO(companyCEO);
        companyVO.setCompanyEstablishment(companyEstablishment);
        companyVO.setCompanyEmployee(companyEmployee);
        companyVO.setCompanyMainAddress(companyMainAddress);
        companyVO.setCompanySubAddress(companySubAddress);
        companyVO.setCompanyLogoPath(companyLogoPath);
        companyVO.setCompanyUrl(companyUrl);
        companyVO.setCompanyCertificatePath(companyCertificatePath);
        companyVO.setCompanyIntroduce(companyIntroduce);
        companyVO.setCompanyWelfare(companyWelfare);
        companyVO.setCompanyCulture(companyCulture);
        companyVO.setCreatedDate(createdDate);
        companyVO.setUpdatedDate(updatedDate);
        return companyVO;
    }
}
