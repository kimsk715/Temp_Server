package com.app.temp.service;

import com.app.temp.domain.dto.CompanyDTO;
import com.app.temp.domain.dto.CompanyProgramListDTO;
import com.app.temp.domain.dto.ProgramInfoDTO;
import com.app.temp.repository.CompanyDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class CompanyService {
    private final CompanyDAO companyDAO;
    private final ProgramInfoDTO programInfoDTO;

    public Optional<CompanyDTO> getById(Long id) {
        return companyDAO.findById(id);
    }

    // 기업 마이페이지 공고목록 조회
    public CompanyProgramListDTO selectProgramsByCompanyId(Long id) {
        CompanyProgramListDTO companyProgramListDTO = new CompanyProgramListDTO();

        companyProgramListDTO.setSelectProgramEndByCompanyId(companyDAO.selectProgramEndByCompanyId(id));
        companyProgramListDTO.setSelectProgramWriteByCompanyId(companyDAO.selectProgramWriteByCompanyId(id));
        companyProgramListDTO.setSelectProgramWaitByCompanyId(companyDAO.selectProgramWaitByCompanyId(id));
        companyProgramListDTO.setSelectProgramWorkByCompanyId(companyDAO.selectProgramWorkByCompanyId(id));

        return companyProgramListDTO;
    }

//    기업 공고 등록 임시저장
    public void  pendingCompanyProgram(ProgramInfoDTO programInfoDTO) {
        companyDAO.insertpendingCompanyProgram(programInfoDTO);
    }

//    기업 공고 등록
    public void insertCompanyProgram(ProgramInfoDTO programInfoDTO) {
        companyDAO.insertCompanyProgram(programInfoDTO);
    }

//    기업 공고 수정
    public void updateCompanyProgram(ProgramInfoDTO programInfoDTO) {
    companyDAO.setCompanyProgram(programInfoDTO);
}

//    기업 공고 삭제
    public void deleteCompanyProgram(Long id) {
        companyDAO.deleteCompanyProgram(id);
    }

//    기업 공고 조회
    public ProgramInfoDTO selectCompanyProgram(Long id) {
        return companyDAO.findCompanyProgram(id);
    }

//    기업 특정 공고 조회
    public ProgramInfoDTO selectCompanyProgramById(Long id) {
        return companyDAO.findCompanyProgramById(id);
    }
    
//    기업 수정 임시저장
    public void updatePendingProgramupdatePendingProgram(ProgramInfoDTO programInfoDTO) {
        companyDAO.setPendingProgram(programInfoDTO);
    }
}
