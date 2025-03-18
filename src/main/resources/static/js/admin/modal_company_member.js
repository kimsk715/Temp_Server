document.addEventListener("DOMContentLoaded", function () {
    /**
     * 상수 및 DOM 요소 참조 영역
     * ----------------------------------------------------
     */

    // 모달 기본 요소
    const companyMemberModal = document.querySelector(".company-member-modal");
    const companyDetailBtns = document.querySelectorAll(
        ".company-member-table .detail-btn"
    );


    // 카테고리 선택 요소
    const detailSelect = document.querySelector(
        ".company-member-modal .detail-select"
    );
    const activitySelect = document.querySelector(
        ".company-member-modal .activity-select"
    );

    // 콘텐츠 표시 영역
    const detailContent = document.querySelector(
        ".company-member-modal .detail-content"
    );
    const activityContent = document.querySelector(
        ".company-member-modal .activity-content"
    );

    /**
     * 유틸리티 함수 정의 영역
     * ----------------------------------------------------
     */

    // 모달 열기


    // 모달 초기화
    // function resetModal() {
    //     try {
    //         console.log("모달 초기화 시작");
    //
    //         // 카테고리 선택 초기화
    //         // selectedIndex는 <select> 요소의 기본 내장 속성
    //         if (detailSelect) detailSelect.selectedIndex = 0;
    //         if (activitySelect) activitySelect.selectedIndex = 0;
    //
    //         // 상세정보 영역 초기화
    //         // foreach 쓰기위한 변수선언
    //         if (detailContent) {
    //             const detailSections =
    //                 detailContent.querySelectorAll(".content-section");
    //             detailSections.forEach((section) => {
    //                 section.style.display = "none";
    //             });
    //         }
    //
    //         // 활동내역 영역 초기화
    //         if (activityContent) {
    //             const activitySections =
    //                 activityContent.querySelectorAll(".content-section");
    //             activitySections.forEach((section) => {
    //                 section.style.display = "none";
    //             });
    //         }
    //
    //         console.log("모달 초기화 완료");
    //     } catch (error) {
    //         console.error("모달 초기화 중 오류 발생:", error);
    //         // 오류 발생 시 모달 강제 닫기
    //         closeModal(companyMemberModal);
    //     }
    // }

    // (상세보기 버튼 클릭시)
    // 회원 데이터 로드 및 표시
    // function loadMemberData(memberId) {
    //     try {
    //         console.log("회원 데이터 로드 시작:", memberId);
    //         // 추후 서버에서 데이터 로드하는 로직 구현
    //         // 현재는 더미 데이터로 테스트
    //
    //         // 기본 정보 업데이트
    //         document.getElementById("company-member-id").textContent = memberId;
    //         // ... 나머지 필드 업데이트
    //
    //         console.log("회원 데이터 로드 완료");
    //     } catch (error) {
    //         console.error("회원 데이터 로드 실패:", error);
    //         alert("회원 정보를 불러오는데 실패했습니다.");
    //     }
    // }
    //
    // /**
    //  * 이벤트 핸들러 정의 영역
    //  * ----------------------------------------------------
    //  */
    //
    // // 상세정보 카테고리 변경 처리
    // function handleDetailCategoryChange(select, contentDiv) {
    //     // if (!select || !contentDiv) return;
    //
    //     // 모든 섹션 숨기기
    //     const sections = contentDiv.querySelectorAll(".content-section");
    //     sections.forEach((section) => {
    //         section.style.display = "none";
    //     });
    //
    //     // 선택된 섹션 표시
    //     const selectedValue = select.value;
    //     if (selectedValue) {
    //         const selectedSection = contentDiv.querySelector(
    //             `.${selectedValue}-section`
    //         );
    //         if (selectedSection) {
    //             selectedSection.style.display = "block";
    //             console.log(`상세정보 카테고리 변경: ${selectedValue}`);
    //         }
    //     }
    // }

    /**
     * 이벤트 리스너 설정 영역
     * ----------------------------------------------------
     */

    function initializeEventListeners() {
        try {
            // 상세보기 버튼 클릭 이벤트
            // companyDetailBtns.forEach((btn) => {
            //     btn.addEventListener("click", function () {
            //         const memberId =
            //             this.closest("tr").querySelector(
            //                 "td:first-child"
            //             ).textContent;
            //         // this: 클릭된 버튼의
            //         // closest("tr"): 가장 가까의 가장 가까의 tr의
            //         // querySelector("td:first-child"): 첫번째 td의
            //         // textContent: td의 text 내용 (회원번호)
            //         openModal(companyMemberModal);
            //     });
            // });
            document.addEventListener('click' ,(e)=>{
                if (e.target.classList.contains("modal-backdrop") || e.target.classList.contains("close-button")) {
                    closeModal(companyMemberModal);
                }
            })


         

            // 모달 외부 클릭시 닫기

            console.log("기업회원 모달 이벤트 리스너 초기화 완료");
        } catch (error) {
            console.error("이벤트 리스너 설정 중 오류 발생:", error);
        }
    }

    /**
     * ESC 키 이벤트 핸들러
     * ----------------------------------------------------
     */
    document.addEventListener("keydown", function (e) {
        if (
            e.key === "Escape" &&
            companyMemberModal.style.display === "block"
        ) {
            closeModal(companyMemberModal);
        }
    });

    /**
     * 초기화 실행
     * ----------------------------------------------------
     */
    try {
        console.log("기업회원 모달 초기화 시작");
        initializeEventListeners();
        console.log("기업회원 모달 초기화 완료");
    } catch (error) {
        console.error("기업회원 모달 초기화 실패:", error);
    }
});
