package com.app.temp.repository;

import com.app.temp.domain.dto.CompanyDTO;
import com.app.temp.domain.dto.ProgramInfoDTO;
import com.app.temp.domain.vo.CompanyVO;
import com.app.temp.mapper.CompanyMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class CompanyDAO {
    private final CompanyMapper companyMapper;

//    기업 회원가입
    public void save(CompanyVO companyVO){
        companyMapper.insert(companyVO);
    }

//    사업자등록번호 중복검사
    public Optional<CompanyDTO> findByCompanyBusinessNumber(String companyBusinessNumber) {
        return companyMapper.selectByCompanyBusinessNumber(companyBusinessNumber);
    }

    //    기업회원 id로 기업정보 조회
    public Optional<CompanyDTO> findById(Long id) {
        return companyMapper.selectById(id);
    }


    //    기업명으로 기업정보 조회
    public Optional<CompanyDTO> findByCompanyName(String companyName) {
        return companyMapper.selectByCompanyName(companyName);
    }

    
//    기업 id로 등록한 공고 조회
    public List<ProgramInfoDTO> findProgramByCompanyId(Long id) {
        return companyMapper.selectProgramByCompanyId(id);
    }

    //    작성중 공고 목록 조회
    public List<ProgramInfoDTO> selectProgramWriteByCompanyId(Long id) {
        return companyMapper.selectProgramWriteByCompanyId(id);
    }

    //    진행중 공고 목록 조회
    public List<ProgramInfoDTO> selectProgramWorkByCompanyId(Long id){
        return companyMapper.selectProgramWorkByCompanyId(id);
    };

    //    승인 요청중 공고 목록 조회
    public List<ProgramInfoDTO> selectProgramWaitByCompanyId(Long id){
        return companyMapper.selectProgramWaitByCompanyId(id);
    };

    //    마감 공고 목록 조회
    public List<ProgramInfoDTO> selectProgramEndByCompanyId(Long id){
        return companyMapper.selectProgramEndByCompanyId(id);
    };

}

