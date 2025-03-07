package com.app.temp.mapper;

import com.app.temp.domain.vo.AdminVO;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Slf4j
public class AdminMapperTests {
    @Autowired
    private AdminMapper adminMapper;

    @Test
    public void testInsert() {
        AdminVO adminVO = new AdminVO();

        adminVO.setAdminId("test");
        adminVO.setAdminPassword("12341234");

        adminMapper.insertAdmin(adminVO);
    }

    @Test
    public void testSelect() {
        AdminVO adminVO = new AdminVO();

        adminVO.setAdminId("test");
        adminVO.setAdminPassword("12341234");

        AdminVO foundAdmin = adminMapper.selectByAdminIdAndPassword(adminVO).orElse(null);
        log.info(foundAdmin.toString());
    }
}
