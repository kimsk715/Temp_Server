package com.app.temp.controller.admin;

import com.app.temp.domain.dto.Pagination;
import com.app.temp.domain.dto.ReportInfoDTO;
import com.app.temp.domain.dto.ReportListDTO;
import com.app.temp.service.ReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/reports")
public class ReportController {

    private final ReportService reportService;

    // 신고 목록 조회
    @GetMapping("/list")
    @ResponseBody
    public ReportListDTO getReportList(Pagination pagination) {
        return reportService.getReportList(pagination);
    }

    // 신고 상세 조회
    @GetMapping("/{id}")
    @ResponseBody
    public ReportInfoDTO getReportDetail(@PathVariable Long id) {
        return reportService.getReportDetail(id).orElse(null);
    }

    //    신고 상태 변경
    @PutMapping("/update")
    @ResponseBody
    public ReportListDTO updateStatus(@RequestBody ReportInfoDTO reportInfoDTO, Pagination pagination) {
        reportService.updateStatus(reportInfoDTO);
        // 업데이트된 상태의 신고 목록을 반환
        return reportService.getReportList(pagination);
    }
}
