package com.app.temp.domain.vo;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class CompanyInquiryAnswerVO {
    @EqualsAndHashCode.Include
    private Long id;
    private String inquiryAnswerTitle; // 답변 제목 = 문의의 상세 내용
    private String inquiryAnswerDetail;
    private Long companyInquiryId;
    private String createdDate;
    private String updatedDate;
}
