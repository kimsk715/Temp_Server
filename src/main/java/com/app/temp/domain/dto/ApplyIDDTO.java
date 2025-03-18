package com.app.temp.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;
// 프로그램 상세보기에서 지원하기 버튼 눌렀을 때 보낼 정보들.
@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class ApplyIDDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private Long memberId;
    private Long resumeId;
    private Long programId;
}
