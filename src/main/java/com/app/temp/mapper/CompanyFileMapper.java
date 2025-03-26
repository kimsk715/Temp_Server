package com.app.temp.mapper;

import com.app.temp.domain.dto.CompanyFileDTO;
import com.app.temp.domain.vo.CompanyFileVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CompanyFileMapper {
    // 파일 추가
    public void insertMemberFile(CompanyFileVO companyFileVO);
    
    // 파일 추가 로고
    public void insertCompanyLogo(CompanyFileVO companyFileVO);
    
    // 파일 삭제
    public void deleteMemberFile(Long id);

    // 파일들 조회 기업아이디로
    public List<CompanyFileDTO> selectCompanyFile(Long id);

    // 파일 조회 기업아이디로
    public CompanyFileDTO selectCompanyThumnail(Long id);

    // 로고 조회 기업아이디로
    public CompanyFileDTO selectCompanyLogoById(Long id);




}
