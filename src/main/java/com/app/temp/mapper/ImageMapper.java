package com.app.temp.mapper;

import com.app.temp.domain.dto.CompanyImageDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ImageMapper {

    public List<CompanyImageDTO> selectByCompanyId(Long companyId);
}
