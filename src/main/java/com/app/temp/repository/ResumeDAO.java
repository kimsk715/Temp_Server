package com.app.temp.repository;

import com.app.temp.domain.dto.*;
import com.app.temp.domain.vo.MemberVO;
import com.app.temp.domain.vo.ProgramVO;
import com.app.temp.mapper.ApplyMapper;
import com.app.temp.mapper.ResumeMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class ResumeDAO {

    private final ResumeDTO resumeDTO;
    private final ResumeMapper resumeMapper;

    //  유저 이력서들 조회
    public List<ResumeDTO> findAllMemberResume(Long id){

        return resumeMapper.selectAllMemberResume(id);
    };

//    유저 이력서 추가
    public void setResume(MemberVO member) {
        resumeMapper.insertResume(member);
    }

//    이력서 삭제
    public void deleteResume(Long id){
        resumeMapper.deleteResume(id);
    }
}
