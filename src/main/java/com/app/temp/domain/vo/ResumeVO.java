package com.app.temp.domain.vo;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class ResumeVO {
    @EqualsAndHashCode.Include
    private Long id;
    private String resumeTitle;
    private String resumeProfilePhoto; // path
    private String resumeIntroduce;
    private String resumeRequired;
    private Long memberId;
    private String createdDate;
    private String updatedDate;
}
