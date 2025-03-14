package com.app.temp.mapper;

import com.app.temp.domain.dto.MypageDTO;
import com.app.temp.domain.dto.ScrapDTO;
import com.app.temp.domain.vo.ScrapVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Optional;

@Mapper
public interface ScrapMapper {
    public Optional<ScrapDTO> selectOne(ScrapVO scrapVO);

    public void insert(ScrapVO scrapVO);
    public void delete(ScrapVO scrapVO);

    // 내가 스크랩한 프로그램들
    public List<ScrapDTO> selectScraps(Long memberId);
    // 스크랩 추가하기
    public void insertScrap(ScrapDTO scrapDTO);
    //  마이페이지 스크랩 리스트 조회
    public List<MypageDTO> selectMemberScrabByMemberId(Long id);
}
