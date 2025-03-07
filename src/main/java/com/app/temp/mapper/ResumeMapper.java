package com.app.temp.mapper;

import com.app.temp.domain.dto.MemberResumeDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;

@Mapper
public interface ResumeMapper {
    public ArrayList<MemberResumeDTO> selectByMemberId(Long memberId);
}
