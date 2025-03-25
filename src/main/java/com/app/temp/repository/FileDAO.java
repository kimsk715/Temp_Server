package com.app.temp.repository;

import com.app.temp.domain.vo.AdminVO;
import com.app.temp.domain.vo.FileVO;
import com.app.temp.mapper.AdminMapper;
import com.app.temp.mapper.FileMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
@RequiredArgsConstructor
public class FileDAO {
    private final AdminMapper adminMapper;
    private final FileMapper fileMapper;

    //    추가하기
    public void save(FileVO fileVO){
        fileMapper.insertFile(fileVO);
    }

    //    파일 삭제
    public void delete(Long id){
        fileMapper.deleteFile(id);
    }

}
