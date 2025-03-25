package com.app.temp.service;

import com.app.temp.domain.dto.CompanyDTO;
import com.app.temp.domain.dto.CompanyProgramListDTO;
import com.app.temp.domain.dto.ProgramInfoDTO;
import com.app.temp.domain.vo.CompanyFileVO;
import com.app.temp.domain.vo.FileVO;
import com.app.temp.repository.CompanyDAO;
import com.app.temp.repository.CompanyFileDAO;
import com.app.temp.repository.FileDAO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.coobird.thumbnailator.Thumbnailator;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
@Slf4j
public class CompanyService {
    private final CompanyDAO companyDAO;
    private final ProgramInfoDTO programInfoDTO;
    private final FileDAO fileDAO;
    private final CompanyFileDAO companyFileDAO;

    public Optional<CompanyDTO> getById(Long id) {
        return companyDAO.findById(id);
    }

    // 기업 마이페이지 공고목록 조회
    public CompanyProgramListDTO selectProgramsByCompanyId(Long id) {
        CompanyProgramListDTO companyProgramListDTO = new CompanyProgramListDTO();

        companyProgramListDTO.setSelectProgramEndByCompanyId(companyDAO.selectProgramEndByCompanyId(id));
        companyProgramListDTO.setSelectProgramWriteByCompanyId(companyDAO.selectProgramWriteByCompanyId(id));
        companyProgramListDTO.setSelectProgramWaitByCompanyId(companyDAO.selectProgramWaitByCompanyId(id));
        companyProgramListDTO.setSelectProgramWorkByCompanyId(companyDAO.selectProgramWorkByCompanyId(id));

        return companyProgramListDTO;
    }

//    기업 공고 등록 임시저장
    public void  pendingCompanyProgram(ProgramInfoDTO programInfoDTO) {
        companyDAO.insertpendingCompanyProgram(programInfoDTO);
    }

//    기업 공고 등록
    public void insertCompanyProgram(ProgramInfoDTO programInfoDTO) {
        companyDAO.insertCompanyProgram(programInfoDTO);
    }

//    기업 공고 수정
    public void updateCompanyProgram(ProgramInfoDTO programInfoDTO) {
    companyDAO.setCompanyProgram(programInfoDTO);
}

//    기업 공고 삭제
    public void deleteCompanyProgram(Long id) {
        companyDAO.deleteCompanyProgram(id);
    }

//    기업 공고 조회
    public ProgramInfoDTO selectCompanyProgram(Long id) {
        return companyDAO.findCompanyProgram(id);
    }

//    기업 특정 공고 조회
    public ProgramInfoDTO selectCompanyProgramById(Long id) {
        return companyDAO.findCompanyProgramById(id);
    }
    
//    기업 수정 임시저장
    public void updatePendingProgramupdatePendingProgram(ProgramInfoDTO programInfoDTO) {
        companyDAO.setPendingProgram(programInfoDTO);
    }


//    기업 소개이미지
//    업로드한 이미지를 내컴퓨터에 업로드하기위함..
    public void uploadCompanyImages(Long companyId , List<MultipartFile> files){
        // 오늘 날짜 기준으로 저장할 경로를 가져옴 ex) 2025/03/25
        String todayPath = getPath();
        // 저장파일경로 설정 ex) C:/upload/2025/03/25
        String rootPath = "C:/upload/" + todayPath;
        
        // 업로드할 폴더가 존재하지 않으면 생성
        File directory = new File(rootPath);
        if(!directory.exists()){
            directory.mkdirs(); // 여러개의 폴더 한 번에 생성
        }

        // 파일 리스트를 하나씩 순회
        files.forEach((file) -> {

            // 파일명이 빈 문자열이면 업로드할 필요 없음 (빈 파일 방지)
            if(file.getOriginalFilename().equals("")){
                return;
            }
//          // 중복 방지를 위한 uuid
            UUID uuid = UUID.randomUUID();

            FileVO fileVO = new FileVO();
            CompanyFileVO companyFileVO = new CompanyFileVO();


            fileVO.setFileName(uuid.toString() + "_" + file.getOriginalFilename());
            fileVO.setFilePath(todayPath);
            log.info(fileVO.toString());

            fileDAO.save(fileVO);

            companyFileVO.setId(fileVO.getId());
            companyFileVO.setCompanyId(companyId);
            log.info(companyFileVO.toString());


            companyFileDAO.saveFile(companyFileVO);


            // transferTo 내가전달한 경로에 해당파일을 업로드해줌
            try {
                file.transferTo(new File(rootPath, uuid.toString() + "_" + file.getOriginalFilename()));

//               썸네일을 가공함
                 if(file.getContentType().startsWith("image")){
                     FileOutputStream out = new FileOutputStream(new File(rootPath, "t_" + uuid.toString() + "_" + file.getOriginalFilename()));
                     Thumbnailator.createThumbnail(file.getInputStream(), out, 100, 100);
                     out.close();
                 }
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
    }
    private String getPath() {
        return LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
    }
}
