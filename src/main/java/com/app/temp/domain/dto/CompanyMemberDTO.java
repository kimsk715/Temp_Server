package com.app.temp.domain.dto;

import com.app.temp.domain.vo.CompanyMemberVO;
import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class CompanyMemberDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private Long companyId;
    private String companyMemberPosition;
    private String companyMemberAuthority;
    private String companyMemberDepartment;
    private String memberName;
    private String memberPhone;
    private String memberEmail;
    private String memberStatus;
    private String memberClass;
    private String createdDate;
    private String updatedDate;

    public CompanyMemberVO toVO(){
        CompanyMemberVO companyMemberVO = new CompanyMemberVO();
        companyMemberVO.setId(id);
        companyMemberVO.setCompanyId(companyId);
        companyMemberVO.setCompanyMemberPosition(companyMemberPosition);
        companyMemberVO.setCompanyMemberAuthority(companyMemberAuthority);
        companyMemberVO.setCompanyMemberDepartment(companyMemberDepartment);

        return companyMemberVO;
    }
}
