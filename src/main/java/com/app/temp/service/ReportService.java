package com.app.temp.service;

import com.app.temp.domain.dto.*;
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

    //   기업신고 전체 목록
    public ReportListDTO getCompanyReportList(Pagination pagination) {
        ReportListDTO reportListDTO = new ReportListDTO();

        pagination.create(reportDAO.findCompanyReportCount(pagination));
        reportListDTO.setPagination(pagination);
        reportListDTO.setCompanyReports(reportDAO.findAllCompanyReport(pagination));
        return reportListDTO;
    }

    //   공고신고 전체 목록
    public ReportListDTO getProgramReportList(Pagination pagination) {
        ReportListDTO reportListDTO = new ReportListDTO();

        pagination.create(reportDAO.findProgramReportCount(pagination));
        reportListDTO.setPagination(pagination);
        reportListDTO.setProgramReports(reportDAO.findAllProgramReport(pagination));
        return reportListDTO;
    }

    //    전체 기업 신고 개수
    public int getCompanyReportTotal(Pagination pagination) {
        return reportDAO.findCompanyReportCount(pagination);
    }

    //    전체 공고 신고 개수
    public int getProgramReportTotal(Pagination pagination) { return reportDAO.findProgramReportCount(pagination); }

    //    기업신고 상세정보
    public Optional<ReportInfoDTO> getCompanyReportDetail(Long reportId) {
        return reportDAO.findCompanyReportDetail(reportId);
    }

    //    공고신고 상세정보
    public Optional<ReportInfoDTO> getProgramReportDetail(Long reportId) {
        return reportDAO.findProgramReportDetail(reportId);
    }

    //    신고 처리상태 수정
    public void updateStatus(ReportInfoDTO reportInfoDTO){
        reportDAO.setReportStatus(reportInfoDTO);
    }

    //    신고 작성
    public void createReport(ReportInfoDTO reportInfoDTO){
        reportDAO.createReport(reportInfoDTO);
    }

    //    기업 신고 작성
    public void createCompanyReport(CompanyReportInfoDTO companyReportInfoDTO) {
        reportDAO.createCompanyReport(companyReportInfoDTO);
    }

    //    공고 신고 작성
    public void createProgramReport(ProgramReportInfoDTO programReportInfoDTO) {
        reportDAO.createProgramReport(programReportInfoDTO);
    }
}
