package com.app.temp.service;

import com.app.temp.domain.dto.*;
import com.app.temp.domain.vo.ScrapVO;
import com.app.temp.repository.MemberDAO;
import com.app.temp.repository.ProgramDAO;
import com.app.temp.repository.ScrapDAO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class MainService {
    private final ProgramDAO programDAO;
    private final MemberDAO memberDAO;
    private final ScrapDAO scrapDAO;

    //    프로그램 목록 조회(관리자)
    public ArrayList<ProgramListDTO> getAll(ProgramPagination programPagination) {
        return programDAO.findAll(programPagination);
    }
//  프로그램 목록 조회(메인페이지) + 스크랩 버튼 초기 상태 구분
//  스크랩 버튼의 aria-pressed 속성을 true or false 로 저장해서 화면에서 보여줌.
    public ArrayList<MainProgramListDTO> getAllMain(){
        Long memberId = 1L;
        ArrayList<MainProgramListDTO> mainProgramListDTOS = programDAO.findAllMain();
        Optional<MemberAdminListDTO> member = memberDAO.findMemberInfoAdmin(memberId); // 현재 테스트용 아이디가 들어가있음.
        ScrapVO scrapVO = new ScrapVO();
        scrapVO.setMemberId(member.get().getId());
        mainProgramListDTOS.forEach(mainProgramListDTO -> {
            scrapVO.setProgramId(mainProgramListDTO.getId());
            scrapDAO.findOne(scrapVO).ifPresentOrElse(scrap -> mainProgramListDTO.setScrapStatus("true"), ()-> mainProgramListDTO.setScrapStatus("false"));
        });
        mainProgramListDTOS.forEach(mainProgramListDTO -> {if (mainProgramListDTO.getDDay().equals("0")) {
            mainProgramListDTO.setDDay("day");
        } else if (mainProgramListDTO.getDDay().contains("-")) {
            mainProgramListDTO.setDDay("day");
        }
        });
        return mainProgramListDTOS;
    }
// 특정 프로그램의 정보 조회(메인 페이지)
    public Optional<MainProgramInfoDTO> getMainProgramInfoDTOById(Long id){
            return programDAO.findMainProgramInfoDTOById(id);
    }
}

