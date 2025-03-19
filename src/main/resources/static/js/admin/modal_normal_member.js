document.addEventListener("DOMContentLoaded", function () {


    // DOM 요소 선택
    const memberTableWrapper = document.querySelector(".normal-member-table-container");
    const memberModal = document.querySelector(".normal-member-modal");
    const memberDetailBtns = document.querySelectorAll(
        ".normal-member-table .detail-btn"
    );


    // const detailSelect = document.querySelector(
    //     ".normal-member-modal .detail-select"
    // );
    // const activitySelect = document.querySelector(
    //     ".normal-member-modal .activity-select"
    // );
    // const detailContent = document.querySelector(
    //     ".normal-member-modal .detail-content"
    // );
    // const activityContent = document.querySelector(
    //     ".normal-member-modal .activity-content"
    // );

    // if (!memberModal) {
    //     console.error("일반회원 모달을 찾을 수 없습니다.");
    //     return;
    // }

    // 모달 초기 상태로 리셋
    // function resetMemberModal() {
    //     try {
    //         console.log("모달 초기화 시작");

            // 선택 상자 초기화
            // if (detailSelect) detailSelect.selectedIndex = 0;
            // if (activitySelect) activitySelect.selectedIndex = 0;

            // 상세정보 영역 초기화
            // if (detailContent) {
            //     const detailSections =
            //         detailContent.querySelectorAll(".content-section");
            //     detailSections.forEach((section) => {
            //         section.style.display = "none";
            //     });
            // }

            // 활동내역 영역 초기화
    //         if (activityContent) {
    //             const activitySections =
    //                 activityContent.querySelectorAll(".content-section");
    //             activitySections.forEach((section) => {
    //                 section.style.display = "none";
    //             });
    //         }
    //     } catch (error) {
    //         console.error("모달 초기화 중 오류 발생:", error);
    //     }
    // }

    // 이벤트 리스너 설정
    function initializeEventListeners() {
        try {
            memberDetailBtns.forEach((btn) => {
                btn.addEventListener("click", () => {
                    openModal(memberModal);
                    // 추후 구현: 클릭된 행의 문의 데이터를 서버에서 조회하여 모달에 표시
                    console.log("프로그램 상세정보 조회 시작");
                });
            });

            // 모달 내의 각 버튼들에 대한 이벤트 할당.
                document.addEventListener("click", (e) => {

                    if (e.target.classList.contains("modal-backdrop") || e.target.classList.contains("close-button")) {
                        closeModal(memberModal);
                    }
                });

            // ESC 키로 모달 닫기
           


            document.addEventListener("keydown", (e) => {
                if (e.key === "Escape" && memberModal.style.display === "block") {
                    closeModal(memberModal);
                    console.log("ESC 키 입력으로 모달 닫기 처리");
                }
            });




            // 상세정보 카테고리 선택 처리
            // if (detailSelect && detailContent) {
            //     memberTableWrapper.addEventListener("change", function () {
            //         const sections =
            //             detailContent.querySelectorAll(".content-section");
            //         sections.forEach((section) => {
            //             section.style.display = "none";
            //         });
            //
            //         if (this.value) {
            //             const selectedSection = detailContent.querySelector(
            //                 `.${this.value}-section`
            //             );
            //             if (selectedSection) {
            //                 selectedSection.style.display = "block";
            //                 console.log(`상세내용 표시: ${this.value}`);
            //             }
            //         }
            //     });
            // }

            // 활동내역 카테고리 선택 처리
            // if (activitySelect && activityContent) {
            //     memberTableWrapper.addEventListener("change", function () {
            //         const sections =
            //             activityContent.querySelectorAll(".content-section");
            //         sections.forEach((section) => {
            //             section.style.display = "none";
            //         });
            //
            //         if (this.value) {
            //             const selectedSection = activityContent.querySelector(
            //                 `.${this.value}-section`
            //             );
            //             if (selectedSection) {
            //                 selectedSection.style.display = "block";
            //                 console.log(`활동내역 표시: ${this.value}`);
            //             }
            //         }
            //     });
            // }

        } catch (error) {
            console.error("이벤트 리스너 설정 중 오류 발생:", error);
        }
    }


    // 초기화 실행
    initializeEventListeners();

});