package com.app.temp.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class MemberInquiryDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String memberInquiryType;
    private String memberName;
    private String memberEmail;
    private String memberInquiryStatus;
    private String memberInquiryDetail;
    private String createdDate;


}
