// 누르면 페이지 상단으로 가는 버튼
const gotoTopButton = document.querySelector(".goToTopButtonContainer");

gotoTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// 근데 이 버튼이 페이지 하단으로 가야만 노출됨

// 스크롤 감지
window.addEventListener("scroll", () => {
    // 페이지 하단에 도달했는지 확인
    if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
    ) {
        gotoTopButton.classList.add("show"); // 애니메이션으로 보이기
    } else {
        gotoTopButton.classList.remove("show"); // 애니메이션으로 숨기기
    }
});

// 버튼 누르면 페이지 밑 자주 묻는 질문으로
function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight, // 페이지의 맨 끝으로 이동
    });
}
