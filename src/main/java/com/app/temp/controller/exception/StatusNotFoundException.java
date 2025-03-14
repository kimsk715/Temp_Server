package com.app.temp.controller.exception;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class StatusNotFoundException extends RuntimeException {
    public StatusNotFoundException(String message) {
        super(message);
    }
}
