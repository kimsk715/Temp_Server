package com.app.temp.domain.vo;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class MemberInquiryVO {
    @EqualsAndHashCode.Include
    private Long id;
    private String memberInquiryType;
    private String memberInquiryDetail;
    private String memberInquiryStatus;
    private Long memberId;
    private String createdDate;
    private String updatedDate;
}
