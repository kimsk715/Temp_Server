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
SELECT * FROM TBL_SCRAP WHERE MEMBER_ID = 2L;
SELECT * FROM TBL_MEMBER;



