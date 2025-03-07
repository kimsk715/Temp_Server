package com.app.temp.repository;

import com.app.temp.domain.vo.AdminVO;
import com.app.temp.mapper.AdminMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class AdminDAO {
    private final AdminMapper adminMapper;

//    관리자 로그인
    public Optional<AdminVO> findByAdminIdAndPassword(AdminVO adminVO){
        return adminMapper.selectByAdminIdAndPassword(adminVO);
    }

}
