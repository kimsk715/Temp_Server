package com.app.temp.mapper;

import com.app.temp.domain.dto.MemberFileDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MemberFileMapper {
    //    파일 추가
    public void insertMemberFile(MemberFileDTO memberFileDTO);


    //    파일 삭제
    public void deleteMemberFile(Long id);

}
