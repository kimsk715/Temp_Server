package com.app.temp.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class MemberResumeDTO {
    @EqualsAndHashCode.Include
    private Long memberId;
    private String resumeTitle;
    private String resumeIntroduce;

}
