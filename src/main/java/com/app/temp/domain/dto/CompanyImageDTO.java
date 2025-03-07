package com.app.temp.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class CompanyImageDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String companyImagePath;
    private Long companyId;
}
