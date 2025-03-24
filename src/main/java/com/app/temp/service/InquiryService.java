package com.app.temp.service;

import com.app.temp.domain.dto.*;
import com.app.temp.domain.vo.CompanyInquiryAnswerVO;
import com.app.temp.domain.vo.CompanyInquiryVO;
import com.app.temp.domain.vo.InquiryAnswerVO;
import com.app.temp.domain.vo.MemberInquiryVO;
import com.app.temp.repository.CompanyInquiryDAO;
import com.app.temp.repository.InquiryDAO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class InquiryService {
    private final InquiryDAO inquiryDAO;
    private final CompanyInquiryDAO companyInquiryDAO;

    public AdminMemberInquiryDTO getAll(MemberInquiryPagination memberInquiryPagination) {
        AdminMemberInquiryDTO adminMemberInquiryDTO = new AdminMemberInquiryDTO();
        memberInquiryPagination.create(inquiryDAO.countAll(memberInquiryPagination));
        adminMemberInquiryDTO.setMemberInquiryPagination(memberInquiryPagination);
        adminMemberInquiryDTO.setMemberInquiryList(inquiryDAO.findAll(memberInquiryPagination));
        log.info(memberInquiryPagination.toString());
        log.info(String.valueOf(inquiryDAO.countAll(memberInquiryPagination)));
        return adminMemberInquiryDTO;
    }

    public AdminCompanyInquiryListDTO getAllCompany(CompanyInquiryPagination companyInquiryPagination) {
        AdminCompanyInquiryListDTO adminCompanyInquiryListDTO = new AdminCompanyInquiryListDTO();
        companyInquiryPagination.create(companyInquiryDAO.countAllAdmin(companyInquiryPagination));
        adminCompanyInquiryListDTO.setCompanyInquiryList(companyInquiryDAO.findAllAdmin(companyInquiryPagination));
        adminCompanyInquiryListDTO.setCompanyInquiryPagination(companyInquiryPagination);
        return adminCompanyInquiryListDTO;
    }

    public void updateMemberInquiry(MemberInquiryVO memberInquiryVO) {
        inquiryDAO.set(memberInquiryVO);
    }

    public void updateCompanyInquiry(CompanyInquiryVO companyInquiryVO) {
        inquiryDAO.setCompanyInquiry(companyInquiryVO);
    }

    public MemberInquiryDTO getMemberInquiryById(Long id){
        return inquiryDAO.findMemberInquiryById(id);
    }

    public CompanyInquiryListDTO getCompanyInquiryById(Long id){
        return companyInquiryDAO.findById(id);
    }

    public void setMemberInquiryAnswer(InquiryAnswerVO inquiryAnswerVO) {
        inquiryDAO.setMemberInquiryAnswer(inquiryAnswerVO);
    }

    public void setCompanyInquiryAnswer(CompanyInquiryAnswerVO companyInquiryAnswerVO) {
        companyInquiryDAO.setCompanyInquiryAnswer(companyInquiryAnswerVO);
    }

    public Optional<CompanyInquiryInfoDTO> getCompanyInquiryInfoById(Long id){
        return companyInquiryDAO.findInquiryById(id);
    }

    public void setMemberInquiry(MemberInquiryVO memberInquiryVO){
        inquiryDAO.saveMemberInquiry(memberInquiryVO);
    }
}

