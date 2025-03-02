package com.app.temp.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.sql.Time;

@Mapper
public interface TimeMapper {
    public String getTime();
}
