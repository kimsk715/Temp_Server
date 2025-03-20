package com.app.temp.domain.dto;

import com.app.temp.domain.vo.ResumeVO;
import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class ResumeDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String resumeTitle;
    private String resumeProfilePhoto;
    private String resumeIntroduce;
    private String resumeRequired;
    private Long memberId;
    private String memberName;
    private String memberEmail;
    private String memberPhone;
    private String memberBirth;
    private String createdDate;
    private String updatedDate;

    public ResumeVO toVO (){
        ResumeVO resumeVO = new ResumeVO();

        resumeVO.setId(this.id);
        resumeVO.setResumeTitle(this.resumeTitle);
        resumeVO.setResumeProfilePhoto(this.resumeProfilePhoto);
        resumeVO.setResumeIntroduce(this.resumeIntroduce);
        resumeVO.setMemberId(this.memberId);
        resumeVO.setCreatedDate(this.createdDate);
        resumeVO.setUpdatedDate(this.updatedDate);

        return resumeVO;
    }


}
