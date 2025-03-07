package com.app.temp.mapper;

import com.app.temp.domain.dto.MemberResumeDTO;
import com.app.temp.domain.dto.ResumeDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;
import java.util.List;

@Mapper
public interface ResumeMapper {
    public ArrayList<MemberResumeDTO> selectByMemberId(Long memberId);

    //    이력서 추가
    public void resumeInsert(ResumeDTO resumeDTO);
    //    이력서 페이지 추가
    public void resumeInsertForPage(ResumeDTO resumeDTO);
    //    이력서 전부 조회 (특정 멤버)
    public List<ResumeDTO> resumeAllselect(Long memberId);
    //    이력서 수정
    public void resumeUpdate(ResumeDTO resumeDTO);
    //    이력서 유저의 정보,
    public void resumeSelectMember(ResumeDTO resumeDTO);
}
