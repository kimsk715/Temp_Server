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
    private String memberRegisterDate;
    private String memberRecentLogin;
    private String memberEmail;
    private String memberProfilePath;
    private String memberClass;
    private int memberPoint;
    private String memberStatus;
    private String createdDate;
    private String updatedDate;
}
