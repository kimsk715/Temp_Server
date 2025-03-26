package com.app.temp.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class MainProgramListDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String companyName;
    private Long companyId;
    private String programName;
    private String programEndDate;
    private String dDay;
    private String programThumbnailPath;
    private String scrapStatus;
    private Long categoryCId;
    private Long categoryAId;
    private String filePath;
    private String fileName;
    //    0319 수정

}
