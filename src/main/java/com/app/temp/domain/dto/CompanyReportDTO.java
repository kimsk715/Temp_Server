package com.app.temp.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class CompanyReportDTO {
    @EqualsAndHashCode.Include
    private Long companyId;
    private String reportDate;
    private String reportType;
    private String reportStatus;
}
