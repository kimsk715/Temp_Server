package com.app.temp.domain.vo;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class NoticeVO {
    @EqualsAndHashCode.Include
    private Long id;
    private String noticeTitle;
    private String noticeContent;
    private String noticeCategory;
    private String createdDate;
    private String updatedDate;
}
