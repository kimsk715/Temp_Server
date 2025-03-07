package com.app.temp.domain.dto;

import com.app.temp.domain.vo.MemberVO;
import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class MemberDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String memberName;
    private String memberPhone;
    private String memberRecentLogin;
    private String memberEmail;
    private String memberPassword;
    private String memberProfilePath;
    private String memberClass;
    private String memberPoint;
    private String memberStatus;
    private String createdDate;
    private String updatedDate;

    public MemberVO toVO(){
        MemberVO memberVO = new MemberVO();
        memberVO.setId(id);
        memberVO.setMemberName(memberName);
        memberVO.setMemberPhone(memberPhone);
        memberVO.setMemberRecentLogin(memberRecentLogin);
        memberVO.setMemberEmail(memberEmail);
        memberVO.setMemberPassword(memberPassword);
        memberVO.setMemberProfilePath(memberProfilePath);
        memberVO.setMemberClass(memberClass);
        memberVO.setMemberPoint(memberPoint);
        memberVO.setMemberStatus(memberStatus);
        memberVO.setCreatedDate(createdDate);
        memberVO.setUpdatedDate(updatedDate);

        return memberVO;
    }
}
