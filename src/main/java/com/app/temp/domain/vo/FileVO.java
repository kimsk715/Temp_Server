package com.app.temp.domain.vo;


import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class FileVO {
    @EqualsAndHashCode.Include
    private Long id;
    private String fileName;
    private String filePath;
    private String createdDate;
    private String updatedDate;
}
