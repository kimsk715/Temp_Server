package com.app.temp.domain.dto;

import com.app.temp.domain.vo.InquiryAnswerVO;
import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor

public class InquiryAnswerDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String inquiryAnswerTitle;
    private String inquiryAnswerDetail;
    private Long memberInquiryId;
    private String createdDate;

    public InquiryAnswerVO toInquiryAnswerVO() {
        InquiryAnswerVO inquiryAnswerVO = new InquiryAnswerVO();
        inquiryAnswerVO.setId(id);
        inquiryAnswerVO.setInquiryAnswerTitle(inquiryAnswerTitle);
        inquiryAnswerVO.setMemberInquiryId(memberInquiryId);
        inquiryAnswerVO.setInquiryAnswerDetail(inquiryAnswerDetail);
        inquiryAnswerVO.setCreatedDate(createdDate);
        return inquiryAnswerVO;
    }

}
