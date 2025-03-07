package com.app.temp.mapper;

import com.app.temp.domain.vo.ProgramVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ProgramMapper {
    //    공고등록
    public void insert(ProgramVO programVO);
    //    공고수정
    public void update(ProgramVO programVO);
    //    공고목록 조회
    public ProgramVO selectByPrograms(Long programId);
}
