package com.app.temp.domain.vo;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor

public class InquiryAnswerVO {
    @EqualsAndHashCode.Include
    private Long id;
    private String inquiryAnswerTitle;
    private String inquiryAnswerDetail;
    private Long memberInquiryId;
    private String createdDate;
    private String updatedDate;
}
