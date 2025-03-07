package com.app.temp.domain.dto;

import com.app.temp.domain.vo.MemberInquiryVO;
import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class MemberInquiryInfoDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String memberInquiryType;
    private String memberName;
    private String memberEmail;
    private String memberInquiryStatus;
    private String memberInquiryDetail;
    private String createdDate;

    public MemberInquiryVO toVO(){
        MemberInquiryVO memberInquiryVO = new MemberInquiryVO();
        memberInquiryVO.setId(id);
        memberInquiryVO.setMemberInquiryType(memberInquiryType);
        memberInquiryVO.setMemberInquiryStatus(memberInquiryStatus);
        memberInquiryVO.setMemberInquiryDetail(memberInquiryDetail);
        memberInquiryVO.setCreatedDate(createdDate);
        return memberInquiryVO;
    }
}
