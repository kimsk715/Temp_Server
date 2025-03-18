// const noticeWrapper = document.querySelector(".notice-management");
document.addEventListener("DOMContentLoaded", function () {
    // 공통 모달 제어 함수 정의 영역
    // ----------------------------------------------------

    // 모달 열기와 동시에 배경 스크롤 방지
    // 모달창 오픈시 화면 지터링을 방지하기 위한 스크롤 제어 포함


    // DOM 요소 참조 영역
    // ----------------------------------------------------

    // 모달 기본 요소 참조 선택

    const noticeModal = document.querySelector(".notice-modal"); // 공고관리 모달의 최상위 컨테이너
    const noticeTableWrapper = document.querySelector(".notice-management");
    const noticeDetailBtns = document.querySelectorAll(
        ".notice-table .detail-btn"
    ); // 목록의 모든 상세보기 버튼


    // 공고 상세 콘텐츠 관련 요소
    // const contentSelect = document.querySelector(
    //     ".notice-modal .content-select"
    // ); // 카테고리 선택 드롭다운
    // const detailContent = document.querySelector(
    //     ".notice-modal .detail-content"
    // ); // 카테고리별 내용 표시 영역
    const noticeImage = document.querySelector(
        ".notice-modal .image-view img"
    ); // 공고 이미지 표시 영역
    const prevImageBtn = document.querySelector(".notice-modal .prev-btn"); // 이미지 이전 버튼
    const nextImageBtn = document.querySelector(".notice-modal .next-btn"); // 이미지 다음 버튼

    // 테스트용 데이터 영역 - 추후 서버 연동 예정
    // ----------------------------------------------------

    // // 이미지 슬라이드용 테스트 데이터
    // const images = [
    //     "/static/images/admin/1.webp",
    //     "/static/images/admin/2.webp",
    //     "/static/images/admin/3.jpeg",
    // ];
    // let currentImageIndex = 0; // 현재 표시 중인 이미지 인덱스
    //
    // // 카테고리별 콘텐츠 테스트 데이터
    // const noticeContents = {
    //     "company-intro": "기업 및 서비스 소개 내용...",
    //     "program-intro":
    //         "당사는 취업준비생들에게 실질적인 업무 경험을 제공하기 위해...",
    //     "program-benefits":
    //         "- 실무자의 하루 일정을 그대로 체험\n- 실제 업무 환경에서의 현장감 있는 경험",
    // };

    // 필수 DOM 요소 존재 검증
    // 모달 동작에 핵심적인 요소들이 존재하지 않으면 초기화 중단
    // if (!noticeModal || !noticeDetailBtns) {
    //     console.error("공고관리 모달 초기화 실패: 필수 DOM 요소 누락");
    //     return;
    // }

    // 유틸리티 함수 정의 영역
    // ----------------------------------------------------

    // 모달 내용 초기화 함수
    // 모달이 열릴 때마다 모든 내용을 초기 상태로 리셋
    // function resetnoticeModal() {
    //     console.log("공고관리 모달 초기화 시작");
    //     if (contentSelect) contentSelect.selectedIndex = 0; // 카테고리 선택 초기화
    //     if (detailContent) detailContent.textContent = "카테고리를 선택하세요."; // 내용 영역 초기화
    //     currentImageIndex = 0; // 이미지 인덱스 초기화
    //     updateImage(); // 이미지 표시 업데이트
    //     console.log("공고관리 모달 초기화 완료");
    // }

    // 이미지 업데이트 함수
    // 이미지 변경 및 이전/다음 버튼 상태 업데이트
    // function updateImage() {
    //     if (noticeImage && images.length > 0) {
    //         console.log("이미지 업데이트 시작:", currentImageIndex + 1);
    //         noticeImage.src = images[currentImageIndex];
    //
    //         // 이미지 로드 상태 모니터링
    //         noticeImage.onload = () =>
    //             console.log("이미지 로드 완료:", currentImageIndex + 1);
    //         noticeImage.onerror = () =>
    //             console.error("이미지 로드 실패:", images[currentImageIndex]);
    //
    //         // 이전/다음 버튼 활성화 상태 설정
    //         prevImageBtn.disabled = currentImageIndex === 0;
    //         nextImageBtn.disabled = currentImageIndex === images.length - 1;
    //
    //         console.log("이미지 업데이트 완료");
    //     }
    // }

    // 이벤트 리스너 설정 함수
    // 모든 사용자 인터랙션에 대한 이벤트 핸들러를 등록
    // ----------------------------------------------------


    noticeDetailBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            openModal(noticeModal);
            // 추후 구현: 클릭된 행의 문의 데이터를 서버에서 조회하여 모달에 표시
            console.log("프로그램 상세정보 조회 시작");
        });
    });

    noticeModal.addEventListener('click',(e)=>{
        if (e.target.classList.contains("close-button")){
            closeModal(noticeModal);
            console.log(e.target)
            console.log("실행실행실행실행실행실행실행실행실행실행")
        }
        else if (e.target.classList.contains("modal-backdrop")) {
            closeModal(noticeModal);
            console.log("프로그램 모달창 닫힘.");
        }
        else{

        }
    })










    // ESC 키 이벤트 핸들러 설정
    // 모달이 열린 상태에서 ESC 키 입력시 모달 닫기
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && noticeModal.style.display === "block") {
            closeModal(noticeModal);
            console.log("ESC 키 입력으로 모달 닫기 처리");
        }
    });

    // 초기화 실행 영역
    // ----------------------------------------------------

});

