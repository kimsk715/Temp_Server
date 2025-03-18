package com.app.temp.mapper;

import com.app.temp.domain.dto.NoticeInfoDto;
import com.app.temp.domain.dto.NoticeListDTO;
import com.app.temp.domain.dto.NoticePagination;
import com.app.temp.domain.vo.NoticeVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface NoticeMapper {
    public List<NoticeListDTO> selectAll(NoticePagination noticePagination);

    public void insertNotice(NoticeVO noticeVO);

    public void updateNotice(NoticeVO noticeVO);

    public NoticeListDTO selectNoticeById(Long id);

    public int countAll(NoticePagination noticePagination);

}
