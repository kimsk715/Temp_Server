// 문의관리 모달 동작 제어 JS
// try {
//     // 시도할 코드
// } catch (error) {
//     console.error("에러 타입:", error.name);
//     console.error("에러 내용:", error.message);
//     console.error("에러 위치:", error.stack);
// }
//
// 가장 깔끔한 버전: console.error("에러 발생:", error);
//
// 에러의 세가지 종류
// TypeError
// ReferenceError
// SyntaxError
const companyInquiryModal = document.querySelector(".company-inquiry-modal")
document.addEventListener("DOMContentLoaded", function () {
    // 공통 모달 제어 함수 정의 영역
    // ----------------------------------------------------

    // 모달 열기와 동시에 배경 스크롤 방지
    // 모달창 오픈시 화면 지터링을 방지하기 위한 스크롤 제어 포함


    // DOM 요소 참조 영역
    // ----------------------------------------------------

    // 모달 기본 요소 참조 선택
    const inquiryModal = document.querySelector(".company-inquiry-modal"); // 신고관리 모달의 최상위 컨테이너
    const inquiryDetailBtns = document.querySelectorAll(
        ".company-inquiry-table .detail-btn"
    ); // 목록의 모든 상세보기 버튼


    // 필수 DOM 요소 존재 검증
    // 모달 동작에 핵심적인 요소들이 존재하지 않으면 초기화 중단
    if (!inquiryModal || !inquiryDetailBtns) {
        console.error("문의관리 모달 초기화 실패: 필수 DOM 요소 누락");
        return;
    }

    // 이벤트 리스너 설정 함수
    // 모든 사용자 인터랙션에 대한 이벤트 핸들러를 등록
    // ----------------------------------------------------
    function initializeEventListeners() {
        try {
            // 상세보기 버튼 클릭 이벤트 설정
            // 목록의 각 행에서 버튼 클릭시 해당 문의건의 상세 정보를 모달로 표시
            inquiryDetailBtns.forEach((btn) => {
                btn.addEventListener("click", () => {
                    openModal(inquiryModal);
                    // 추후 구현: 클릭된 행의 문의 데이터를 서버에서 조회하여 모달에 표시
                    console.log("문의 상세정보 조회 시작");
                });
            });

            // 닫기(X) 버튼 이벤트 설정
            // 모달 우측 상단 X 버튼 클릭시 모달 닫기
            companyInquiryModal.addEventListener('click',(e)=>{
                if (e.target.classList.contains("modal-backdrop") || e.target.classList.contains("close-button")) {
                    closeModal(inquiryModal);
                    console.log("배경 클릭으로 모달 닫기 처리");
                }
                else{
                    openModal(inquiryModal);
                }
            })

            // if (inquiryCloseBtn) {
            //     inquiryCloseBtn.addEventListener("click", () => {
            //         closeModal(inquiryModal);
            //         console.log("닫기 버튼으로 모달 닫기 처리");
            //     });
            // }
            //
            // // 취소 버튼 이벤트 설정
            // // 모달 하단 취소 버튼 클릭시 모달 닫기
            // if (inquiryCancelBtn) {
            //     inquiryCancelBtn.addEventListener("click", () => {
            //         closeModal(inquiryModal);
            //         console.log("취소 버튼으로 모달 닫기 처리");
            //     });
            // }
            //
            // // 저장 버튼 이벤트 설정
            // // 처리상태 변경 후 저장 버튼 클릭시 서버 저장 처리
            // if (inquirySaveBtn) {
            //     inquirySaveBtn.addEventListener("click", () => {
            //         // 추후 구현: 변경된 처리상태를 서버에 저장하는 API 호출
            //         console.log("문의관리 처리상태 저장 시작");
            //         closeModal(inquiryModal);
            //     });
            // }
            //
            // // 모달 외부 영역 클릭 이벤트 설정
            // // backdrop(모달 뒷 배경) 클릭시 모달 닫기
            // inquiryModal.addEventListener("click", (e) => {
            //     if (e.target.classList.contains("modal-backdrop")) {
            //         closeModal(inquiryModal);
            //         console.log("배경 클릭으로 모달 닫기 처리");
            //     }
            // });

            console.log("문의관리 모달 이벤트 리스너 초기화 완료");
        } catch (error) {
            console.error(
                "문의관리 모달 이벤트 리스너 설정 중 오류 발생:",
                error
            );
        }
    }

    // ESC 키 이벤트 핸들러 설정
    // 모달이 열린 상태에서 ESC 키 입력시 모달 닫기
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && inquiryModal.style.display === "block") {
            closeModal(inquiryModal);
            console.log("ESC 키 입력으로 모달 닫기 처리");
        }
    });

    // 초기화 실행 영역
    // ----------------------------------------------------
    console.log("문의관리 모달 초기화 시작");
    initializeEventListeners(); // 이벤트 리스너 설정 실행
    console.log("문의관리 모달 초기화 완료: 모든 기능 정상 작동 준비");
});
