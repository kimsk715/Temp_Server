package com.app.temp.domain.vo;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class ProgramVO {
    @EqualsAndHashCode.Include
    private Long id;
    private String programName;
    private String programDetail;
    private String programExpired;
    private String programStatus;
    private String programEndDate;
    private int programPrice;
    private String programBenefit;
    private String programThumbnailPath;
    private Long companyId;
    private String categoryCId;
    private String createdDate;
    private String updatedDate;

}
