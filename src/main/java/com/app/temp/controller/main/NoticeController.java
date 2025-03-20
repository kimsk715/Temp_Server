package com.app.temp.controller.main;

import com.app.temp.domain.dto.AdminNoticeListDTO;
import com.app.temp.domain.dto.NoticeListDTO;
import com.app.temp.domain.dto.NoticePagination;
import com.app.temp.service.NoticeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/notice/*")
@Slf4j
public class NoticeController {
    private final NoticeService noticeService;

    public NoticeController(NoticeService noticeService) {
        this.noticeService = noticeService;
    }

    @GetMapping("list")
    public String notice(NoticePagination noticePagination, Model model) {
        AdminNoticeListDTO noticeList = noticeService.getAll(noticePagination);
        model.addAttribute("noticeList", noticeList.getNoticeList());
        log.info(model.getAttribute("noticeList").toString());
        return "main/notice-list";
    }

    @GetMapping("detail")
    public String detailTest() {
        return "main/notice-detail";
    }

    @GetMapping("detail/{id}")
    public String detail(@PathVariable Long id, Model model) {
        NoticeListDTO notice = noticeService.getNotice(id);
        model.addAttribute("notice", notice);
        return "main/notice-detail";
    }

}
