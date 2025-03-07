package com.app.temp.mapper;

import com.app.temp.domain.dto.MemberInquiryDTO;
import com.app.temp.domain.dto.MemberInquiryInfoDTO;
import com.app.temp.domain.vo.MemberInquiryVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Optional;

@Mapper
public interface MemberInquiryMapper {
    public void insertMemberInquiry(MemberInquiryVO memberInquiryVO);

    public List<MemberInquiryDTO> selectAll();

    public Optional<MemberInquiryInfoDTO> selectById(Long id);

    public void update(MemberInquiryVO memberInquiryVO);


}
