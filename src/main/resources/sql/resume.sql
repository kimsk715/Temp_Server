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
