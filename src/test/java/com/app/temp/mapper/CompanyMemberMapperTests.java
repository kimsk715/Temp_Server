package com.app.temp.mapper;

import com.app.temp.domain.dto.CompanyMemberDTO;
import com.app.temp.domain.vo.CompanyMemberVO;
import com.app.temp.domain.vo.CompanyVO;
import com.app.temp.domain.vo.MemberVO;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
@Slf4j
public class CompanyMemberMapperTests {

    @Autowired
    private MemberMapper memberMapper;
    @Autowired
    private CompanyMemberMapper companyMemberMapper;
    @Autowired
    private CompanyMapper companyMapper;
    @Autowired
    private HttpSession session;

    @Test
//    기업회원 정보 생성(기업 첫 회원, 관리자 권한)
    public void testInsert() {
        CompanyMemberDTO companyMemberDTO = new CompanyMemberDTO();
        companyMemberDTO.setMemberName("이순신");
        companyMemberDTO.setMemberEmail("lee123@gmail.com");
        companyMemberDTO.setMemberPhone("01054837195");
        companyMemberDTO.setMemberClass("2기업회원");
        companyMemberDTO.setCompanyId(1L);
        companyMemberDTO.setCompanyMemberDepartment("인사부");

        MemberVO memberVO = new MemberVO();
        memberVO.setMemberName(companyMemberDTO.getMemberName());
        memberVO.setMemberEmail(companyMemberDTO.getMemberEmail());
        memberVO.setMemberPhone(companyMemberDTO.getMemberPhone());
        memberVO.setMemberProfilePath(null);
        memberVO.setMemberClass(null);

        memberMapper.insert(memberVO);

        CompanyMemberVO companyMemberVO = new CompanyMemberVO();
        companyMemberVO.setId(memberVO.getId());
        companyMemberVO.setCompanyId(companyMemberDTO.getCompanyId());
        companyMemberVO.setCompanyMemberDepartment(companyMemberDTO.getCompanyMemberDepartment());

        companyMemberMapper.insertCompanyMemberAdmin(companyMemberVO);
    }

    @Test
//    기업회원 정보 생성(링크 초대받음, 권한과 직급 직접설정)
    public void testInsertInvitedCompanyMember() {
        CompanyMemberDTO companyMemberDTO = new CompanyMemberDTO();
        companyMemberDTO.setMemberName("김미영");
        companyMemberDTO.setMemberEmail("kimMY12@hanmail.com");
        companyMemberDTO.setMemberPhone("01012345432");
        companyMemberDTO.setMemberClass("기업회원");
        companyMemberDTO.setCompanyId(1L);
        companyMemberDTO.setCompanyMemberAuthority("뷰어");
        companyMemberDTO.setCompanyMemberPosition("팀장");
        companyMemberDTO.setCompanyMemberDepartment("인사부");

        MemberVO memberVO = new MemberVO();
        memberVO.setMemberName(companyMemberDTO.getMemberName());
        memberVO.setMemberEmail(companyMemberDTO.getMemberEmail());
        memberVO.setMemberPhone(companyMemberDTO.getMemberPhone());
        memberVO.setMemberProfilePath(null);
        memberVO.setMemberClass(null);

        memberMapper.insert(memberVO);

        CompanyMemberVO companyMemberVO = new CompanyMemberVO();
        companyMemberVO.setId(memberVO.getId());
        companyMemberVO.setCompanyId(companyMemberDTO.getCompanyId());
        companyMemberVO.setCompanyMemberAuthority(companyMemberDTO.getCompanyMemberAuthority());
        companyMemberVO.setCompanyMemberPosition(companyMemberDTO.getCompanyMemberPosition());
        companyMemberVO.setCompanyMemberDepartment(companyMemberDTO.getCompanyMemberDepartment());

        companyMemberMapper.insertCompanyMemberAdmin(companyMemberVO);
    }
//    @Test
////    기업회원 여부 확인
//    public void testSelectById() {
//        Long id = 3L;
//        Optional<CompanyMemberDTO> companyMember = companyMemberMapper.selectById(id);
//        if (companyMember.isPresent()) {
//            log.info("기업회원 정보: " + companyMember.get());
//        } else {
//            log.info("개인회원");
//        }
//    }
}
