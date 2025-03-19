package com.app.temp.service;

import com.app.temp.domain.dto.CompanyImageDTO;
import com.app.temp.repository.CompanyImageDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class ImageService {
    private final CompanyImageDAO companyImageDAO;

    public List<CompanyImageDTO> getByCompanyId(Long companyId) {
        return companyImageDAO.findImageByCompanyId(companyId);
    }

    public int imageCount(Long companyId) {
        return companyImageDAO.imageCount(companyId);
    }
}
