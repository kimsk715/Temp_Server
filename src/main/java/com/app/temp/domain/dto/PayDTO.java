package com.app.temp.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class PayDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private int charge; // 충전 시 충전된 금액
    private int programPrice;
    private Long memberId;
    private Long programId;
    private String createdDate;
    private String paymentStatusLocale;
}
