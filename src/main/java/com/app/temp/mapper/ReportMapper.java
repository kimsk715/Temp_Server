package com.app.temp.mapper;

import com.app.temp.domain.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Mapper
public interface ReportMapper {
    public ArrayList<ReportListDTO> selectReportListDtoByMemberId(Long memberId);

    public ArrayList<CompanyReportDTO> selectCompanyReportDTOByCompanyId(Long companyId);

    //  전체 목록 조회
    public List<ReportInfoDTO> selectAll(Pagination pagination);

    //  전체 개수 조회
    public int selectTotal(Pagination pagination);

    //  기업 신고 전체 개수 조회
    public int selectCompanyReportTotal(Pagination pagination);

    //  공고 신고 전체 개수 조회
    public int selectProgramReportTotal(Pagination pagination);

    //  신고 id로 기업 상세정보 조회
    public Optional<ReportInfoDTO> selectCompanyReportDetailById(Long id);

    //  신고 id로 공고 상세정보 조회
    public Optional<ReportInfoDTO> selectProgramReportDetailById(Long id);

    //  신고 처리상태 수정
    public void updateReportStatus(ReportInfoDTO reportInfoDTO);

    //  신고 작성하기
    public void insertReport(ReportInfoDTO reportInfoDTO);

    //  기업신고 작성하기(기업신고 테이블만)
    public void insertCompanyReport(CompanyReportInfoDTO companyReportInfoDTO);

    //  공고신고 작성하기(공고신고 테이블만)
    public void insertProgramReport(ProgramReportInfoDTO programReportInfoDTO);

    //  기업 신고 전체 목록 조회
    public List<CompanyReportInfoDTO> selectAllCompanyReport(Pagination pagination);

    //  공고 신고 전체 목록 조회
    public List<ProgramReportInfoDTO> selectAllProgramReport(Pagination pagination);
}
