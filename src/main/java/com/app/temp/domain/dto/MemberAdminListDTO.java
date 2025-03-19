package com.app.temp.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class MemberAdminListDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String memberName;
    private String memberEmail;
    private String memberRegisterDate;
    private String memberStatus; // 활성/비활성
    private String memberRecentLogin;
    private String createdDate;
    private String memberProfilePath;
    private ArrayList<MemberResumeDTO> resumeList;
    private ArrayList<ApplyListDTO> applyDTOList; // 지원 이력 DTO
    private ArrayList<ReportListDTO> reportDTOList; // 신고 내역 DTO
}
