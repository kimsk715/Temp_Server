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
    private List<ReportInfoDTO> reports;
}
