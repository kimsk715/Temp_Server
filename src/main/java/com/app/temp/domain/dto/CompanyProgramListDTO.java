package com.app.temp.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor

public class CompanyProgramListDTO {
    @EqualsAndHashCode.Include
    private List<ProgramInfoDTO> selectProgramWriteByCompanyId;
    private List<ProgramInfoDTO> selectProgramWorkByCompanyId;
    private List<ProgramInfoDTO> selectProgramWaitByCompanyId;
    private List<ProgramInfoDTO> selectProgramEndByCompanyId;
}
