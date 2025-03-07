package com.app.temp.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;

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

}
