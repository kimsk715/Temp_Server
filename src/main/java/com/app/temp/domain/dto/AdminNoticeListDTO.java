package com.app.temp.domain.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter
@Setter
@NoArgsConstructor
public class AdminNoticeListDTO {
    private NoticePagination noticePagination;
    private List<NoticeListDTO> noticeList;
}
