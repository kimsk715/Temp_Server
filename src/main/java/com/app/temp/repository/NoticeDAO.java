package com.app.temp.repository;

import com.app.temp.domain.dto.NoticeListDTO;
import com.app.temp.domain.dto.NoticePagination;
import com.app.temp.domain.vo.NoticeVO;
import com.app.temp.mapper.NoticeMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class NoticeDAO {
        private final NoticeMapper noticeMapper;

        public List<NoticeListDTO> findAll(NoticePagination noticePagination) {
            return noticeMapper.selectAll(noticePagination);
        }

        public int findAllCount(NoticePagination noticePagination) {
            return noticeMapper.countAll(noticePagination);
        }

        public NoticeListDTO findNoticeById(Long noticeId) {
            return noticeMapper.selectNoticeById(noticeId);
        }

        public void insertNotice(NoticeVO noticeVO) {
            noticeMapper.insertNotice(noticeVO);
        }

        public void updateNotice(NoticeVO noticeVO) {
            noticeMapper.updateNotice(noticeVO);
        }
}

