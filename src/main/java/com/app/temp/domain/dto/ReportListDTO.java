package com.app.temp.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public class ReportListDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String reportType;
    private String reportSubject;
    private String memberName;
    private String createdDate;
    private String reportStatus;
    private Pagination pagination;

    // 기업 신고 리스트
    private List<CompanyReportInfoDTO> companyReports;

    // 프로그램 신고 리스트
    private List<ProgramReportInfoDTO> programReports;
}
