package com.app.temp.service;

import com.app.temp.domain.dto.Pagination;
import com.app.temp.domain.dto.ReportInfoDTO;
import com.app.temp.domain.dto.ReportListDTO;
import com.app.temp.repository.ReportDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class ReportService {
    private final ReportDAO reportDAO;

    //    전체 목록
    public ReportListDTO getReportList(Pagination pagination) {
        ReportListDTO reportListDTO = new ReportListDTO();

        pagination.create(reportDAO.findCount(pagination));
        reportListDTO.setPagination(pagination);
        reportListDTO.setReports(reportDAO.findAll(pagination));
        return reportListDTO;
    }

    //    전체 개수
    public int getReportTotal(Pagination pagination) {
        return reportDAO.findCount(pagination);
    }

    //    신고 상세정보
    public Optional<ReportInfoDTO> getReportDetail(Long reportId) {
        return reportDAO.findReportDetail(reportId);
    }

    //    신고 처리상태 수정
    public void updateStatus(ReportInfoDTO reportInfoDTO){
        reportDAO.setReportStatus(reportInfoDTO);
    }
}
