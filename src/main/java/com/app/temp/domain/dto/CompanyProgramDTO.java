package com.app.temp.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class CompanyProgramDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String programName;
    private String createdDate; // 등록일
    private String programEndDate;
    private String programExpired;
}
