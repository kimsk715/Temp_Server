package com.app.temp.service;

import com.app.temp.domain.dto.CompanyDTO;
import com.app.temp.domain.dto.CompanyFileDTO;
import com.app.temp.domain.dto.CompanyProgramListDTO;
import com.app.temp.domain.dto.ProgramInfoDTO;
import com.app.temp.domain.vo.CompanyFileVO;
import com.app.temp.domain.vo.FileVO;
import com.app.temp.mapper.CompanyFileMapper;
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
    private final CompanyFileMapper companyFileMapper;

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



// 기업 소개 이미지들 삭제
    public void deleteCompanyImages(Long id) {
        // 특정기업 이미지들 조회
        List<CompanyFileDTO> foundCompanyFiles = companyFileMapper.selectCompanyImages(id);
        // 서브키 먼저 삭제
        companyFileDAO.deleteFile(id);
        // 슈퍼키 삭제

        // 파일 이름이 맞으면 삭제함
        // 만약 이미지 파일이라면 썸네일도 삭제함
       foundCompanyFiles.forEach((companyFile) -> {
          File file = new File("C/upload",companyFile.getFilePath() + "/" + companyFile.getFileName());
          file.delete();
          if(companyFile.getType().equals("이미지")) {
              file = new File("C/upload",companyFile.getFilePath() + "/t_" + companyFile.getFileName());
              file.delete();
          }
       });
    }


//    기업 소개 이미지들
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
            // 중복 방지를 위해 UUID 생성하여 파일명에 추가
            UUID uuid = UUID.randomUUID();

            // 파일 정보 저장을 위한 VO 객체 생성
            FileVO fileVO = new FileVO();
            CompanyFileVO companyFileVO = new CompanyFileVO();

            // 파일명과 경로 설정 ex) 파일명 = uuid_원본파일명
            fileVO.setFileName(uuid.toString() + "_" + file.getOriginalFilename());
            fileVO.setFilePath(todayPath);

            log.info(fileVO.toString());

            // DB에 슈퍼키 먼저 issert
            fileDAO.save(fileVO);

            // company와 파일을 연결하는 VO 설정
            companyFileVO.setId(fileVO.getId());
            companyFileVO.setCompanyId(companyId);
            log.info(companyFileVO.toString());

            // 서브키 정보 저장
            companyFileDAO.saveFile(companyFileVO);


            // transferTo 내가전달한 경로에 해당파일을 업로드해줌
            try {
                // 파일을 실제 경로에 저장하는
                file.transferTo(new File(rootPath, uuid.toString() + "_" + file.getOriginalFilename()));

                // 이미지 파일이면 썸네일 생성
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
    
//    현재 날짜를 yyyy/MM/dd 형식의 문자열로 반환함, 파일 저장을위한 경로
    private String getPath() {
        return LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
    }
}
