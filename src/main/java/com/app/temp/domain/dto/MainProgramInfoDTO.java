package com.app.temp.domain.dto;

import com.app.temp.domain.vo.ProgramVO;
import lombok.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class MainProgramInfoDTO {
    @EqualsAndHashCode.Include
    private Long id; // 프로그램 번호
    private String programName;
    private Long categoryCid;
    private String categoryCname;
    private String programEndDate;
    private String programDetail;
    private int programPrice;
    private String programBenefit;
    private String companyName;
    private String companyIntroduce;
    private String companyEstablishment;
    private String companyAddress;
    private String companyLogoPath; // 로고 경로
    private String companyWelfare;
    private String companyCulture;
    private List<CompanyImageDTO> companyImageList;

    public ProgramVO toProgramVO() {
        ProgramVO programVO = new ProgramVO();
        programVO.setId(id);
        programVO.setProgramName(programName);
        programVO.setProgramDetail(programDetail);
        programVO.setProgramEndDate(programEndDate);
        programVO.setProgramPrice(programPrice);
        programVO.setProgramBenefit(programBenefit);
        return programVO;
    }

}
