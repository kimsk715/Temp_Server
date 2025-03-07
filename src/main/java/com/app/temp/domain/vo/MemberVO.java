package com.app.temp.domain.vo;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class MemberVO {
    @EqualsAndHashCode.Include
    private Long id;
    private String memberName;
    private String memberPhone;
    private String memberRecentLogin;
    private String memberEmail;
    private String memberPassword;
    private String memberProfilePath;
    private String memberClass;
    private String memberPoint;
    private String memberStatus;
    private String createdDate;
    private String updatedDate;
}
