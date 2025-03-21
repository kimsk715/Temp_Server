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
}
