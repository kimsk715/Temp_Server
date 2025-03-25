package com.app.temp.repository;

import com.app.temp.domain.dto.*;
import com.app.temp.domain.vo.ProgramVO;
import com.app.temp.mapper.ApplyMapper;
import com.app.temp.mapper.ProgramMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Slf4j
@Repository
@RequiredArgsConstructor
public class ProgramDAO {
    private final ApplyMapper applyMapper;
    private final ProgramMapper programMapper;
    // 조회(전체)
    public ArrayList<ProgramListDTO> findAll(ProgramPagination programPagination) {
        return applyMapper.selectAll(programPagination);
    }

    // 특정 회원의 지원 현황 목록 조회
    public ArrayList<ApplyListDTO> findAllApplyByMemberId(Long memberId) {
        return applyMapper.selectApplyListDtoByMemberId(memberId);
    }
//  특정 기업의 프로그램 목록
    public ArrayList<CompanyProgramDTO> findAllProgramByCompanyId(Long companyId) {
        return applyMapper.selectCompanyProgramDTOByCompanyId(companyId);
    }

    //    특정 프로그램의 정보
    public Optional<ProgramListDTO> findProgramInfoDTOById(Long Id) {
        return applyMapper.selectProgramInfoDTOById(Id);
    }
    //  특정 프로그램의 상태 변경(승인완료, 심사중 등...)
    public void set(ProgramVO programVO) {
        applyMapper.update(programVO);
    }

    //  전체 프로그램 목록(/program/list 에서 쓰임)
    public ArrayList<MainProgramListDTO> findAllMain() {
        return applyMapper.selectAllMain();
    }

    //  업종 카테고리 별 프로그램 목록(필터링에서 쓰일 듯)
    public ArrayList<MainProgramListDTO> findAllByCategoryCId(Long categoryCId) {
        return applyMapper.selectAllByCategoryCId(categoryCId);
    }
    //  선택한 공고 상세 보기(프로그램 ID로 조회)
    public Optional<MainProgramInfoDTO> findMainProgramInfoDTOById(Long id) {
        return applyMapper.selectMainProgramInfoDTOById(id);
    }
    // 회사별 프로그램 건수 확인
    public int countByCompanyId(Long companyId) {
        return applyMapper.countByCompanyId(companyId);
    }
    //  전체 프로그램 개수
    public int countAll(ProgramPagination programPagination) {
//        log.info(String.valueOf(applyMapper.countAll(pagination)));
        return applyMapper.countAll(programPagination);
    }

    public ArrayList<ProgramInfoDTO> findAllProgramInfoDTO() {
        return applyMapper.selectAllProgramInfoDTO();
    }

    //    프로그램 검색 리스트
    public ArrayList<MainProgramListDTO> searchProgramsByKeyword(String keyword) {
        return applyMapper.searchProgramsByKeyword(keyword);
    }

//    카테고리 포함한 검색
    public ArrayList<MainProgramListDTO> findAllByCategories(SearchInfoDTO searchInfoDTO) {
        log.info("DAO : {}", applyMapper.selectAllByCategories(searchInfoDTO));
        return applyMapper.selectAllByCategories(searchInfoDTO);
    }
//    인기 순으로 검색
    public List<MainProgramListDTO> findByTopReadCount(SearchInfoDTO searchInfoDTO) {
        return applyMapper.selectByTopReadCount(searchInfoDTO);
    }
//    조회 수
    public void updateReadCount(Long Id) {
        applyMapper.updateReadCount(Id);
    }
}
