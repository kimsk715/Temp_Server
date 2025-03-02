// 3개 포지션 버튼 클릭 이벤트
document.querySelectorAll(".sidebar button").forEach((button) => {
    button.addEventListener("click", (e) => {
        // 클릭되어 있던 버튼 원상복구
        document.querySelectorAll(".sidebar button").forEach((button) => {
            button.classList.remove("clicked");
        });

        // 이미 만들어져 있는 dropdown menu 모두 삭제 (원상복구)
        document.querySelectorAll(".sidebar li").forEach((e) => {
            e.remove();
        });

        // 버튼의 배경색과 글자색이 바뀌도록 변경
        if (e.target.tagName == "SPAN" || e.target.classList.contains("triangle")) {
            // 진행중 포지션과 마감된 포지션은 SPAN이 클릭 됨.
            e.target.closest("button").classList.add("clicked");

            // 형제 ul의 dropdown menu 생성
            e.target.closest("button").nextElementSibling.innerHTML = `
                                                    <li class="circle">프론트 웹 개발자</li>
                                                    <li class="circle">PHP 웹 개발자(신입)</li>
                                                    <li class="circle">iOS 모바일앱 개발자</li>`;
        } else {
            e.target.classList.add("clicked");
        }
    });
});

// dropdown 메뉴가 클릭됬을 때 이벤트 발생시키기
document.querySelectorAll(".sidebar ul").forEach((ul) => {
    ul.addEventListener("click", (e) => {
        // 클릭된 요소가 li인 경우
        if (e.target.tagName === "LI") {
            // 기존에 클릭되었던 메뉴의 클래스명 'clicked' 삭제
            document.querySelectorAll(".sidebar li").forEach((e) => {
                e.classList.remove("clicked");
            });
            // 신규로 클릭된 메뉴의 클래스명에 'clicked' 추가
            e.target.classList.add("clicked");
        }
    });
});
