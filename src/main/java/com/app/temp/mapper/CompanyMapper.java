package com.app.temp.mapper;

import com.app.temp.domain.dto.CompanyDTO;
import com.app.temp.domain.dto.ProgramInfoDTO;
import com.app.temp.domain.vo.CompanyVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Optional;

@Mapper
public interface CompanyMapper {
//    기업 회원가입
    public void insert(CompanyVO companyVO);
//    사업자등록번호 중복검사
    public Optional<CompanyDTO> selectByCompanyBusinessNumber(String companyBusinessNumber);
//    기업회원 id로 기업정보 조회
    public Optional<CompanyDTO> selectById(Long id);
//    기업 id로 공고 목록 조회
    public List<ProgramInfoDTO> selectProgramByCompanyId(Long companyId);
//    작성중 공고 목록 조회
    public List<ProgramInfoDTO> selectProgramWriteByCompanyId(Long id);
//    진행중 공고 목록 조회
    public List<ProgramInfoDTO> selectProgramWorkByCompanyId(Long id);
//    승인 요청중 공고 목록 조회
    public List<ProgramInfoDTO> selectProgramWaitByCompanyId(Long id);
//    마감 공고 목록 조회
    public List<ProgramInfoDTO> selectProgramEndByCompanyId(Long id);
}
