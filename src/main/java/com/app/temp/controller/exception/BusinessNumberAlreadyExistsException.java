package com.app.temp.controller.exception;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class BusinessNumberAlreadyExistsException extends RuntimeException{
    public BusinessNumberAlreadyExistsException(String message) {
        super(message);
    }
}
