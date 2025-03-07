package com.app.temp.mapper;

import com.app.temp.controller.exception.BusinessNumberAlreadyExistsException;
import com.app.temp.domain.dto.CompanyDTO;
import com.app.temp.domain.dto.CompanyMemberDTO;
import com.app.temp.domain.vo.CompanyVO;
import com.app.temp.repository.CompanyDAO;
import com.app.temp.service.CompanyMemberService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
@Slf4j
public class CompanyMapperTests {
    @Autowired
    private CompanyMapper companyMapper;
    @Autowired
    private CompanyDAO companyDAO;

    @Test
//    기업회원 전용 기업정보 입력하기
    public void testInsert() {
        CompanyVO companyVO = new CompanyVO();
        companyVO.setCompanyBusinessNumber("2039583916");
        companyVO.setCompanyCertificatePath("test.jpg");
        companyVO.setCompanyName("test");
        companyVO.setCompanyCEO("이재용");
        companyVO.setCompanyMainAddress("서울시 강남구");

        companyMapper.insert(companyVO);
        log.info(companyVO.toString());
    }

    @Test
//    사업자등록번호 중복검사
    public void testSelectByCompanyBusinessNumber() {
        CompanyDTO companyDTO = new CompanyDTO();

        companyDTO.setCompanyBusinessNumber("2039583915L");

        Optional<CompanyDTO> foundCompany = companyMapper
                .selectByCompanyBusinessNumber(companyDTO.getCompanyBusinessNumber());

        if(foundCompany.isPresent()) {
            throw new BusinessNumberAlreadyExistsException("이미 존재하는 사업자등록번호입니다.");
        } else {
            log.info("사용 가능한 사업자등록번호입니다.");
        }
    }

    //    기업정보 입력...
    @Test
    public void testInsertPlease() {
        CompanyDTO companyDTO = new CompanyDTO();
        companyDTO.setCompanyBusinessNumber("34843-34848-22");
        companyDTO.setCompanyName("test");
        companyDTO.setCompanyMainAddress("서울");
        companyDTO.setCompanySubAddress("강남");
        companyDTO.setCompanyCEO("테스트");

        companyDAO.save(companyDTO.toVO());
    }
}
