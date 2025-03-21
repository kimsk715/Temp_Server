package com.app.temp.controller.main;

import com.app.temp.domain.dto.CompanyReportInfoDTO;
import com.app.temp.domain.dto.ProgramReportInfoDTO;
import com.app.temp.domain.dto.ReportInfoDTO;
import com.app.temp.domain.vo.MemberVO;
import com.app.temp.service.ReportService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/report/*")
@RequiredArgsConstructor
public class ReportUserController {
    private final ReportService reportService;
    private final HttpSession session;

    //  신고 작성(기업 대상)
    @PostMapping("/company-create")
    @ResponseBody
    public void createCompanyReport(@RequestBody ReportInfoDTO reportInfoDTO) {
        MemberVO member = (MemberVO)session.getAttribute("member");
        reportInfoDTO.setMemberId(member.getId());
        reportService.createReport(reportInfoDTO);

        CompanyReportInfoDTO companyReportInfoDTO = new CompanyReportInfoDTO();
        companyReportInfoDTO.setCompanyId(reportInfoDTO.getCompanyId());
        companyReportInfoDTO.setId(reportInfoDTO.getId());
        reportService.createCompanyReport(companyReportInfoDTO);
    }

    //  신고 작성(공고 대상)
    @PostMapping("/program-create")
    @ResponseBody
    public void createProgramReport(@RequestBody ReportInfoDTO reportInfoDTO) {
        MemberVO member = (MemberVO)session.getAttribute("member");
        reportInfoDTO.setMemberId(member.getId());
        reportService.createReport(reportInfoDTO);

        ProgramReportInfoDTO programReportInfoDTO = new ProgramReportInfoDTO();
        programReportInfoDTO.setProgramId(reportInfoDTO.getProgramId());
        programReportInfoDTO.setId(reportInfoDTO.getId());
        reportService.createProgramReport(programReportInfoDTO);
    }
}

