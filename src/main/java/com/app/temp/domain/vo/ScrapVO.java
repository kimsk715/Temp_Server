package com.app.temp.domain.vo;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class ScrapVO {
    @EqualsAndHashCode.Include
    private Long id;
    private Long memberId;
    private Long programId;
    private String createdDate;
    private String updatedDate;

}
