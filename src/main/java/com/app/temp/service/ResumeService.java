package com.app.temp.service;

import com.app.temp.controller.exception.UploadException;
import com.app.temp.domain.dto.MemberResumeDTO;
import com.app.temp.domain.dto.ResumeDTO;
import com.app.temp.domain.vo.AdminVO;
import com.app.temp.domain.vo.MemberVO;
import com.app.temp.domain.vo.ResumeVO;
import com.app.temp.mapper.ResumeMapper;
import com.app.temp.repository.AdminDAO;
import com.app.temp.repository.ResumeDAO;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class ResumeService {
    private final ResumeDTO resumeDTO;
    private final ResumeMapper resumeMapper;
    private final ResumeDAO resumeDAO;


    //  유저 이력서들 조회
    public List<ResumeDTO> selectAllMemberResume(Long id){
        return resumeDAO.findAllMemberResume(id);
    }

//    이력서 파일 첨부
    public void uploadFile(MultipartFile file) throws IOException {
        String rootpath = "C:/upload/";
        file.transferTo(new File(rootpath, file.getOriginalFilename()));
    }

//    이력서 추가
    public void insertResume(MemberVO member) {
        resumeDAO.setResume(member);
    }

//    이력서 삭제
    public void deleteResume(Long id){
        resumeDAO.deleteResume(id);
    }

//     관리자용 개인 회원의 이력서 목록 조회
    public ArrayList<MemberResumeDTO> check(Long memberId) {
        ArrayList<MemberResumeDTO> memberResumeDTO = resumeMapper.selectByMemberId(memberId);
        memberResumeDTO.forEach(resumeDTO -> {
            String value;
            if(resumeDTO.getResumeIntroduce() != null && resumeDTO.getResumeTitle() !=null && resumeDTO.getResumeProfilePhoto() !=null) {
                resumeDTO.setResumeRequired("true");
            }
            else{
                resumeDTO.setResumeRequired("false");
            }
        });
        return memberResumeDTO;
    }
}
