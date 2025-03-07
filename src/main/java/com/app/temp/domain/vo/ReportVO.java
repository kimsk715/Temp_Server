package com.app.temp.domain.vo;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class ReportVO {
    @EqualsAndHashCode.Include
    private Long id;
    private String reportDate;
    private String reportSubject;
    private String reportType;
    private String reportDetail;
    private String reportStatus;
    private Long memberId;
    private String createdDate;
    private String updatedDate;
}
