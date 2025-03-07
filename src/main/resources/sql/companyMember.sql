CREATE TABLE TBL_COMPANY_MEMBER(
                                   ID NUMBER CONSTRAINT PK_COMPANY_MEMBER PRIMARY KEY,
                                   COMPANY_ID NUMBER NOT NULL,
                                   COMPANY_MEMBER_POSITION VARCHAR2(1000) DEFAULT '사원',
                                   COMPANY_MEMBER_AUTHORITY VARCHAR2(1000) DEFAULT 'ADMIN',
                                   COMPANY_MEMBER_DEPARTMENT VARCHAR2(1000),
                                   CREATED_DATE DATE DEFAULT SYSDATE,
                                   UPDATED_DATE DATE DEFAULT SYSDATE,
                                   CONSTRAINT FK_COMPANY_MEMBER_COMPANY FOREIGN KEY(COMPANY_ID)
                                   REFERENCES TBL_COMPANY(ID),
                                   CONSTRAINT FK_COMPANY_MEMBER_MEMBER FOREIGN KEY(ID)
                                   REFERENCES TBL_MEMBER(ID)
);
