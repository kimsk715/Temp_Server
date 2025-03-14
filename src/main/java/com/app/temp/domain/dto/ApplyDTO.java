package com.app.temp.domain.dto;

import com.app.temp.domain.vo.AdminVO;
import lombok.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class ApplyDTO {
    @EqualsAndHashCode.Include
    private String programName;
    private String companyName;
    private String programEndDate;
    private String applyMemberStatus;
    private String applyCompanyStatus;
    private Pagination pagination;

}
