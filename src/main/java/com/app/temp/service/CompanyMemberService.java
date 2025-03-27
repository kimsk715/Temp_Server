package com.app.temp.service;

import com.app.temp.controller.exception.BusinessNumberAlreadyExistsException;
import com.app.temp.controller.exception.MemberNotFoundException;
import com.app.temp.domain.dto.*;

import com.app.temp.domain.vo.CompanyMemberVO;
import com.app.temp.domain.vo.MemberVO;

import com.app.temp.repository.*;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class CompanyMemberService {
    private final ProgramDAO programDAO;
    private final MemberDAO memberDAO;
    private final CompanyDAO companyDAO;
    private final CompanyMemberDAO companyMemberDAO;
    private final CompanyInquiryDAO companyInquiryDAO;
    private final HttpSession session;

//    기업 회원 id로 기업 회원정보 조회
    public Optional<CompanyMemberInfoAdminDTO> selectCompanyMemberInfoById(Long id) {

       return Optional.ofNullable(companyMemberDAO.findCompanyMemberInfoById(id).orElseThrow(() -> new MemberNotFoundException("찾지못함")));
    }


    //    이메일로 기업회원 조회
    public Optional<CompanyMemberDTO> selectByMemberEmail(String memberEmail) {
        return companyMemberDAO.findByMemberEmail(memberEmail);
    }

    // id로 회사 정보 조회
    public Optional<CompanyDTO> getCompanyInfoById(Long companyId) {
        return companyDAO.findById(companyId);
    }

    // 기업회원 회원가입
    @Transactional(rollbackFor = Exception.class)
    public void registerCompanyMember(HttpSession session, CompanyDTO companyDTO, CompanyMemberDTO companyMemberDTO, MultipartFile file) throws IOException {
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

        // 사업자등록증 저장(다음에 인증할게요 체크하면 '인증 안 함'으로 insert)

        String rootPath= "/upload/";
        file.transferTo(new File(rootPath, file.getOriginalFilename()));

        companyDTO.setCompanyCertificatePath(rootPath + file.getOriginalFilename());

        // TBL_MEMBER에 회원 정보가 있는지 확인
        if (memberDTO.getId() == null) {
            // TBL_MEMBER에 회원 정보가 없으면 insert
            memberDAO.insertPayHistory(memberDTO.toVO());
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


        // 회원 등급을 기업회원으로 업데이트
        memberDAO.setMemberClass(memberDTO.getId());

        // 로그인 시간 업데이트
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

    //    초대받은 기업회원 가입
    public void addInvitedMember(MemberVO member, String companyName, String role) {
        // company_member 테이블에 추가
        CompanyMemberVO companyMember = new CompanyMemberVO();
        Optional<CompanyDTO> foundCompany = companyDAO.findByCompanyName((String)session.getAttribute("companyName"));
        if (foundCompany.isPresent()) {
            companyMember.setCompanyId(foundCompany.get().getId());
        }

        companyMember.setId(member.getId());
        companyMember.setCompanyMemberAuthority(role);
        companyMember.setCompanyMemberDepartment("선택 안함");
        companyMember.setCompanyMemberPosition("사원");

        companyMemberDAO.saveInvitedCompanyMember(companyMember);

        // ✅ 회원 등급을 기업회원으로 업데이트
        memberDAO.setMemberClass(member.getId());

        // ✅ 로그인 시간 업데이트
        memberDAO.updateMemberRecentLogin(member.getId());

    }

    // 관리자 페이지에서 기업 회원 목록 조회
    public AdminCompanyMemberListDTO getAllAdmin(CompanyMemberPagination companyMemberPagination) {
        AdminCompanyMemberListDTO adminCompanyMemberListDTO = new AdminCompanyMemberListDTO();
        companyMemberPagination.create(companyMemberDAO.countAllCompanyMember(companyMemberPagination));
        adminCompanyMemberListDTO.setCompanyMemberPagination(companyMemberPagination);
        adminCompanyMemberListDTO.setCompanyMemberList(companyMemberDAO.findAllAdmin(companyMemberPagination));
        return adminCompanyMemberListDTO;
    }

    public Optional<CompanyMemberInfoAdminDTO> getById(Long companyMemberId) {
        Optional<CompanyMemberInfoAdminDTO> companyMember = companyMemberDAO.findCompanyMemberInfoById(companyMemberId);
        Long companyId = companyMember.get().getCompanyId();
        companyMember.ifPresent(companyMemberInfoAdminDTO -> companyMemberInfoAdminDTO.setCompanyInquiryList(companyInquiryDAO.findByCompanyId(companyId)));
        companyMember.ifPresent(companyMemberInfoAdminDTO -> companyMemberInfoAdminDTO.setCompanyProgramList(programDAO.findAllProgramByCompanyId(companyId)));
        return companyMember;
    }

}
