package com.app.temp.service;

import com.app.temp.domain.dto.AdminNoticeListDTO;
import com.app.temp.domain.dto.NoticeListDTO;
import com.app.temp.domain.dto.NoticePagination;
import com.app.temp.domain.vo.NoticeVO;
import com.app.temp.repository.NoticeDAO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class NoticeService {
    private final NoticeDAO noticeDAO ;

    public AdminNoticeListDTO getAll(NoticePagination noticePagination) {
        AdminNoticeListDTO adminNoticeListDTO = new AdminNoticeListDTO();
        noticePagination.create(noticeDAO.findAllCount(noticePagination));
        adminNoticeListDTO.setNoticePagination(noticePagination);
        adminNoticeListDTO.setNoticeList(noticeDAO.findAll(noticePagination));
        log.info(adminNoticeListDTO.getNoticeList().toString());
        return adminNoticeListDTO;
    }

    public NoticeListDTO getNotice(Long id) {
        return noticeDAO.findNoticeById(id);
    }

    public void insertNotice(NoticeVO noticeVO) {
        noticeDAO.insertNotice(noticeVO);
    }
    public void updateNotice(NoticeVO noticeVO) {
        noticeDAO.updateNotice(noticeVO);
    }
}
