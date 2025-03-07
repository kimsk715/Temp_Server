package com.app.temp.controller.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice(basePackages = "com.app.temp.controller.member")
@Slf4j
public class GlobalExceptionHandler {
    @ExceptionHandler(MypageSelectException.class)
    protected String handleMypageSelectException(MypageSelectException e){
        log.error(e.getMessage());
        return "error/404";
    }
}
