package com.app.temp.domain.dto;

import com.app.temp.domain.vo.MemberVO;
import lombok.*;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class MemberInfoAdminDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String memberName;
    private String memberEmail;
    private String memberStatus; // 활성/비활성
    private String memberRecentLogin;
    private String memberPhone;
    private String memberProfilePath;
    private ArrayList<MemberResumeDTO> resumeList;
    private ArrayList<ApplyListDTO> applyDTOList; // 지원 이력 DTO
    private ArrayList<ReportListDTO> reportDTOList; // 신고 내역 DTO

    public MemberVO toMemberVO(){
        MemberVO memberVO = new MemberVO();
        memberVO.setId(id);
        memberVO.setMemberName(memberName);
        memberVO.setMemberEmail(memberEmail);
        memberVO.setMemberStatus(memberStatus);
        memberVO.setMemberRecentLogin(memberRecentLogin);
        memberVO.setMemberPhone(memberPhone);
        memberVO.setMemberProfilePath(memberProfilePath);
        return memberVO;
    }

}
