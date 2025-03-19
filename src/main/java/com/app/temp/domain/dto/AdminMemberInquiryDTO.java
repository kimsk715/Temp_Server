package com.app.temp.domain.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter
@Setter
@NoArgsConstructor
public class AdminMemberInquiryDTO {
    private List<MemberInquiryDTO> memberInquiryList;
    private MemberInquiryPagination memberInquiryPagination;
}
