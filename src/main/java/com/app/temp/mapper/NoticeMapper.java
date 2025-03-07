package com.app.temp.mapper;

import com.app.temp.domain.dto.NoticeInfoDto;
import com.app.temp.domain.dto.NoticeListDTO;
import com.app.temp.domain.vo.NoticeVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface NoticeMapper {
    public List<NoticeListDTO> selectAll();

    public void insert(NoticeVO noticeVO);

    public NoticeInfoDto selectNoticeById(Long id);
}
