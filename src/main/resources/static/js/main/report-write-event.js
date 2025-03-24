// 신고작성 칸!!

//  footer에서 신고하기 태그를 누르면 신고하기 모달창을 보여줌
document.addEventListener("DOMContentLoaded", function (){
//     footer에서 모달을 열기 위한 a 태그 선택
    const openModalButton = document.querySelector("#openModalButton");
    console.log(openModalButton + "눌렸음.");
//     모달창
    const reportModal = document.querySelector(".report-modal")

    // a태그를 클릭했을 때 로그인 검사하고 안 했으면 로긴창으로 보내버림
    openModalButton.addEventListener("click", async (e) => {
        e.preventDefault();

        try {
            const isLoggedIn = await reportService.checkReportLogin();

            if(isLoggedIn){
                reportModal.style.display = "block"; // 로그인 상태면 모달 표시
            } else {
                alert("로그인이 필요합니다.");
                window.location.href = "/member/login"; // 로그인 페이지로 이동
            }
        } catch(error){
            console.error(error);
            alert("로그인 확인 중 오류 발생");
        }
    })

//    모달에서 취소, 닫기 버튼을 누르면 모달이 닫힘
    const closeModalButton = document.querySelector(".close-btn");
    const cancelModalButton = document.querySelector(".cancel-btn");

    closeModalButton?.addEventListener("click", (e) => {
        reportModal.style.display = "none";
    })

    cancelModalButton?.addEventListener("click", (e) => {
        reportModal.style.display = "none";
    })

//    모달에서 보내기 버튼 누르면 신고 작성
    const sendReportButton = document.querySelector(".save-btn")

    sendReportButton.addEventListener("click", async (e) => {
        console.log("저장버튼 눌림");

        // 폼 데이터 가져오기
        const companyName = document.getElementById("companyName") ? document.getElementById("companyName").innerText : null;
        const programName = document.getElementById("programName") ? document.getElementById("programName").innerText : null;
        const companyId = document.getElementById("companyId") ? document.getElementById("companyId").value : null;
        const programId = document.getElementById("programId") ? document.getElementById("programId").value : null;
        const reportType = document.getElementById("reportType").value;
        const reportDetail = document.getElementById("reportDetail").value;

        console.log("신고대상: " + (companyName || programName));
        console.log("신고대상 id: " + (companyId || programId));
        console.log("신고유형: " , reportType);
        console.log("신고상세: ", reportDetail);

        // 입력 데이터 유효성 검사
        if (!reportType || !reportDetail) {
            alert("모든 필드를 입력해주세요.");
            return;
        }

        try {
            if (companyId && companyName){
                const reportInfoDTO = {
                    companyName: companyName,
                    companyId: companyId,
                    reportType: reportType,
                    reportDetail: reportDetail
                };
                // 데이터 전송
                await reportService.writeCompanyReport(reportInfoDTO);

                // 신고 완료 알림
                alert("신고가 완료되었습니다");
                reportModal.style.display = "none"; // 모달 닫기

            } else if (programId && programName){
                const reportInfoDTO = {
                    programName: programName,
                    programId: programId,
                    reportType: reportType,
                    reportDetail: reportDetail
                };
                // 데이터 전송
                await reportService.writeProgramReport(reportInfoDTO);

                // 신고 완료 알림
                alert("신고가 완료되었습니다");
                reportModal.style.display = "none"; // 모달 닫기
            }

        } catch (error) {
        //     오류 발생 시
            console.error("신고 작성 중 오류 발생", error);
            alert("다시 시도해주세요.");
        }
    })
})