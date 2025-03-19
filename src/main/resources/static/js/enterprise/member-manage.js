// 모달창 열고 닫기
function openModal() {
    document.getElementById('inviteModal').classList.add('active');
}
function closeModal() {
    document.getElementById('inviteModal').classList.remove('active');
}

// 이메일 추가
const emailRegisterButton = document.querySelector(".emailregister")
const emailAddArea = document.querySelector(".added-email")
emailRegisterButton.addEventListener('click', (e) => {
    e.preventDefault(); // 기본으로 post로 안 넘어가게

    const tempText = emailRegisterButton.previousElementSibling.value.trim();

    if(tempText && validateEmail(tempText)) {


        console.log(tempText)
        const temp = document.createElement('span')
        temp.innerHTML = `${tempText}<button class="remove-email">&nbsp;×</button>`

        emailAddArea.append(temp);
        emailRegisterButton.previousElementSibling.value = '';
    } else {
        alert("유효한 이메일을 입력해주세요.")
    }
})


// const deleteViewerBtn = document.querySelectorAll("")

// 이메일 유효성 검사
function validateEmail(email){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// 권한 삭제
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

// 계정 이름 변경
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

// 전화번호 변경
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

// 초대 이메일 삭제
window.addEventListener('click',(e)=>{
    if(e.target && e.target.matches(".remove-email")){
        e.target.parentElement.remove()
    }
})

// 초대 메일 발송 버튼 클릭 시
const inviteButton = document.querySelector('.invite-btn');

inviteButton.addEventListener('click', (event) => {
    event.preventDefault(); // 기본 제출 방지

    const emails = getEmails();
    if (emails.length === 0) {
        alert('초대할 이메일을 추가해주세요.');
        return;
    }

    // 이멜 보내고 뜨는 로딩 gif
    document.getElementById("loading").style.display = "block"
    document.getElementById("overlay").style.display = "block"

    // 안 보이는 input에 이메일 값 설정
    let hiddenInput = document.getElementById('emailsInput');
    if (!hiddenInput) {
        hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'emails';
        hiddenInput.id = 'emailsInput';
        document.getElementById('inviteForm').appendChild(hiddenInput);
    }
    hiddenInput.value = emails.join(',');

    document.getElementById('inviteForm').submit(); // 폼 제출
});

// 이메일 목록을 가져옴
function getEmails() {
    return [...document.querySelectorAll('.added-email span')]
        .map(email => email.firstChild.textContent.trim());
}

// 초대 이메일 전송 함수 (실제 기능 추가 필요)
function sendInviteEmail(emails, role) {
    console.log("초대 이메일 전송");
    console.log("이메일 목록:", emails);
    console.log("선택된 권한:", role);
}

// 뷰어에게 관리자 권한 부여
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