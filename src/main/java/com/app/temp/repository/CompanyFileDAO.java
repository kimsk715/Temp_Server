package com.app.temp.repository;

import com.app.temp.domain.dto.CompanyFileDTO;
import com.app.temp.domain.vo.CompanyFileVO;
import com.app.temp.mapper.AdminMapper;
import com.app.temp.mapper.CompanyFileMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;


@Repository
@RequiredArgsConstructor
public class CompanyFileDAO {
    private final CompanyFileMapper companyFileMapper;

    //추가하기
    public void saveFile(CompanyFileVO companyFileVO) {
        companyFileMapper.insertMemberFile(companyFileVO);
    }

    // 삭제하기
    public void deleteFile(Long id) {
        companyFileMapper.deleteFile(id);}

    // 기업 이미지들 조회
    public void findCompanyFile(Long id) {
        companyFileMapper.selectCompanyImages(id);
    }

}
