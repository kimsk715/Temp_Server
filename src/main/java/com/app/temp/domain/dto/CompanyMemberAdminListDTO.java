package com.app.temp.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
public class CompanyMemberAdminListDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String companyName;
    private String companyBusinessNumber;
    private String memberName;
    private String memberEmail;
    private String memberRegisterDate;
    private String memberRecentLogin;
    private String memberStatus;
}
