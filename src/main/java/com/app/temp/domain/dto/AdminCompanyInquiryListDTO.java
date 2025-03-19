package com.app.temp.domain.dto;
// 기업 회원 전체 목록 조회 + 페이지네이션

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter
@Setter
@NoArgsConstructor
public class AdminCompanyInquiryListDTO {
    private CompanyInquiryPagination companyInquiryPagination;
    private List<CompanyInquiryListDTO> companyInquiryList;
}
