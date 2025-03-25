package com.app.temp.repository;

import com.app.temp.domain.dto.MemberFileDTO;
import com.app.temp.mapper.AdminMapper;
import com.app.temp.mapper.MemberFileMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;


@Repository
@RequiredArgsConstructor
public class MemberFileDAO {

    private final MemberFileMapper memberFileMapper;

    // 추가하기
    public void insetMemberFile(MemberFileDTO memberFileDTO) {
        memberFileMapper.insertMemberFile(memberFileDTO);
    }

    // 삭제하기
    public void deleteMemberFile(Long id) {
        memberFileMapper.deleteMemberFile(id);
    }

}
