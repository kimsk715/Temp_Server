package com.app.temp.mapper;

import com.app.temp.domain.dto.CompanyFileDTO;
import com.app.temp.domain.vo.CompanyFileVO;
import com.app.temp.domain.vo.FileVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CompanyFileMapper {
    // 파일 추가
    public void insertMemberFile(CompanyFileVO companyFileVO);
    
    // 파일 삭제
    public void deleteFile(Long id);
}
