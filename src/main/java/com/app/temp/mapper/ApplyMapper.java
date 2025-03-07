package com.app.temp.mapper;

import com.app.temp.domain.dto.*;
import com.app.temp.domain.vo.ProgramVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;
import java.util.Optional;

@Mapper
public interface ApplyMapper {
    public ArrayList<ApplyListDTO> selectApplyListDtoByMemberId(Long memberId);

    public ArrayList<CompanyProgramDTO> selectCompanyProgramDTOByCompanyId(Long companyId);

    public ArrayList<ProgramListDTO> selectAll();

    public Optional<ProgramInfoDTO> selectProgramInfoDTOById(Long Id);

    public void update(ProgramVO programVO);

    public ArrayList<MainProgramListDTO> selectAllMain();

    public ArrayList<MainProgramListDTO> selectAllByCategoryCId(Long categoryCId);

    public Optional<MainProgramInfoDTO> selectMainProgramInfoDTOById(Long Id);
}
