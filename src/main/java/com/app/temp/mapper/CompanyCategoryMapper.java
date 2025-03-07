package com.app.temp.mapper;

import com.app.temp.domain.vo.CompanyCategoryVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CompanyCategoryMapper {

    public List<CompanyCategoryVO> selectByCompanyId(Long companyId);
}
