package com.app.temp.mapper;

import com.app.temp.domain.dto.CompanyReportDTO;
import com.app.temp.domain.dto.ReportListDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;

@Mapper
public interface ReportMapper {
    public ArrayList<ReportListDTO> selectReportListDtoByMemberId(Long memberId);

    public ArrayList<CompanyReportDTO> selectCompanyReportDTOByCompanyId(Long companyId);


}
