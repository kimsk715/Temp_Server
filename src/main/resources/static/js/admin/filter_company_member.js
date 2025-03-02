document.addEventListener("DOMContentLoaded", function () {
    // DOM 요소 참조 영역
    // ----------------------------------------------------

    // 기업회원 필터 요소 선택
    const memberStatusFilter = document.querySelector(".member-status-filter"); // 회원상태 필터 드롭다운
    const memberDateFilter = document.querySelector(".member-date-filter"); // 가입기간 필터 드롭다운
    const memberSearchInput = document.querySelector(".member-search-input"); // 검색어 입력창
    const memberSearchBtn = document.querySelector(".member-search-btn"); // 검색 버튼

    // 유틸리티 함수 정의 영역
    // ----------------------------------------------------

    // 검색어 유효성 검사 및 검색 실행
    function memberSearch(searchText) {
        // 검색어 입력 여부 확인
        if (!searchText) {
            alert("검색어를 입력해주세요.");
            return;
        }

        // 검색 실행 (추후 서버 연동)
        console.log("기업회원 검색어:", searchText);
    }

    // 필터 초기화 함수
    function initializeFilters() {
        memberStatusFilter.value = "all"; // 상태 필터 '전체'로 초기화
        memberDateFilter.value = "week"; // 기간 필터 '1주일'로 초기화
        memberSearchInput.value = ""; // 검색어 입력창 비우기
        console.log("기업회원 필터 초기화 완료");
    }

    // 이벤트 리스너 설정 영역
    // ----------------------------------------------------

    // 회원상태 필터 변경 이벤트
    memberStatusFilter.addEventListener("change", function () {
        const selectedStatus = this.value;
        // 선택된 상태값에 따른 한글 상태 매핑
        console.log(
            "회원 상태값:",
            selectedStatus === "active"
                ? "활성"
                : selectedStatus === "dormant"
                ? "휴면"
                : selectedStatus === "suspended"
                ? "정지"
                : selectedStatus === "withdrawn"
                ? "탈퇴"
                : "전체"
        );
    });

    // 가입기간 필터 변경 이벤트
    memberDateFilter.addEventListener("change", function () {
        const selectedDate = this.value;
        console.log("기업회원 기간 필터:", selectedDate);
    });

    // 검색 버튼 클릭 이벤트
    memberSearchBtn.addEventListener("click", function () {
        const searchText = memberSearchInput.value.trim();
        memberSearch(searchText);
    });

    // 검색어 입력창 엔터키 이벤트
    memberSearchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            const searchText = this.value.trim();
            memberSearch(searchText);
        }
    });

    // 초기화 실행
    // ----------------------------------------------------
    initializeFilters(); // 필터 초기 상태 설정
    console.log("기업회원 필터 기능 초기화 완료");
});
