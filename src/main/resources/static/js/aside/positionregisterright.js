// 버튼 클릭시 버튼 색 바꾸기
document.querySelectorAll(".sidebar button").forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.outerHTML);
        document.querySelectorAll(".sidebar button").forEach((e) => {
            e.classList.remove("clicked");
        });
        e.target.classList.add("clicked");
    });
});
