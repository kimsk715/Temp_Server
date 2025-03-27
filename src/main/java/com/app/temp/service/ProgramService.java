package com.app.temp.service;

import com.app.temp.domain.dto.*;
import com.app.temp.domain.vo.ProgramVO;
import com.app.temp.domain.vo.ScrapVO;
import com.app.temp.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
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
    private final FileDAO fileDAO;
    private final CompanyFileDAO companyFileDAO;

    //    프로그램 목록 조회(관리자)
    public AdminProgramListDTO getAllProgram(ProgramPagination programPagination) {
        AdminProgramListDTO adminProgramListDTO = new AdminProgramListDTO();
        programPagination.create(programDAO.countAll(programPagination));
//        log.info(pagination.toString());
        adminProgramListDTO.setProgramPagination(programPagination);
        adminProgramListDTO.setPrograms(programDAO.findAll(programPagination));
        return adminProgramListDTO;
    }
    //  로그인된 유저의 전체 목록 조회
//  스크랩 버튼의 aria-pressed 속성을 true or false 로 저장해서 화면에서 보여줌.
    public ArrayList<MainProgramListDTO> getAllMain(Long id){
        ArrayList<MainProgramListDTO> mainProgramListDTOS = programDAO.findAllMain();

        ScrapVO scrapVO = new ScrapVO();
        scrapVO.setMemberId(id);
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
//비로그인용 프로그램  전체 목록 조회
    public ArrayList<MainProgramListDTO> getAllMainNonLogin(){
        ArrayList<MainProgramListDTO> mainProgramListDTOS = programDAO.findAllMain();
//        log.info(String.valueOf(mainProgramListDTOS));
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

    //    상단 검색바 검색 조회
    public ArrayList<MainProgramListDTO> searchProgramsByKeyword(String keyword){
        ArrayList<MainProgramListDTO> mainProgramListDTOS = programDAO.searchProgramsByKeyword(keyword);
        mainProgramListDTOS.forEach(mainProgramListDTO -> {if (mainProgramListDTO.getDDay().equals("0")) {
            mainProgramListDTO.setDDay("day");
        } else if (mainProgramListDTO.getDDay().contains("-")) {
            mainProgramListDTO.setDDay("day");
        }});
        return mainProgramListDTOS;
    }

    //  카테고리 + 키워드 조회
    public ArrayList<MainProgramListDTO> getAllByCategories(SearchInfoDTO searchInfoDTO){
//      기본적인 프로그램 정보 조회
        ArrayList<MainProgramListDTO> mainProgramListDTOS = programDAO.findAllByCategories(searchInfoDTO);
        ScrapVO scrapVO = new ScrapVO();
//      만약 로그인이 되어 있어서 회원 정보가 저장되어있다면, 그 회원의 스크랩 목록을 가져옴.
        if(searchInfoDTO.getMemberId() != null){
            scrapVO.setMemberId(searchInfoDTO.getMemberId());
            mainProgramListDTOS.forEach(mainProgramListDTO -> {
                scrapVO.setProgramId(mainProgramListDTO.getId());
                scrapDAO.findOne(scrapVO).ifPresentOrElse(scrap -> mainProgramListDTO.setScrapStatus("true"), ()-> mainProgramListDTO.setScrapStatus("false"));
            });
        }
//      날짜 표기(D-Day)를 위한 계산
        mainProgramListDTOS.forEach(mainProgramListDTO -> {if (mainProgramListDTO.getDDay().equals("0")) {
            mainProgramListDTO.setDDay("day");
        } else if (mainProgramListDTO.getDDay().contains("-")) {
            mainProgramListDTO.setDDay("day");
        }});
        return mainProgramListDTOS;
    }

    public List<MainProgramListDTO> getByTopReadCount(SearchInfoDTO searchInfoDTO){
        List<MainProgramListDTO> topLists = programDAO.findByTopReadCount(searchInfoDTO);
        topLists.forEach(program -> program.setFileName(companyFileDAO.findCompanyFileById(program.getCompanyId()).getFileName()));
        topLists.forEach(program -> program.setFilePath(companyFileDAO.findCompanyFileById(program.getCompanyId()).getFilePath()));
//        log.info("topList : {}", topLists);
//        topLists.forEach(program -> {log.info(program.getCompanyId().toString());});
        ScrapVO scrapVO = new ScrapVO();
        if(searchInfoDTO.getMemberId() != null){
            scrapVO.setMemberId(searchInfoDTO.getMemberId());
            topLists.forEach(mainProgramListDTO -> {
                scrapVO.setProgramId(mainProgramListDTO.getId());
                scrapDAO.findOne(scrapVO).ifPresentOrElse(scrap -> mainProgramListDTO.setScrapStatus("true"), ()-> mainProgramListDTO.setScrapStatus("false"));
            });
        }
//      날짜 표기(D-Day)를 위한 계산
        topLists.forEach(mainProgramListDTO -> {if (mainProgramListDTO.getDDay().equals("0")) {
            mainProgramListDTO.setDDay("day");
        } else if (mainProgramListDTO.getDDay().contains("-")) {
            mainProgramListDTO.setDDay("day");
        }});
        return topLists;
    }

    public void updateReadCount(Long id){
        programDAO.updateReadCount(id);
    }
}

