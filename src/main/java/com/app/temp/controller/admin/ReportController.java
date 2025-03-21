package com.app.temp.controller.admin;

import com.app.temp.domain.dto.Pagination;
import com.app.temp.domain.dto.ReportInfoDTO;
import com.app.temp.domain.dto.ReportListDTO;
import com.app.temp.service.ReportService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/home/reports")
@Slf4j
public class ReportController {

    private final ReportService reportService;

    // 기업 신고 목록 조회
    @GetMapping("/company-list")
    @ResponseBody
    public ReportListDTO getCompanyReportList(Pagination pagination) {
        return reportService.getCompanyReportList(pagination);
    }

    // 공고 신고 목록 조회
    @GetMapping("/program-list")
    @ResponseBody
    public ReportListDTO getProgramReportList(Pagination pagination) {
        return reportService.getProgramReportList(pagination);
    }

    // 기업 신고 상세 조회
    @GetMapping("/company/{id}")
    @ResponseBody
    public ReportInfoDTO getCompanyReportDetail(@PathVariable Long id) {
        return reportService.getCompanyReportDetail(id).orElse(null);
    }

    // 공고 신고 상세 조회
    @GetMapping("/program/{id}")
    @ResponseBody
    public ReportInfoDTO getProgramReportDetail(@PathVariable Long id) {
        return reportService.getProgramReportDetail(id).orElse(null);
    }

    // 기업 신고 상태 변경
    @PutMapping("/company/update")
    @ResponseBody
    public ReportListDTO updateCompanyStatus(@RequestBody ReportInfoDTO reportInfoDTO, Pagination pagination) {
        reportService.updateStatus(reportInfoDTO);
        // 업데이트된 상태의 신고 목록을 반환
        return reportService.getCompanyReportList(pagination);
    }

    // 공고 신고 상태 변경
    @PutMapping("/program/update")
    @ResponseBody
    public ReportListDTO updateProgramStatus(@RequestBody ReportInfoDTO reportInfoDTO, Pagination pagination) {
        reportService.updateStatus(reportInfoDTO);
        // 업데이트된 상태의 신고 목록을 반환
        return reportService.getProgramReportList(pagination);
    }
}
