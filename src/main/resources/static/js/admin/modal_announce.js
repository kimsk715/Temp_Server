// 공고관리 모달 동작 제어 JS
// *핵심*: 기본정보 표시, *카테고리별 콘텐츠 표시*, *이미지 슬라이더*, 처리상태 변경

document.addEventListener("DOMContentLoaded", function () {
    // 공통 모달 제어 함수 정의 영역
    // ----------------------------------------------------

    // 모달 열기와 동시에 배경 스크롤 방지
    // 모달창 오픈시 화면 지터링을 방지하기 위한 스크롤 제어 포함
    function openModal(modal) {
        console.log("공고관리 모달 열기 시도:", modal);
        if (modal) {
            modal.style.display = "block"; // 모달 표시
            document.body.style.overflow = "hidden"; // 배경 스크롤 방지
            console.log("공고관리 모달 열기 성공");
        }
    }

    // 모달 닫기와 동시에 배경 스크롤 복원
    // 모달 닫을 때 원래 스크롤 상태로 복구하여 자연스러운 화면 전환 제공
    function closeModal(modal) {
        console.log("공고관리 모달 닫기 시도:", modal);
        if (modal) {
            modal.style.display = "none"; // 모달 숨김
            document.body.style.overflow = ""; // 배경 스크롤 복원
            console.log("공고관리 모달 닫기 성공");
        }
    }

    // DOM 요소 참조 영역
    // ----------------------------------------------------

    // 모달 기본 요소 참조 선택
    const announceModal = document.querySelector(".announce-modal"); // 공고관리 모달의 최상위 컨테이너
    const announceDetailBtns = document.querySelectorAll(
        ".announce-table .detail-btn"
    ); // 목록의 모든 상세보기 버튼
    const announceCloseBtn = document.querySelector(
        ".announce-modal .close-btn"
    ); // 모달 우측 상단 X버튼
    const announceCancelBtn = document.querySelector(
        ".announce-modal .cancel-btn"
    ); // 모달 하단 취소 버튼
    const announceSaveBtn = document.querySelector(".announce-modal .save-btn"); // 모달 하단 저장 버튼

    // 공고 상세 콘텐츠 관련 요소
    const contentSelect = document.querySelector(
        ".announce-modal .content-select"
    ); // 카테고리 선택 드롭다운
    const detailContent = document.querySelector(
        ".announce-modal .detail-content"
    ); // 카테고리별 내용 표시 영역
    const announceImage = document.querySelector(
        ".announce-modal .image-view img"
    ); // 공고 이미지 표시 영역
    const prevImageBtn = document.querySelector(".announce-modal .prev-btn"); // 이미지 이전 버튼
    const nextImageBtn = document.querySelector(".announce-modal .next-btn"); // 이미지 다음 버튼

    // 테스트용 데이터 영역 - 추후 서버 연동 예정
    // ----------------------------------------------------

    // 이미지 슬라이드용 테스트 데이터
    const images = [
        "/static/images/admin/1.webp",
        "/static/images/admin/2.webp",
        "/static/images/admin/3.jpeg",
    ];
    let currentImageIndex = 0; // 현재 표시 중인 이미지 인덱스

    // 카테고리별 콘텐츠 테스트 데이터
    const announceContents = {
        "company-intro": "기업 및 서비스 소개 내용...",
        "program-intro":
            "당사는 취업준비생들에게 실질적인 업무 경험을 제공하기 위해...",
        "program-benefits":
            "- 실무자의 하루 일정을 그대로 체험\n- 실제 업무 환경에서의 현장감 있는 경험",
    };

    // 필수 DOM 요소 존재 검증
    // 모달 동작에 핵심적인 요소들이 존재하지 않으면 초기화 중단
    if (!announceModal || !announceDetailBtns) {
        console.error("공고관리 모달 초기화 실패: 필수 DOM 요소 누락");
        return;
    }

    // 유틸리티 함수 정의 영역
    // ----------------------------------------------------

    // 모달 내용 초기화 함수
    // 모달이 열릴 때마다 모든 내용을 초기 상태로 리셋
    function resetAnnounceModal() {
        console.log("공고관리 모달 초기화 시작");
        if (contentSelect) contentSelect.selectedIndex = 0; // 카테고리 선택 초기화
        if (detailContent) detailContent.textContent = "카테고리를 선택하세요."; // 내용 영역 초기화
        currentImageIndex = 0; // 이미지 인덱스 초기화
        updateImage(); // 이미지 표시 업데이트
        console.log("공고관리 모달 초기화 완료");
    }

    // 이미지 업데이트 함수
    // 이미지 변경 및 이전/다음 버튼 상태 업데이트
    function updateImage() {
        if (announceImage && images.length > 0) {
            console.log("이미지 업데이트 시작:", currentImageIndex + 1);
            announceImage.src = images[currentImageIndex];

            // 이미지 로드 상태 모니터링
            announceImage.onload = () =>
                console.log("이미지 로드 완료:", currentImageIndex + 1);
            announceImage.onerror = () =>
                console.error("이미지 로드 실패:", images[currentImageIndex]);

            // 이전/다음 버튼 활성화 상태 설정
            prevImageBtn.disabled = currentImageIndex === 0;
            nextImageBtn.disabled = currentImageIndex === images.length - 1;

            console.log("이미지 업데이트 완료");
        }
    }

    // 이벤트 리스너 설정 함수
    // 모든 사용자 인터랙션에 대한 이벤트 핸들러를 등록
    // ----------------------------------------------------
    function initializeEventListeners() {
        try {
            // 상세보기 버튼 클릭 이벤트 설정
            announceDetailBtns.forEach((btn) => {
                btn.addEventListener("click", () => {
                    openModal(announceModal);
                    resetAnnounceModal();
                    console.log("공고 상세정보 조회 시작");
                });
            });

            // 닫기(X) 버튼 이벤트 설정
            if (announceCloseBtn) {
                announceCloseBtn.addEventListener("click", () => {
                    closeModal(announceModal);
                    console.log("닫기 버튼으로 모달 닫기 처리");
                });
            }

            // 취소 버튼 이벤트 설정
            if (announceCancelBtn) {
                announceCancelBtn.addEventListener("click", () => {
                    closeModal(announceModal);
                    console.log("취소 버튼으로 모달 닫기 처리");
                });
            }

            // 저장 버튼 이벤트 설정
            if (announceSaveBtn) {
                announceSaveBtn.addEventListener("click", () => {
                    console.log("공고관리 처리상태 저장 시작");
                    closeModal(announceModal);
                });
            }

            // 카테고리 선택 변경 이벤트 설정
            if (contentSelect && detailContent) {
                contentSelect.addEventListener("change", function () {
                    const content = announceContents[this.value];
                    detailContent.textContent =
                        content || "카테고리를 선택하세요.";
                    console.log("선택된 카테고리:", this.value);
                });
            }

            // 이미지 이전 버튼 이벤트 설정
            if (prevImageBtn) {
                prevImageBtn.addEventListener("click", () => {
                    if (currentImageIndex > 0) {
                        currentImageIndex--;
                        updateImage();
                        console.log("이전 이미지로 이동");
                    }
                });
            }

            // 이미지 다음 버튼 이벤트 설정
            if (nextImageBtn) {
                nextImageBtn.addEventListener("click", () => {
                    if (currentImageIndex < images.length - 1) {
                        currentImageIndex++;
                        updateImage();
                        console.log("다음 이미지로 이동");
                    }
                });
            }

            // 모달 외부 영역 클릭 이벤트 설정
            announceModal.addEventListener("click", (e) => {
                if (e.target.classList.contains("modal-backdrop")) {
                    closeModal(announceModal);
                    console.log("배경 클릭으로 모달 닫기 처리");
                }
            });

            console.log("공고관리 모달 이벤트 리스너 초기화 완료");
        } catch (error) {
            console.error(
                "공고관리 모달 이벤트 리스너 설정 중 오류 발생:",
                error
            );
        }
    }

    // ESC 키 이벤트 핸들러 설정
    // 모달이 열린 상태에서 ESC 키 입력시 모달 닫기
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && announceModal.style.display === "block") {
            closeModal(announceModal);
            console.log("ESC 키 입력으로 모달 닫기 처리");
        }
    });

    // 초기화 실행 영역
    // ----------------------------------------------------
    console.log("공고관리 모달 초기화 시작");
    initializeEventListeners(); // 이벤트 리스너 설정 실행
    console.log("공고관리 모달 초기화 완료: 모든 기능 정상 작동 준비");
});
