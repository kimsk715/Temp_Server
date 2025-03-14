package com.app.temp.domain.dto;

import com.app.temp.domain.vo.ScrapVO;
import lombok.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class ApplicationDTO {
    @EqualsAndHashCode.Include
    private List<ApplyDTO> applyDTOList;
    private Pagination pagination;

}
