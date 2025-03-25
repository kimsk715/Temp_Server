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
    private int paymentPoint;
    private Long memberId;
    private String createdDate;
    private String paymentStatusLocale;
}
