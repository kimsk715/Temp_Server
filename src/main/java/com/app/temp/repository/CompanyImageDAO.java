package com.app.temp.repository;

import com.app.temp.domain.dto.CompanyImageDTO;
import com.app.temp.mapper.ImageMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class CompanyImageDAO {
    private final ImageMapper imageMapper;

    public List<CompanyImageDTO> findImageByCompanyId(Long companyId){
        return imageMapper.selectByCompanyId(companyId);
    }

    public int imageCount(Long companyId) {
        return imageMapper.imageCount(companyId);
    }
}
