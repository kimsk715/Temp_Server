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
    private Long id;
    private Long memberId;
    private String resumeTitle;
    private String resumeIntroduce;
    private String resumeProfilePhoto;
    private String createdDate;
    private String resumeRequired;
}
