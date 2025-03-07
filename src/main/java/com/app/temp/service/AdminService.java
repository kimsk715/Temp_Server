package com.app.temp.service;

import com.app.temp.domain.vo.AdminVO;
import com.app.temp.repository.AdminDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class AdminService {
    private final AdminDAO adminDAO;

////    관리자 로그인
public Optional<AdminVO> login(String adminId, String adminPassword) {
    AdminVO adminVO = new AdminVO();
    adminVO.setAdminId(adminId);
    adminVO.setAdminPassword(adminPassword);

    return adminDAO.findByAdminIdAndPassword(adminVO);
}
}
