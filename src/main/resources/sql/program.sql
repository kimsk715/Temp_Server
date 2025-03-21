SELECT * FROM TBL_PROGRAM;

INSERT INTO TBL_PROGRAM
VALUES (
           SEQ_PROGRAM.NEXTVAL,
           '양치질',
           '열심히',
           '자주',
           '공개',
           '2025-02-02',
           2500,
           2,
           '첫번째.JGP',
           SYSDATE,
           SYSDATE,
           17,
           2,
           SYSDATE,
           SYSDATE
       );

INSERT INTO TBL_COMPANY
VALUES
    (
        SEQ_COMPANY.NEXTVAL,
        'COMPANY.TEST',
        1,
        '2020-10-20',
        19201212,
        'TEST-1234 HOME',
        'TEST/TEST.JGP',
        'ASDW',
        'test/test/test',
        'this is test',
        'this is test',
        'this is test',
        SYSDATE,
        SYSDATE
    );


SELECT * FROM TBL_SCRAP JOIN TBL_PROGRAM

    INSERT INTO TBL_CATEGORY_C
VALUES (SEQ_CATEGORY_C.NEXTVAL, '카테고리C', 2, SYSDATE, SYSDATE);

INSERT INTO TBL_SCRAP
VALUES (SEQ_SCRAP.NEXTVAL, 1, 29, SYSDATE, SYSDATE);

SELECT * FROM TBL_CATEGORY_C;
SELECT * FROM TBL_PROGRAM;
SELECT * FROM TBL_COMPANY;

SELECT * FROM TBL_SCRAP;

SELECT * FROM TBL_MEMBER;


SELECT COMPANY_NAME, PROGRAM_NAME, PROGRAM_END_DATE, PROGRAM_STATUS, PROGRAM_DETAIL, PROGRAM_PRICE, PROGRAM_BENEFIT, PROGRAM_THUMBNAIL_PATH
FROM TBL_COMPANY C JOIN TBL_PROGRAM P
                        ON C.ID = P.COMPANY_ID AND C.ID = 21 AND PROGRAM_STATUS = '마감'

