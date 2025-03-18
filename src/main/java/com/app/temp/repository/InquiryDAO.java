package com.app.temp.repository;

import com.app.temp.domain.dto.MemberInquiryDTO;
import com.app.temp.domain.dto.MemberInquiryPagination;
import com.app.temp.domain.vo.CompanyInquiryVO;
import com.app.temp.domain.vo.InquiryAnswerVO;
import com.app.temp.domain.vo.MemberInquiryVO;
import com.app.temp.mapper.CompanyInquiryMapper;
import com.app.temp.mapper.InquiryAnswerMapper;
import com.app.temp.mapper.MemberInquiryMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor

public class InquiryDAO {
    private final MemberInquiryMapper memberInquiryMapper;
    private final CompanyInquiryMapper companyInquiryMapper;
    private final InquiryAnswerMapper inquiryAnswerMapper;


    public List<MemberInquiryDTO> findAll(MemberInquiryPagination memberInquiryPagination) {
            return memberInquiryMapper.selectAll(memberInquiryPagination);
    }

    public int countAll(MemberInquiryPagination memberInquiryPagination) {
        return memberInquiryMapper.countAll(memberInquiryPagination);
    }

    public void set(MemberInquiryVO memberInquiryVO){
        memberInquiryMapper.update(memberInquiryVO);
    }

    public void setCompanyInquiry(CompanyInquiryVO companyInquiryVO){
        companyInquiryMapper.update(companyInquiryVO);
    }

    public MemberInquiryDTO findMemberInquiryById(Long id){
        return memberInquiryMapper.selectById(id);
    }

    public void setMemberInquiryAnswer(InquiryAnswerVO inquiryAnswerVO){
        inquiryAnswerMapper.insert(inquiryAnswerVO);
    }
}
