const submitBtn = document.querySelector("#submit-wait")
const form = document.forms["program-form"]

//  임시 저장 컨트롤러로 보내는 JS
submitBtn.addEventListener('click', () => {
    form.action = "/enterprise/program-pending-insert";
    form.submit();
})