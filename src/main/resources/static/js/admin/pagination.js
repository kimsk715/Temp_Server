// 모든 관리 페이지의 페이지네이션을 처리하는 JS
// 프론트엔드 역할: active 클래스 토글, 페이지 그룹 전환, 버튼 표시/숨김 제어
// 백엔드 역할: 실제 페이지 데이터 처리, 데이터 필터링, DB 쿼리 처리

document.addEventListener("DOMContentLoaded", function () {
  // 각 페이지의 페이지네이션 요소 선택
  // 공고관리
  const announcePageNumbers = document.querySelector(
    ".announce-pagination .page-numbers"
  ); // 페이지 번호 컨테이너
  const announcePrevBtn = document.querySelector(".announce-pagination .prev"); // 이전 버튼
  const announceNextBtn = document.querySelector(".announce-pagination .next"); // 다음 버튼

  // 일반회원
  const normalMemberPageNumbers = document.querySelector(
    ".normal-member-pagination .page-numbers"
  );
  const normalMemberPrevBtn = document.querySelector(
    ".normal-member-pagination .prev"
  );
  const normalMemberNextBtn = document.querySelector(
    ".normal-member-pagination .next"
  );

  // 기업회원
  const companyMemberPageNumbers = document.querySelector(
    ".company-member-pagination .page-numbers"
  );
  const companyMemberPrevBtn = document.querySelector(
    ".company-member-pagination .prev"
  );
  const companyMemberNextBtn = document.querySelector(
    ".company-member-pagination .next"
  );

  // 개인문의
  const personalInquiryPageNumbers = document.querySelector(
    ".personal-inquiry-pagination .page-numbers"
  );
  const personalInquiryPrevBtn = document.querySelector(
    ".personal-inquiry-pagination .prev"
  );
  const personalInquiryNextBtn = document.querySelector(
    ".personal-inquiry-pagination .next"
  );

  // 기업문의
  const companyInquiryPageNumbers = document.querySelector(
    ".company-inquiry-pagination .page-numbers"
  );
  const companyInquiryPrevBtn = document.querySelector(
    ".company-inquiry-pagination .prev"
  );
  const companyInquiryNextBtn = document.querySelector(
    ".company-inquiry-pagination .next"
  );

  // 신고관리
  const reportPageNumbers = document.querySelector(
    ".report-pagination .page-numbers"
  );
  const reportPrevBtn = document.querySelector(".report-pagination .prev");
  const reportNextBtn = document.querySelector(".report-pagination .next");

  // 페이지네이션 설정값
  const pageNumPerGroup = 3; // 한 그룹당 표시할 페이지 번호 개수 (1,2,3 | 4,5,6 | ...)

  // 각 페이지별 현재 그룹 상태 관리 객체
  // 페이지 전환시에도 각 페이지의 현재 그룹을 기억하기 위함
  const currentGroups = {
    announce: 1,
    normalMember: 1,
    companyMember: 1,
    personalInquiry: 1,
    companyInquiry: 1,
    report: 1,
  };

  // 페이지 그룹 변경 함수
  // 이전/다음 버튼 클릭시 호출되어 페이지 그룹을 전환
  function changePageGroup(group, pageNumbers, prevBtn) {
    // 해당 그룹의 첫 페이지와 마지막 페이지 번호 계산
    // 예: group=1 -> 1~3, group=2 -> 4~6
    const firstNumInGroup = group * pageNumPerGroup - 2;
    const lastNumInGroup = firstNumInGroup + 2;

    // 기존 페이지 번호들을 제거하고 새로운 번호들을 생성
    pageNumbers.innerHTML = "";
    for (let i = firstNumInGroup; i <= lastNumInGroup; i++) {
      const button = document.createElement("button");
      button.type = "button";
      // 그룹의 첫 번째 페이지에 active 클래스 부여
      button.className = "page-btn" + (i === firstNumInGroup ? " active" : "");
      button.textContent = i;
      pageNumbers.appendChild(button);
    }

    // 첫 번째 그룹에서는 이전 버튼을 숨김
    prevBtn.style.visibility = group === 1 ? "hidden" : "visible";
  }

  // 페이지 번호 클릭 이벤트 핸들러 설정 함수
  function setPageNumbersEvent(pageNumbers) {
    pageNumbers.addEventListener("click", function (e) {
      // 실제 페이지 번호 버튼을 클릭했을 때만 처리
      if (e.target.classList.contains("page-btn")) {
        // 현재 active 상태인 버튼에서 active 클래스 제거
        const currentActive = pageNumbers.querySelector(".active");
        if (currentActive) {
          currentActive.classList.remove("active");
        }
        // 클릭한 버튼에 active 클래스 추가
        e.target.classList.add("active");

        // 클릭한 페이지 번호 추출 (정수로 변환)
        const pageNum = parseInt(e.target.textContent);
        // 백엔드에서 처리할 페이지 번호 전달 (실제 구현시 ajax 호출 등으로 처리)
        console.log("선택된 페이지:", pageNum);
      }
    });
  }

  // 이전/다음 네비게이션 버튼 이벤트 핸들러 설정 함수
  function setNavigationEvents(pageType, prevBtn, nextBtn, pageNumbers) {
    // 이전 버튼 클릭 이벤트
    prevBtn.addEventListener("click", function () {
      // 현재 그룹이 1보다 클 때만 이전 그룹으로 이동
      if (currentGroups[pageType] > 1) {
        currentGroups[pageType]--; // 현재 그룹 번호 감소
        changePageGroup(currentGroups[pageType], pageNumbers, prevBtn);
      }
    });

    // 다음 버튼 클릭 이벤트
    nextBtn.addEventListener("click", function () {
      currentGroups[pageType]++; // 현재 그룹 번호 증가
      changePageGroup(currentGroups[pageType], pageNumbers, prevBtn);
    });
  }

  // 각 페이지 페이지네이션 초기화 함수
  // DOM 요소가 모두 존재할 때만 초기화 실행
  function initializePagination(pageType, pageNumbers, prevBtn, nextBtn) {
    if (pageNumbers && prevBtn && nextBtn) {
      // 1. 초기 페이지 그룹(1,2,3) 설정
      changePageGroup(1, pageNumbers, prevBtn);
      // 2. 페이지 번호 클릭 이벤트 설정
      setPageNumbersEvent(pageNumbers);
      // 3. 이전/다음 버튼 이벤트 설정
      setNavigationEvents(pageType, prevBtn, nextBtn, pageNumbers);
    }
  }

  // 공고관리 페이지네이션 초기화
  initializePagination(
    "announce",
    announcePageNumbers,
    announcePrevBtn,
    announceNextBtn
  );

  // 일반회원 페이지네이션 초기화
  initializePagination(
    "normalMember",
    normalMemberPageNumbers,
    normalMemberPrevBtn,
    normalMemberNextBtn
  );

  // 기업회원 페이지네이션 초기화
  initializePagination(
    "companyMember",
    companyMemberPageNumbers,
    companyMemberPrevBtn,
    companyMemberNextBtn
  );

  // 개인문의 페이지네이션 초기화
  initializePagination(
    "personalInquiry",
    personalInquiryPageNumbers,
    personalInquiryPrevBtn,
    personalInquiryNextBtn
  );

  // 기업문의 페이지네이션 초기화
  initializePagination(
    "companyInquiry",
    companyInquiryPageNumbers,
    companyInquiryPrevBtn,
    companyInquiryNextBtn
  );

  // 신고관리 페이지네이션 초기화
  initializePagination(
    "report",
    reportPageNumbers,
    reportPrevBtn,
    reportNextBtn
  );
});
