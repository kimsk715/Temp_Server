package com.app.temp.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class ProgramListDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String companyName;
    private String programName;
    private String createdDate;
    private String programEndDate;
    private String programStatus;
    private String programDetail;
    private String programBenefit;
    private String programThumbnailPath;
    private String companyIntroduce;
}
