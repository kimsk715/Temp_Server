package com.app.temp.mapper;

import com.app.temp.domain.dto.CompanyReportDTO;
import com.app.temp.domain.dto.Pagination;
import com.app.temp.domain.dto.ReportInfoDTO;
import com.app.temp.domain.dto.ReportListDTO;
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

    //  신고 id로 상세정보 조회
    public Optional<ReportInfoDTO> selectReportDetailById(Long id);

    //  신고 처리상태 수정
    public void updateReportStatus(ReportInfoDTO reportInfoDTO);
}
