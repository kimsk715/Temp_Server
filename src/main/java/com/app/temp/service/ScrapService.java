package com.app.temp.service;

import com.app.temp.domain.dto.ScrapDTO;
import com.app.temp.domain.vo.ScrapVO;
import com.app.temp.mapper.ScrapMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class ScrapService {
    private final ScrapMapper scrapMapper;
// 스크랩 생성
    public void create(ScrapVO scrapVO) {
        if(scrapMapper.selectOne(scrapVO).isEmpty()){
            scrapMapper.insert(scrapVO);
        }

    }
// 스크랩 삭제
    public void delete(ScrapVO scrapVO) {
        if(scrapMapper.selectOne(scrapVO).isPresent()){
            scrapMapper.delete(scrapVO);
        }

    }
// 스크랩 조회
    public Optional<ScrapDTO> findOne(ScrapVO scrapVO) {
        return scrapMapper.selectOne(scrapVO);
    }

//  프로그램 ID와 로그인 된 개인 회원 ID로 조회 후 스크랩 여부를 boolean으로 반환
    public boolean isExists(ScrapVO scrapVO){
        if(scrapMapper.selectOne(scrapVO).isEmpty()){
            return false;
        }
        else{
            return true;
        }
    }
//  스크랩 여부를
    public void toggle(ScrapVO scrapVO) {
        Optional<ScrapDTO> scrapDTO = scrapMapper.selectOne(scrapVO);
        if(scrapDTO.isPresent()) {
            scrapMapper.delete(scrapDTO.orElseThrow().toScrapVO());
//            log.info("삭제됨");
        }
        else {
            ScrapDTO newScrapDTO = new ScrapDTO();
            newScrapDTO.setMemberId(scrapVO.getMemberId());
            newScrapDTO.setProgramId(scrapVO.getProgramId());
            scrapMapper.insert(newScrapDTO.toScrapVO());
            log.info("추가됨");
        }
    }
}
