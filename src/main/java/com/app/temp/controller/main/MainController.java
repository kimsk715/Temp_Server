package com.app.temp.controller.main;

import com.app.temp.domain.dto.MainProgramInfoDTO;
import com.app.temp.domain.dto.MainProgramListDTO;
import com.app.temp.domain.vo.ScrapVO;
import com.app.temp.service.ProgramService;
import com.app.temp.service.ScrapService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Map;
import java.util.Optional;

@Controller
@RequestMapping("/")
// 여기 맵핑에 * 달면 스크랩 버튼이 망가지니 혹시나 바꿔야 될 일 있으면 말씀해주세요!
@Slf4j
public class MainController {


    @GetMapping("/")
    ResponseBody
    public String mainProgramList(Model model) {

    }

}
