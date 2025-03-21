package com.app.temp.domain.dto;

import com.app.temp.domain.vo.MemberVO;
import lombok.*;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class CompanyMemberInfoAdminDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String companyMainAddress;
    private String companyMemberAuthority;
    private Long companyId;
    private String companyBusinessNumber;
    private int year; // ~~~~년 출력용
    private int month; // ~~월 출력용
    private String companyEstablishment;
    private int companyEmployee; // 사원수
    private String companyLogoPath; // 로고 경로
    private String companyURL; // 대표 홈페이지
    private String companyCertificatePath; // 사업자등록증명원(이미지) 경로
    private String companyIntroduce; // 포함한 이하 3개의 항목은 회사 정보에 포함.
    private String companyWelfare;
    private String companyCulture;
    private String companyName;
    private String companyCEO;
    private String categoryCName;
    private String memberName;
    private String memberEmail;
    private String createdDate;
    private String memberRecentLogin;
    private String memberStatus;
    private String memberPhone;
    private String companyMemberDepartment;
    private String companyMemberPosition;
    private ArrayList<CompanyReportDTO> companyReportList;
    private ArrayList<CompanyProgramDTO> companyProgramList;
    private List<CompanyInquiryListDTO> companyInquiryList;

    public MemberVO toMemberVO() {
        MemberVO memberVO = new MemberVO();
        memberVO.setId(id);
        memberVO.setMemberName(memberName);
        memberVO.setMemberEmail(memberEmail);
        memberVO.setMemberRecentLogin(memberRecentLogin);
        memberVO.setMemberStatus(memberStatus);
        memberVO.setMemberPhone(memberPhone);
        return memberVO;
    }
}
