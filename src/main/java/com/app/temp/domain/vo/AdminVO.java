package com.app.temp.domain.vo;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class AdminVO {
    @EqualsAndHashCode.Include
    private Long id;
    private String adminId;
    private String adminPassword;
}
