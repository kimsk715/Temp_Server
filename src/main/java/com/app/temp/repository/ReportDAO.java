package com.app.temp.repository;

import com.app.temp.domain.dto.*;
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

    //    전체 기업 신고 개수 조회
    public int findCompanyReportCount(Pagination pagination) { return  reportMapper.selectCompanyReportTotal(pagination);}

    //    전체 공고 신고 개수 조회
    public int findProgramReportCount(Pagination pagination) { return  reportMapper.selectProgramReportTotal(pagination);}

    //    기업 신고 전체 조회
    public List<CompanyReportInfoDTO> findAllCompanyReport(Pagination pagination) {
        return reportMapper.selectAllCompanyReport(pagination);
    }

    //    공고 신고 전체 조회
    public List<ProgramReportInfoDTO> findAllProgramReport(Pagination pagination) {
        return reportMapper.selectAllProgramReport(pagination);
    }

    //    신고 id로 기업 상세정보 조회
    public Optional<ReportInfoDTO> findCompanyReportDetail(Long reportId) {
        return reportMapper.selectCompanyReportDetailById(reportId);
    }

    //    신고 id로 공고 상세정보 조회
    public Optional<ReportInfoDTO> findProgramReportDetail(Long reportId) {
        return reportMapper.selectProgramReportDetailById(reportId);
    }

    //    신고 처리상태 수정
    public void setReportStatus(ReportInfoDTO reportInfoDTO){
        reportMapper.updateReportStatus(reportInfoDTO);
    };

    //  신고 작성하기
    public void createReport(ReportInfoDTO reportInfoDTO){
        reportMapper.insertReport(reportInfoDTO);
    }

    //  기업신고 작성하기
    public void createCompanyReport(CompanyReportInfoDTO companyReportInfoDTO){
        reportMapper.insertCompanyReport(companyReportInfoDTO);
    }

    //  공고신고 작성하기
    public void createProgramReport(ProgramReportInfoDTO programReportInfoDTO){
        reportMapper.insertProgramReport(programReportInfoDTO);
    }
}
