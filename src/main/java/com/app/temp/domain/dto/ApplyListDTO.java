package com.app.temp.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class ApplyListDTO {
    @EqualsAndHashCode.Include
    private Long memberId;
    private String companyName;
    private String programName;
    private String applyMemberStatus;
    private String createdDate; //apply 것 이용.
}
