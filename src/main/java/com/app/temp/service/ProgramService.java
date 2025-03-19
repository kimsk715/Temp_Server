package com.app.temp.service;

import com.app.temp.domain.dto.*;
import com.app.temp.domain.vo.ProgramVO;
import com.app.temp.domain.vo.ScrapVO;
import com.app.temp.repository.CompanyImageDAO;
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
public class ProgramService {
    private final ProgramDAO programDAO;
    private final MemberDAO memberDAO;
    private final ScrapDAO scrapDAO;
    private final CompanyImageDAO companyImageDAO;

    //    프로그램 목록 조회(관리자)
    public AdminProgramListDTO getAllProgram(ProgramPagination programPagination) {
        AdminProgramListDTO adminProgramListDTO = new AdminProgramListDTO();
        programPagination.create(programDAO.countAll(programPagination));
//        log.info(pagination.toString());
        adminProgramListDTO.setProgramPagination(programPagination);
        adminProgramListDTO.setPrograms(programDAO.findAll(programPagination));
        return adminProgramListDTO;
    }
    //  프로그램 목록 조회(메인페이지) + 스크랩 버튼 초기 상태 구분
//  스크랩 버튼의 aria-pressed 속성을 true or false 로 저장해서 화면에서 보여줌.
    public ArrayList<MainProgramListDTO> getAllMain(String memberEmail){
        ArrayList<MainProgramListDTO> mainProgramListDTOS = programDAO.findAllMain();
        Optional<MemberDTO> member = memberDAO.findByMemberEmail(memberEmail); // 현재 테스트용 아이디가 들어가있음.
        Long memberID = (Long) member.get().getId();
        log.info("memberEmail: " + memberEmail);
        ScrapVO scrapVO = new ScrapVO();
        scrapVO.setMemberId(memberID);
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
        Optional<MainProgramInfoDTO> programInfo = programDAO.findMainProgramInfoDTOById(id);
        programInfo.ifPresent(mainProgramInfoDTO -> mainProgramInfoDTO.setCompanyImageList(companyImageDAO.findImageByCompanyId(id)));
        programInfo.ifPresent(mainProgramInfoDTO -> mainProgramInfoDTO.setImageCount(companyImageDAO.imageCount(id)));
        return programInfo;
    }

    public ArrayList<CompanyProgramDTO> getAllProgramByCompanyId(Long companyId){
        ArrayList<CompanyProgramDTO> companyProgramDTOS = programDAO.findAllProgramByCompanyId(companyId);
        companyProgramDTOS.forEach(companyProgramDTO -> {

            if(companyProgramDTO.getProgramEndDate().equals("0") || companyProgramDTO.getProgramEndDate().contains("-")) {
                companyProgramDTO.setProgramEndDate("day");
            }
        });
        return programDAO.findAllProgramByCompanyId(companyId);
    }

    public int countByCompanyId(Long companyId){
        return programDAO.countByCompanyId(companyId);
    }

    public Optional<ProgramListDTO> getProgramInfoDTOById(Long id){
        return programDAO.findProgramInfoDTOById(id);
    }

    public ArrayList<ProgramInfoDTO> getAllProgramInfoDTO(){
        return programDAO.findAllProgramInfoDTO();
    }

    //    관리자 페이지에서 프로그램의 상태 변경용.
    public void set(ProgramVO programVO) {
        programDAO.set(programVO);
    }
}

