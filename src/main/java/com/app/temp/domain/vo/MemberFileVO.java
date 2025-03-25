package com.app.temp.domain.vo;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class MemberFileVO {
    @EqualsAndHashCode.Include
    private Long id;
    private Long memberId;
    private String type;
}
