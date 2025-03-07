package com.app.temp.domain.vo;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class CompanyCategoryVO {
    @EqualsAndHashCode.Include
    private Long id;
    private Long categoryCId;
    private Long companyId;



}
