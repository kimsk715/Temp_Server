package com.app.temp.mapper;

import com.app.temp.domain.dto.ApplicationDTO;
import com.app.temp.domain.dto.Pagination;
import com.app.temp.domain.vo.MemberVO;
import com.app.temp.repository.MemberDAO;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.lang.reflect.Member;
import java.util.Optional;

@SpringBootTest
@Slf4j
public class ApplyMapperTests {
    @Autowired
    ApplyMapper applyMapper;
    @Autowired
    private ApplicationDTO applicationDTO;
    @Autowired
    private Pagination pagination;
    @Autowired
    private MemberDAO memberDAO;

    @Test
    public void testFindApplicationById() {

        Pagination pagination = new Pagination();
        Long memberId = 25L;
        ApplicationDTO applicationDTO = new ApplicationDTO();
        Optional<MemberVO> memberVO = memberDAO.findById(memberId);
        MemberVO member = memberVO.orElseThrow(() -> new RuntimeException("Member not found"));

        log.info("memberVO: {}", member);

        pagination.setPage(1);
        pagination.create(applyMapper.selectApplicationCount(member.getId()));
//        applicationDTO.setApplyDTOList(applyMapper.selectApplicationById(memberId,));
        applicationDTO.setPagination(pagination);
        log.info("pagination: {}", pagination);
        applyMapper.selectApplicationById(member.getId(), pagination, "활성").stream().map(ApplicationDTO::toString).forEach(log::info);
    }
}
