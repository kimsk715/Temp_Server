package com.app.temp.mapper;

import com.app.temp.domain.vo.AdminVO;
import com.app.temp.domain.vo.MemberVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface AdminMapper {
    public void insertAdmin(AdminVO adminVO);
    public Optional<AdminVO> selectByAdminIdAndPassword(AdminVO adminVO);
}
