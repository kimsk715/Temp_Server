// 신고관리 모달 동작 제어 JS
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

document.addEventListener("DOMContentLoaded", function () {
  // 공통 모달 제어 함수 정의 영역
  // ----------------------------------------------------

  // 모달 열기와 동시에 배경 스크롤 방지
  // 모달창 오픈시 화면 지터링을 방지하기 위한 스크롤 제어 포함
  function openModal(modal) {
    console.log("신고관리 모달 열기 시도:", modal);
    if (modal) {
      modal.style.display = "block"; // 모달 표시
      document.body.style.overflow = "hidden"; // 배경 스크롤 방지
      console.log("신고관리 모달 열기 성공");
    }
  }

  // 모달 닫기와 동시에 배경 스크롤 복원
  // 모달 닫을 때 원래 스크롤 상태로 복구하여 자연스러운 화면 전환 제공
  function closeModal(modal) {
    console.log("신고관리 모달 닫기 시도:", modal);
    if (modal) {
      modal.style.display = "none"; // 모달 숨김
      document.body.style.overflow = ""; // 배경 스크롤 복원
      console.log("신고관리 모달 닫기 성공");
    }
  }

  // DOM 요소 참조 영역
  // ----------------------------------------------------

  // 모달 기본 요소 참조 선택
  const reportModal = document.querySelector(".report-modal"); // 신고관리 모달의 최상위 컨테이너
  const reportDetailBtns = document.querySelectorAll(
    ".report-table .detail-btn"
  ); // 목록의 모든 상세보기 버튼
  const reportCloseBtn = document.querySelector(".report-modal .close-btn"); // 모달 우측 상단 X버튼
  const reportCancelBtn = document.querySelector(".report-modal .cancel-btn"); // 모달 하단 취소 버튼
  const reportSaveBtn = document.querySelector(".report-modal .save-btn"); // 모달 하단 저장 버튼

  // 필수 DOM 요소 존재 검증
  // 모달 동작에 핵심적인 요소들이 존재하지 않으면 초기화 중단
  if (!reportModal || !reportDetailBtns) {
    console.error("신고관리 모달 초기화 실패: 필수 DOM 요소 누락");
    return;
  }

  // 이벤트 리스너 설정 함수
  // 모든 사용자 인터랙션에 대한 이벤트 핸들러를 등록
  // ----------------------------------------------------
  function initializeEventListeners() {
    try {
      // 상세보기 버튼 클릭 이벤트 설정
      // 목록의 각 행에서 버튼 클릭시 해당 신고건의 상세 정보를 모달로 표시
      reportDetailBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          openModal(reportModal);
          // 추후 구현: 클릭된 행의 신고 데이터를 서버에서 조회하여 모달에 표시
          console.log("신고 상세정보 조회 시작");
        });
      });

      // 닫기(X) 버튼 이벤트 설정
      // 모달 우측 상단 X 버튼 클릭시 모달 닫기
      if (reportCloseBtn) {
        reportCloseBtn.addEventListener("click", () => {
          closeModal(reportModal);
          console.log("닫기 버튼으로 모달 닫기 처리");
        });
      }

      // 취소 버튼 이벤트 설정
      // 모달 하단 취소 버튼 클릭시 모달 닫기
      if (reportCancelBtn) {
        reportCancelBtn.addEventListener("click", () => {
          closeModal(reportModal);
          console.log("취소 버튼으로 모달 닫기 처리");
        });
      }

      // 저장 버튼 이벤트 설정
      // 처리상태 변경 후 저장 버튼 클릭시 서버 저장 처리
      if (reportSaveBtn) {
        reportSaveBtn.addEventListener("click", () => {
          // 추후 구현: 변경된 처리상태를 서버에 저장하는 API 호출
          console.log("신고관리 처리상태 저장 시작");
          closeModal(reportModal);
        });
      }

      // 모달 외부 영역 클릭 이벤트 설정
      // backdrop(모달 뒷 배경) 클릭시 모달 닫기
      reportModal.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal-backdrop")) {
          closeModal(reportModal);
          console.log("배경 클릭으로 모달 닫기 처리");
        }
      });

      console.log("신고관리 모달 이벤트 리스너 초기화 완료");
    } catch (error) {
      console.error("신고관리 모달 이벤트 리스너 설정 중 오류 발생:", error);
    }
  }

  // ESC 키 이벤트 핸들러 설정
  // 모달이 열린 상태에서 ESC 키 입력시 모달 닫기
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && reportModal.style.display === "block") {
      closeModal(reportModal);
      console.log("ESC 키 입력으로 모달 닫기 처리");
    }
  });

  // 초기화 실행 영역
  // ----------------------------------------------------
  console.log("신고관리 모달 초기화 시작");
  initializeEventListeners(); // 이벤트 리스너 설정 실행
  console.log("신고관리 모달 초기화 완료: 모든 기능 정상 작동 준비");
});
