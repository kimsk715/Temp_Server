// 이미지 삭제버튼
const deleteBtn = document.getElementById("delete-btn");
const form = document.forms["program-image-form"];

deleteBtn.addEventListener('click',() => {
    form.action = "/enterprise/company-delete-images"
    form.submit();
})

// 로고 삭제버튼
const logoBtn = document.getElementById("logo-btn")

logoBtn.addEventListener('click', (click) => {
    form.action = "/enterprise/company-delete-logo"
    form.submit();
})



