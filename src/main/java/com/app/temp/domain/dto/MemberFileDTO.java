package com.app.temp.domain.dto;

import com.app.temp.domain.vo.AdminVO;
import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class MemberFileDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private Long memberId;
    private String type;
    private String fileName;
    private String filePath;
}

