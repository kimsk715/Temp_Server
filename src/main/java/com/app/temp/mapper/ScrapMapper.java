package com.app.temp.mapper;

import com.app.temp.domain.dto.ScrapDTO;
import com.app.temp.domain.vo.ScrapVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface ScrapMapper {
    public Optional<ScrapDTO> selectOne(ScrapVO scrapVO);

    public void insert(ScrapVO scrapVO);
    public void delete(ScrapVO scrapVO);
}
