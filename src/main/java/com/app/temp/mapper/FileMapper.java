package com.app.temp.mapper;

import com.app.temp.domain.vo.FileVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface FileMapper {
    //    파일 추가
    public void insertFile  (FileVO fileVO);

    //    파일 삭제
    public void deleteFile (Long id);
}
