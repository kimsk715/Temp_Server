document.addEventListener("DOMContentLoaded", function () {
    /**
     * DOM 요소 참조 영역
     * ----------------------------------------------------
     */
    const certificateModal = document.querySelector(".image-viewer-modal");
    const certificateImage = document.querySelector(".certificate-image");
    const viewerImage = document.querySelector(".viewer-image");
    const closeViewerBtn = document.querySelector(".close-viewer-btn");

    /**
     * 유틸리티 함수 정의 영역
     * ----------------------------------------------------
     */

    // 인증서 뷰어 모달 열기
    function openCertificateModal(imgSrc) {
        // if (!certificateModal || !viewerImage) return;
        try {
            viewerImage.src = imgSrc;
            certificateModal.style.display = "block";
            document.body.style.overflow = "hidden";
            console.log("인증서 뷰어 모달 열기 성공");
        } catch (error) {
            console.error("인증서 뷰어 모달 열기 실패:", error);
        }
    }

    // 인증서 뷰어 모달 닫기
    function closeCertificateModal() {
        // if (!certificateModal) return;
        try {
            certificateModal.style.display = "none";
            document.body.style.overflow = "";
            console.log("인증서 뷰어 모달 닫기 성공");
        } catch (error) {
            console.error("인증서 뷰어 모달 닫기 실패:", error);
        }
    }

    /**
     * 이벤트 리스너 설정 영역
     * ----------------------------------------------------
     */
    function initializeEventListeners() {
        try {
            // 인증서 이미지 클릭 이벤트
            if (certificateImage) {
                certificateImage.addEventListener("click", function () {
                    openCertificateModal(this.src);
                });
            }

            // 닫기 버튼 클릭 이벤트
            if (closeViewerBtn) {
                closeViewerBtn.addEventListener("click", closeCertificateModal);
            }

            // 배경 클릭 시 닫기
            if (certificateModal) {
                certificateModal.addEventListener("click", function (e) {
                    if (e.target.classList.contains("modal-backdrop")) {
                        closeCertificateModal();
                    }
                });
            }

            console.log("인증서 뷰어 모달 이벤트 리스너 초기화 완료");
        } catch (error) {
            console.error("이벤트 리스너 설정 중 오류 발생:", error);
        }
    }

    /**
     * ESC 키 이벤트 핸들러
     * ----------------------------------------------------
     */
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && certificateModal?.style.display === "block") {
            closeCertificateModal();
        }
    });

    /**
     * 초기화 실행
     * ----------------------------------------------------
     */
    try {
        console.log("인증서 뷰어 모달 초기화 시작");
        initializeEventListeners();
        console.log("인증서 뷰어 모달 초기화 완료");
    } catch (error) {
        console.error("인증서 뷰어 모달 초기화 실패:", error);
    }
});
