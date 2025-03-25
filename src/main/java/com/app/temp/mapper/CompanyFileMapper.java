package com.app.temp.mapper;

import com.app.temp.domain.dto.CompanyFileDTO;
import com.app.temp.domain.vo.CompanyFileVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CompanyFileMapper {
    // 파일 추가
    public void insertMemberFile(CompanyFileVO companyFileVO);
    
    // 파일 삭제
    public void deleteFile(Long id);

    // 파일 조회 기업아이디로
    public List<CompanyFileDTO> selectCompanyImages(Long id);
}
