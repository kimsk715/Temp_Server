function openModal() {
    document.getElementById('inviteModal').classList.add('active');
}
function closeModal() {
    document.getElementById('inviteModal').classList.remove('active');
}

const emailRegisterButton = document.querySelector(".emailregister")
const emailAddArea = document.querySelector(".added-email")
emailRegisterButton.addEventListener('click', () => {
    const tempText = emailRegisterButton.previousElementSibling.value
    console.log(tempText)
    const temp = document.createElement('span')
    temp.innerHTML = `${tempText}<button class="remove-email">×</button>`

    emailAddArea.append(temp)
})


// const deleteViewerBtn = document.querySelectorAll("")


window.addEventListener("click", (e) => {
    if (e.target && e.target.matches(".btn-delete")) {
        const check = e.target.closest('tr').firstElementChild.lastElementChild
        // console.log(check)
        if (check.classList.contains("btn-view")) {
            if (confirm("뷰어 권한을 삭제하시겠습니까?")) {
                check.closest('tr').remove()
            }
            else{
             
            }
        }
        else {
            alert("관리자 권한 삭제는 고객센터로 요청바랍니다.")
        }
    }
})

const saveBtn = document.querySelector(".btnsave")
const nameInput = document.getElementById("name")
const nameDisp = document.getElementById("name-display")
const nameEditBtn = document.querySelector(".nameedit")
saveBtn.addEventListener('click', () => {
    nameDisp.textContent = nameInput.value;
    nameInput.classList.add("hidden");
    nameDisp.classList.remove("hidden");
    saveBtn.classList.add("hidden")
    nameEditBtn.classList.remove("hidden")
})

nameEditBtn.addEventListener('click',() =>{
    nameInput.classList.remove("hidden");
    nameDisp.classList.add("hidden");
    saveBtn.classList.remove("hidden")
    nameEditBtn.classList.add("hidden")
})


const phoneBtn = document.querySelector(".btnmodi")
const phoneInput = document.getElementById("phone")
const phoneDisp = document.getElementById("phone-display")
const phoneEditBtn = document.querySelector(".phoneedit")
phoneBtn.addEventListener('click', () => {
    phoneDisp.textContent = phoneInput.value;
    phoneInput.classList.add("hidden");
    phoneDisp.classList.remove("hidden");
    phoneBtn.classList.add("hidden")
    phoneEditBtn.classList.remove("hidden")
})

phoneEditBtn.addEventListener("click",()=>{
    phoneInput.classList.remove("hidden");
    phoneDisp.classList.add("hidden");
    phoneBtn.classList.remove("hidden")
    phoneEditBtn.classList.add("hidden")
})

window.addEventListener('click',(e)=>{
    if(e.target && e.target.matches(".remove-email")){
        e.target.parentElement.remove()
    }
})

window.addEventListener('click',(e) =>{
    if(e.target && e.target.matches(".btn-edit")){
        if(confirm("관리자 권한을 부여하시겠습니까?")){
            // 관리자로 승격시키는 코드
        }
        else{
            // 아무 행동 X
        }
    }
})