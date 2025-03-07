package com.app.temp.domain.vo;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class CompanyMemberVO {
    @EqualsAndHashCode.Include
    private Long id;
    private Long companyId;
    private String companyMemberPosition;
    private String companyMemberAuthority;
    private String companyMemberDepartment;
}
