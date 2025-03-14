package com.app.temp.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter @Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class MypageDTO {
    @EqualsAndHashCode.Include
    private List<ScrapDTO> scrapDTOList;
    private String companyName;
    private String programName;
    private String programThumbnailPath;
    private String programEndDate;
}
