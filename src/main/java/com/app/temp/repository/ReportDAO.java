package com.app.temp.repository;

import com.app.temp.domain.dto.ReportListDTO;
import com.app.temp.mapper.ReportMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
@RequiredArgsConstructor
public class ReportDAO {
    private final ReportMapper reportMapper;
    public ArrayList<ReportListDTO> findReportListDtoByMemberId(Long memberId) {
        return reportMapper.selectReportListDtoByMemberId(memberId);
    }
}
