const reportService = (() => {

    // 기업 신고 목록
    // 페이지 기본값은 1, callback은 데이터를 가져온 후에 실행할 함수
    const getCompanyList = async (callback, param={}) => {
        let page = param.page || 1;
        let search = param.search;

        let path = `/admin/home/reports/company-list?page=${page}`;    // 기본 경로

        // 검색 조건 추가 (keyword, reportStatus, createdDateStart, createdDateEnd)
        if (search) {
            if (search.keyword) {
                path += `&keyword=${search.keyword}`;  // 키워드
            }
            if (search.reportStatus) {
                path += `&reportStatus=${search.reportStatus}`;  // 처리상태
            }
            if (search.createdDateStart) {
                path += `&createdDateStart=${search.createdDateStart}`;  // 시작 날짜
            }
            if (search.createdDateEnd) {
                path += `&createdDateEnd=${search.createdDateEnd}`;  // 종료 날짜
            }
        }

        // 서버에 요청(fetch)
        console.log("Fetch 시작");
        const response = await fetch(path);

        // 응답 데이터를 JSON 형태로 반환
        const data = await response.json();
        const companyReportListData = data.companyReports;
        const companyPagination = data.pagination;
        // 콜백 함수가 존재한다면
        if(callback){
            // 데이터를 전달해 실행
            console.log("콜백 실행됨")
            callback(companyReportListData, companyPagination);
        }
    }

    // 공고 신고 목록
    // 페이지 기본값은 1, callback은 데이터를 가져온 후에 실행할 함수
    const getProgramList = async (callback, param={}) => {
        let page = param.page || 1;
        let search = param.search;

        let path = `/admin/home/reports/program-list?page=${page}`;    // 기본 경로

        // 검색 조건 추가 (keyword, reportStatus, createdDateStart, createdDateEnd)
        if (search) {
            if (search.keyword) {
                path += `&keyword=${search.keyword}`;  // 키워드
            }
            if (search.reportStatus) {
                path += `&reportStatus=${search.reportStatus}`;  // 처리상태
            }
            if (search.createdDateStart) {
                path += `&createdDateStart=${search.createdDateStart}`;  // 시작 날짜
            }
            if (search.createdDateEnd) {
                path += `&createdDateEnd=${search.createdDateEnd}`;  // 종료 날짜
            }
        }

        // 서버에 요청(fetch)
        console.log("Fetch 시작");
        const response = await fetch(path);

        // 응답 데이터를 JSON 형태로 반환
        const data = await response.json();
        const programReportListData = data.programReports;
        const programPagination = data.pagination;
        // 콜백 함수가 존재한다면
        if(callback) {
            // 데이터를 전달해 실행
            console.log("콜백 실행됨")
            callback(programReportListData, programPagination);
            console.log(programReportListData, programPagination);
        }
    }

    // 기업신고 추가
    const writeCompanyReport = async (report) => {
        await fetch("/report/company-create", {
            method: "POST",

            body: JSON.stringify(report),
            headers: {
                "Content-Type": "application/json;charset-utf-8"
            }
        });
    }

    // 공고신고 추가
    const writeProgramReport = async (report) => {
        await fetch("/report/program-create", {
            method: "POST",

            body: JSON.stringify(report),
            headers: {
                "Content-Type": "application/json;charset-utf-8"
            }
        });
    }

    // 신고하기 눌렀을 때 로그인 검사
    const checkReportLogin = async () => {
        const response = await fetch("/member/check-login", {method: "GET"});
        const data = await response.json();
        return data;
    };

    // 모듈에서 사용할 메소드를 객체로 반환
    return {getCompanyList : getCompanyList, getProgramList : getProgramList, writeCompanyReport : writeCompanyReport, writeProgramReport : writeProgramReport, checkReportLogin : checkReportLogin};
})();

// 신고 상세 조회 추가
const reportModalService = (() => {
//     상세 정보(데이터) 가져오기
    const getCompanyReportDetail = async (reportId) => {
        const response = await fetch(`/admin/home/reports/company/${reportId}`);
        return response.json(); // 서버에서 받은 json 형태의 데이터
    }
    const getProgramReportDetail = async (reportId) => {
        const response = await fetch(`/admin/home/reports/program/${reportId}`);
        return response.json(); // 서버에서 받은 json 형태의 데이터
    }
    // 모달 저장 버튼 클릭 시 처리 상태 저장
    const updateCompanyStatus = async (report) => {
        const response = await fetch("/admin/home/reports/company/update", {
            method: 'put',
            body: JSON.stringify(report),
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
        return response.json();
    }
    const updateProgramStatus = async (report) => {
        const response = await fetch("/admin/home/reports/program/update", {
            method: 'put',
            body: JSON.stringify(report),
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
        return response.json();
    }

    return {getCompanyReportDetail : getCompanyReportDetail, getProgramReportDetail : getProgramReportDetail, updateCompanyStatus: updateCompanyStatus, updateProgramStatus : updateProgramStatus}
})();


