const submitBtn = document.querySelector("#submit-wait")
const form = document.forms["program-form"]



//  임시 저장 컨트롤러로 보내는 JS
submitBtn.addEventListener('click', () => {
    form.action = "/enterprise/program-pending-update"
    form.submit();
})

// 공고 삭제 버튼
const deleteBtn = document.querySelector("#delete-btn")

deleteBtn.addEventListener('click', () => {
    form.action = "/enterpirse/program-delete"
    form.submit();
})

