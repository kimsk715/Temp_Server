package com.app.temp.mapper;

import com.app.temp.domain.dto.MemberResumeDTO;
import com.app.temp.domain.dto.ResumeDTO;
import com.app.temp.domain.vo.MemberVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;
import java.util.List;

@Mapper
public interface ResumeMapper {


    //유저 이력서들 조회
    public List<ResumeDTO> selectAllMemberResume(long id);

//   이력서 추가하기
    public void insertResume(MemberVO member);

//    이력서 삭제
    public void deleteResume(Long id);
}
