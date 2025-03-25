package com.app.temp.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class CompanyFileDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private Long companyId;
    private String type;
    private String fileName;
    private String filePath;

    }

