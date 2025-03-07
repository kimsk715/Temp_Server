package com.app.temp.domain.vo;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class CompanyImageVO {
    @EqualsAndHashCode.Include
    private Long id;
    private String companyImagePath;
    private String companyImageThumbnail;
    private Long companyId;
    private String createdDate;
    private String updatedDate;
}
