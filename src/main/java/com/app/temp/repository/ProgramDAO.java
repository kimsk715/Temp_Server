package com.app.temp.repository;

import com.app.temp.domain.dto.*;
import com.app.temp.domain.vo.ProgramVO;
import com.app.temp.mapper.ApplyMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class ProgramDAO {
    private final ApplyMapper applyMapper;

    // 조회(전체)
    public ArrayList<ProgramListDTO> findAll() {
        return applyMapper.selectAll();
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
    public Optional<ProgramInfoDTO> findProgramInfoDTOById(Long Id) {
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

}
