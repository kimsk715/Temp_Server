package com.app.temp.repository;

import com.app.temp.domain.dto.ApplicationDTO;
import com.app.temp.domain.dto.ApplyDTO;
import com.app.temp.domain.dto.Pagination;
import com.app.temp.mapper.ApplyMapper;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class ApplyDAO {
    private final ApplyMapper applyMapper;

//    마이페이지 지원 조회
    public List<ApplicationDTO> findApplicationById(Long id, Pagination pagination, String applyMemberStatus) {
        return applyMapper.selectApplicationById(id, pagination, applyMemberStatus );
    }
//    마이페이지 지원 조회(total)
    public int findApplicationCount(Long id) {
        return applyMapper.selectApplicationCount(id);
    }

//    마이페이지 지원자 상태
    public Optional<ApplyDTO> selectApplicationMemberStatus(Long id) {
        return applyMapper.selectApplicationMemberStatus(id);
    }
}
