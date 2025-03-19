package com.app.temp.domain.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
@Getter
@Setter
@NoArgsConstructor
public class AdminProgramListDTO {
    private ProgramPagination programPagination;
    private ArrayList<ProgramListDTO> programs;
}
