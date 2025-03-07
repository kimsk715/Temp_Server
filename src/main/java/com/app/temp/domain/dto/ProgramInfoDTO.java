package com.app.temp.domain.dto;

import com.app.temp.domain.vo.ProgramVO;
import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class ProgramInfoDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String companyName;
    private String programName;
    private String createdDate;
    private String programEndDate;
    private String programStatus;
    private String programDetail;
    private int programPrice;
    private String programBenefit;
    private String programThumbNailPath;

    public ProgramVO toProgramVO() {
        ProgramVO programVO = new ProgramVO();
        programVO.setId(id);
        programVO.setProgramName(programName);
        programVO.setProgramDetail(programDetail);
        programVO.setCreatedDate(createdDate);
        programVO.setProgramEndDate(programEndDate);
        programVO.setProgramStatus(programStatus);
        programVO.setProgramPrice(programPrice);
        programVO.setProgramBenefit(programBenefit);
        programVO.setProgramThumbnailPath(programThumbNailPath);

        return programVO;
    }

}
