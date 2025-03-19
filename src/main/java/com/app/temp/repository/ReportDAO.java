package com.app.temp.repository;

import com.app.temp.domain.dto.Pagination;
import com.app.temp.domain.dto.ReportInfoDTO;
import com.app.temp.domain.dto.ReportListDTO;
import com.app.temp.mapper.ReportMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class ReportDAO {
    private final ReportMapper reportMapper;
    public ArrayList<ReportListDTO> findReportListDtoByMemberId(Long memberId) {
        return reportMapper.selectReportListDtoByMemberId(memberId);
    }
    //    전체 신고 조회
    public List<ReportInfoDTO> findAll(Pagination pagination) {
        return reportMapper.selectAll(pagination);
    }

    //    전체 개수 조회
    public int findCount(Pagination pagination) {
        return reportMapper.selectTotal(pagination);
    }

    //    신고 id로 상세정보 조회
    public Optional<ReportInfoDTO> findReportDetail(Long reportId) {
        return reportMapper.selectReportDetailById(reportId);
    }

    //    신고 처리상태 수정
    public void setReportStatus(ReportInfoDTO reportInfoDTO){
        reportMapper.updateReportStatus(reportInfoDTO);
    };
}
