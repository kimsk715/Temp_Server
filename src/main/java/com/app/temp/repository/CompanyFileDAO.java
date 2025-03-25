package com.app.temp.repository;

import com.app.temp.domain.dto.CompanyFileDTO;
import com.app.temp.domain.vo.CompanyFileVO;
import com.app.temp.mapper.CompanyFileMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
@RequiredArgsConstructor
public class CompanyFileDAO {
    private final CompanyFileMapper companyFileMapper;

    //추가하기
    public void saveFile(CompanyFileVO companyFileVO) {
        companyFileMapper.insertMemberFile(companyFileVO);
    }
    
    // 로고 추가하기
    public void saveCompanyLogo(CompanyFileVO companyFileVO) {
        companyFileMapper.insertCompanyLogo(companyFileVO);
    }

    // 삭제하기
    public void deleteFile(Long id) {
        companyFileMapper.deleteMemberFile(id);}

    // 기업 이미지들 조회
    public List<CompanyFileDTO> findCompanyFile(Long id) {
        return companyFileMapper.selectCompanyFile(id);
    }
    
    // 기업 로고 조회
    public CompanyFileDTO findCompanyLogoById(Long id) {
        return companyFileMapper.selectCompanyLogoById(id);
    }

}
