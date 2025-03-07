package com.app.temp.service;

import com.app.temp.controller.exception.BusinessNumberAlreadyExistsException;
import com.app.temp.controller.exception.MemberNotFoundException;
import com.app.temp.domain.dto.CompanyDTO;
import com.app.temp.domain.vo.CompanyVO;
import com.app.temp.domain.dto.CompanyMemberDTO;
import com.app.temp.domain.dto.MemberDTO;
import com.app.temp.repository.CompanyDAO;
import com.app.temp.repository.CompanyMemberDAO;
import com.app.temp.repository.MemberDAO;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class CompanyMemberService {

    private final MemberDAO memberDAO;
    private final CompanyDAO companyDAO;
    private final CompanyMemberDAO companyMemberDAO;

    //    이메일로 기업회원 조회
    public Optional<CompanyMemberDTO> findByMemberEmail(String memberEmail) {
        return companyMemberDAO.findByMemberEmail(memberEmail);
    }

    // id로 회사 정보 조회
    public Optional<CompanyDTO> getCompanyInfoById(Long companyId) {
        return companyDAO.findById(companyId);
    }

    // 기업회원 회원가입
    @Transactional(rollbackFor = Exception.class)
    public void registerCompanyMember(HttpSession session, CompanyDTO companyDTO, CompanyMemberDTO companyMemberDTO) {
        // 세션에서 멤버 정보 가져오기
        MemberDTO memberDTO = (MemberDTO) session.getAttribute("member");

        if (memberDTO == null) {
            throw new MemberNotFoundException("회원정보 찾을 수 없음");
        }

        // 사업자등록번호 중복검사
        Optional<CompanyDTO> existingCompany = companyDAO.findByCompanyBusinessNumber(companyDTO.getCompanyBusinessNumber());
        if (existingCompany.isPresent()) {
            throw new BusinessNumberAlreadyExistsException("이미 존재하는 사업자등록번호입니다.");
        }

        // TBL_MEMBER에 회원 정보가 있는지 확인
        if (memberDTO.getId() == null) {
            // TBL_MEMBER에 회원 정보가 없으면 insert
            memberDAO.save(memberDTO.toVO());
            log.info("회원 정보가 TBL_MEMBER에 저장되었습니다.");
        } else {
            log.info("회원 정보가 이미 TBL_MEMBER에 존재합니다. ID: {}", memberDTO.getId());
        }

        // TBL_COMPANY에 회사 정보 저장
        companyDAO.save(companyDTO.toVO()); // TBL_COMPANY에 저장
        log.info("회사의 정보가 TBL_COMPANY에 저장되었습니다.");

        // TBL_COMPANY에서 저장된 회사 정보의 ID를 다시 조회
        CompanyDTO savedCompanyDTO = companyDAO.findByCompanyBusinessNumber(companyDTO.getCompanyBusinessNumber()).orElseThrow(() -> new RuntimeException("저장된 회사 정보 조회 실패"));

        // 회사 ID가 제대로 저장되었는지 확인
        log.info("저장된 회사 정보: {}", savedCompanyDTO);

        // TBL_COMPANY_MEMBER에 기업회원 정보 저장
        companyMemberDTO.setCompanyId(savedCompanyDTO.getId()); // 저장된 company의 ID를 반영
        companyMemberDTO.setId(memberDTO.getId()); // memberId를 설정 (중요)
        companyMemberDTO.setCompanyMemberAuthority("ADMIN");  // 'ADMIN'으로 설정
        companyMemberDTO.setCompanyMemberDepartment("부서 선택 안함");
        log.info(companyMemberDTO.toString());
        companyMemberDAO.saveFirstCompanyMember(companyMemberDTO.toVO()); // TBL_COMPANY_MEMBER에 저장
        log.info("기업회원 정보가 TBL_COMPANY_MEMBER에 저장되었습니다.");


        // ✅ 회원 등급을 기업회원으로 업데이트
        memberDAO.setMemberClass(memberDTO.getId());

        // ✅ 로그인 시간 업데이트
        memberDAO.updateMemberRecentLogin(memberDTO.getId());

        // 세션에 회사와 기업회원 정보 저장
        session.setAttribute("companyMember", companyMemberDTO);
        session.setAttribute("company", savedCompanyDTO);
        log.info("세션에 회사 정보와 기업회원 정보가 저장되었습니다.");

        // 컨트롤러나 서비스에서 세션 정보 확인
        Object companyMember = session.getAttribute("companyMember");
        Object company = session.getAttribute("company");

        // 정보가 저장되었는지 확인
        if (companyMember != null) {
            log.info("companyMember: {}", companyMember);
        } else {
            log.info("companyMember는 세션에 없습니다.");
        }

        if (company != null) {
            log.info("company: {}", company);
        } else {
            log.info("company는 세션에 없습니다.");
        }
    }
}
