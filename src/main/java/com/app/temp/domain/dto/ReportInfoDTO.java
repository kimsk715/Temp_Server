package com.app.temp.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public class ReportInfoDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String createdDate;
    private String memberName;
    private String reportSubject;
    private String reportType;
    private String reportStatus;
    private String reportDetail;

}