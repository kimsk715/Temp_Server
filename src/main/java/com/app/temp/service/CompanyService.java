package com.app.temp.service;

import com.app.temp.domain.dto.CompanyDTO;
import com.app.temp.repository.CompanyDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class CompanyService {
    private final CompanyDAO companyDAO;

    public Optional<CompanyDTO> getById(Long id) {
        return companyDAO.findById(id);
    }
}
