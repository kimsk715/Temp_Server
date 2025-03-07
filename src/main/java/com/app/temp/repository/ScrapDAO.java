package com.app.temp.repository;

import com.app.temp.domain.dto.ScrapDTO;
import com.app.temp.domain.vo.ScrapVO;
import com.app.temp.mapper.ScrapMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class ScrapDAO {
    private final ScrapMapper scrapMapper;

//   프로그램 ID + 멤버 ID 로 스크랩 조회
    public Optional<ScrapDTO> findOne(ScrapVO scrapVO) {
        return scrapMapper.selectOne(scrapVO);
    }
//   스크랩 추가
    public void save(ScrapVO scrapVO) {
        scrapMapper.insert(scrapVO);
    }
//    스크랩 제거
    public void delete(ScrapVO scrapVO) {
        scrapMapper.delete(scrapVO);
    }
}
