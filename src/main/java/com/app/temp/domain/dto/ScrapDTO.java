package com.app.temp.domain.dto;

import com.app.temp.domain.vo.ScrapVO;
import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class ScrapDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private Long memberId;
    private Long programId;

    public ScrapVO toScrapVO() {
        ScrapVO scrapVO = new ScrapVO();
        scrapVO.setId(id);
        scrapVO.setMemberId(memberId);
        scrapVO.setProgramId(programId);
        return scrapVO;
    }
}
