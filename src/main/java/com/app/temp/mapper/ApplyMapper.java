package com.app.temp.mapper;

import com.app.temp.domain.dto.*;
import com.app.temp.domain.vo.ProgramVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Mapper
public interface ApplyMapper {
    public ArrayList<ApplyListDTO> selectApplyListDtoByMemberId(Long memberId);

    public ArrayList<CompanyProgramDTO> selectCompanyProgramDTOByCompanyId(Long companyId);

    public ArrayList<ProgramListDTO> selectAll(ProgramPagination programPagination);

    public Optional<ProgramListDTO> selectProgramInfoDTOById(Long Id);

    public void update(ProgramVO programVO);

    public ArrayList<MainProgramListDTO> selectAllMain();

    public ArrayList<MainProgramListDTO> selectAllByCategoryCId(Long categoryCId);

    public Optional<MainProgramInfoDTO> selectMainProgramInfoDTOById(Long Id);

    public List<ApplicationDTO> selectApplicationById(@Param("id") Long id, @Param("pagination") Pagination pagination, @Param("applyMemberStatus") String applyMemberStatus);

    public int selectApplicationCount(Long id);

    public Optional<ApplyDTO> selectApplicationMemberStatus(Long id);

    public void insert(ApplyIDDTO applyIDDTO);

    public int countByCompanyId(Long companyId);

    public int countAll(ProgramPagination programPagination);

    public ArrayList<ProgramInfoDTO> selectAllProgramInfoDTO();
}
