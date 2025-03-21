SELECT * FROM TBL_RESUME;

CREATE TABLE TBL_RESUME_IMAGE(
                                 ID NUMBER CONSTRAINT PK_RESUME_IMAGE PRIMARY KEY,
                                 RESUME_IMAGE_PATH VARCHAR2(1000),
                                 RESUME_ID NUMBER NOT NULL,
                                 CREATED_DATE DATE DEFAULT SYSDATE,
                                 UPDATED_DATE DATE DEFAULT SYSDATE,
                                 CONSTRAINT RESUME_IMAGE_RESUME FOREIGN KEY(RESUME_ID)
                                     REFERENCES TBL_RESUME(ID)
);

CREATE SEQUENCE SEQ_PAYMENT;
CREATE TABLE TBL_PAYMENT(
                            ID NUMBER CONSTRAINT PK_PAYMENT PRIMARY KEY,
                            MEMBER_ID NUMBER NOT NULL,
                            PROGRAM_ID NUMBER NOT NULL,
                            CREATED_DATE DATE DEFAULT SYSDATE,
                            UPDATED_DATE DATE DEFAULT SYSDATE,
                            CONSTRAINT FK_PAYMENT_MEMBER FOREIGN KEY(MEMBER_ID)
                                REFERENCES TBL_MEMBER(ID),
                            CONSTRAINT FK_PAYMENT_PROGRAM FOREIGN KEY(PROGRAM_ID)
                                REFERENCES TBL_PROGRAM(ID)
);