const InputTagCloseBtn = document.getElementById("profile-cancel");
const InputClostTags = document.querySelectorAll(".btn-modify-cancel");


InputTagCloseBtn.addEventListener('click', (e) =>{
    InputClostTags.forEach((e) =>{
        e.click()
    })
})




















const nameCheckButton = document.getElementById("btnName");
const nameEditButton = nameCheckButton.previousElementSibling;
const nameCancelButton = nameCheckButton.nextElementSibling;
const nameField = nameCheckButton.parentElement.parentElement;
const nameValue = document.getElementById("view-name");
const closeInputTag = document.getElementById("profile-cancel")

nameEditButton.addEventListener("click", () => {
    console.log(nameEditButton.classList[0]);
    console.log(nameField.classList[0]);
    const firstDiv = nameField.firstElementChild;
    const secondDiv = firstDiv.nextElementSibling;

    firstDiv.classList.add("inactive");
    secondDiv.classList.remove("inactive");
    // console.log(firstDiv.classList[1]);
    // console.log(secondDiv.classList[1]);
    nameCheckButton.removeAttribute("disabled");
    nameCheckButton.nextElementSibling.removeAttribute("disabled");
    nameCheckButton.previousElementSibling.setAttribute("disabled", "true");
});



//  수정하기 버튼누르면 수정 인풋란 오픈
const profileEditBtn = document.getElementById("profile-edit");
const profileSubmitBtn = document.getElementById("profile-submit");

// 이름 input Tag
const changeName = document.getElementById("change-name");
// 생년월일 input Tag 생년월일으 ㄹ과연 바꿀까?;;;
// const changeBirth = document.getElementById("")

// 수정하기 누르면 취소가 생기고 input tag가 열림
InputTagCloseBtn.style.display = "none";
profileSubmitBtn.style.display = "none";

profileEditBtn.addEventListener('click',()=>{
    if(InputTagCloseBtn.style.display === "none") {
        InputTagCloseBtn.style.display = "";
        nameEditButton.click();
    }
})
// 취소누르면 원상복구
InputTagCloseBtn.addEventListener('click',()=>{
    InputTagCloseBtn.style.display="none";
    profileSubmitBtn.style.display="none";
})

// 만약 InputTagCloseBtn이 화면에 보이고 있을 때만 실행

    changeName.addEventListener("input", () => {
        // 입력란의 내용이 비어 있지 않으면 저장 버튼 표시
        if (changeName.value.trim() !== "") {
            profileSubmitBtn.style.display = "inline-block"; // 버튼을 보이게
        } else {
            profileSubmitBtn.style.display = "none";
        }
    });





nameCheckButton.addEventListener("click", () => {
    console.log("+++++++++++++++++++++++++");
    const firstDiv = nameField.firstElementChild;
    const secondDiv = firstDiv.nextElementSibling;
    firstDiv.classList.remove("inactive");
    secondDiv.classList.add("inactive");
    nameCheckButton.setAttribute("disabled", "true");
    nameCheckButton.nextElementSibling.setAttribute("disabled", "true");
    nameCheckButton.previousElementSibling.removeAttribute("disabled");
});

nameCancelButton.addEventListener("click", () => {
    const firstDiv = nameField.firstElementChild;
    const secondDiv = firstDiv.nextElementSibling;
    firstDiv.classList.remove("inactive");
    secondDiv.classList.add("inactive");
    nameCheckButton.setAttribute("disabled", "true");
    nameCheckButton.nextElementSibling.setAttribute("disabled", "true");
    nameCheckButton.previousElementSibling.removeAttribute("disabled");
});

const birthCheckButton = document.getElementById("btnBirthDay");
const birthEditButton = birthCheckButton.previousElementSibling;
const birthCancelButton = birthCheckButton.nextElementSibling;
const birthField = birthCheckButton.parentElement.parentElement;

birthEditButton.addEventListener("click", () => {
    console.log(birthEditButton.classList[0]);
    console.log(birthField.classList[0]);
    const firstDiv = birthField.firstElementChild;
    const secondDiv = firstDiv.nextElementSibling;

    firstDiv.classList.add("inactive");
    secondDiv.classList.remove("inactive");
    // console.log(firstDiv.classList[1]);
    // console.log(secondDiv.classList[1]);
    birthCheckButton.removeAttribute("disabled");
    birthCheckButton.nextElementSibling.removeAttribute("disabled");
    birthCheckButton.previousElementSibling.setAttribute("disabled", "true");
});
birthCheckButton.addEventListener("click", () => {
    const firstDiv = birthField.firstElementChild;
    const secondDiv = firstDiv.nextElementSibling;
    firstDiv.classList.remove("inactive");
    secondDiv.classList.add("inactive");
    birthCheckButton.setAttribute("disabled", "true");
    birthCheckButton.nextElementSibling.setAttribute("disabled", "true");
    birthCheckButton.previousElementSibling.removeAttribute("disabled");
});

birthCancelButton.addEventListener("click", () => {
    const firstDiv = birthField.firstElementChild;
    const secondDiv = firstDiv.nextElementSibling;
    firstDiv.classList.remove("inactive");
    secondDiv.classList.add("inactive");
    birthCheckButton.setAttribute("disabled", "true");
    birthCheckButton.nextElementSibling.setAttribute("disabled", "true");
    birthCheckButton.previousElementSibling.removeAttribute("disabled");
});

const emailEditButton = document.getElementById("btnEmail");
const emailCheckButton = document.getElementById("btnMaskingEmail");
const emailCancelButton = document.getElementById("btnEmailCancel");
const editDiv = document.getElementById("edit-email");
const changeEmailSpan = document.getElementById("person-email");
const currentEmailSpan = document.getElementById("person-masking-email");
const emailCertButton = document.getElementById("btnCertEmail");
const emailMessage = document.getElementById("privacy-guide-email");
const emailCertDiv = document.getElementById("mail-cert-num");

emailEditButton.addEventListener("click", () => {
    editDiv.classList.remove("inactive");
    changeEmailSpan.style.display = "none";
    emailEditButton.setAttribute("disabled", "true");
    emailCancelButton.removeAttribute("disabled");
    emailMessage.classList.remove("inactive");
    currentEmailSpan.style.display = "block";
});

emailCancelButton.addEventListener("click", () => {
    editDiv.classList.add("inactive");
    emailCancelButton.setAttribute("disabled", "true");
    emailEditButton.removeAttribute("disabled");
    emailMessage.classList.add("inactive");
    currentEmailSpan.removeAttribute("display");
    emailCertDiv.classList.add("inactive");
    emailCertButton.removeAttribute("disabled");
    emailCertButton.innerText = "인증요청";
});

emailCheckButton.addEventListener("click", () => {
    // 여기에 기존 이메일과의 유효성 검사 필요.
    changeEmailSpan.style.display = "inline-block";
    currentEmailSpan.style.display = "none";
});

const timerSpan = document.getElementById("remain-time-mail");
timerSpan.style.color = "red";

emailCertButton.addEventListener("click", function () {
    emailCertDiv.classList.remove("inactive");
    emailCertButton.setAttribute("disabled", "true");
    emailCertButton.innerText = "발송완료";
    emailConfirmButton.removeAttribute("disabled");
    alert("인증번호가 발송되었습니다.");
    let time = 180;

    let updateTimer = () => {
        const minute = Math.floor(time / 60);
        const second = time % 60;
        timerSpan.textContent = `${minute}:${
            second < 10 ? "0" + second : second
        }`;

        if (time <= 0) {
            clearInterval(timerInterval);
            alert("입력 시간이 만료되었습니다. 인증번호를 다시 발송해주세요.");
        } else {
            time--;
        }
    };
    let timerInterval = setInterval(updateTimer, 1000);
});

const certNumInput = document.getElementById("mailCertNum");

// certNumInput.addEventListener("input", () => {
//     if (certNumInput.value !== "") {
//         emailConfirmButton.removeAttribute("disabled");
//     }
// });

const emailConfirmButton = document.getElementById("btnCertConfirmMail");
emailConfirmButton.addEventListener("click", () => {
    // let certNum = 127361;
    // if (certNumInput.value == certNum) {
    alert("인증되었습니다.");
    changeEmailSpan.style.display = "none";
    emailCertDiv.classList.add("inactive");
    emailMessage.classList.add("inactive");
    emailCancelButton.setAttribute("disabled", "true");
    emailEditButton.removeAttribute("disabled");
    emailCertButton.removeAttribute("disabled");
    emailCertButton.innerText = "인증요청";
    // } else {
    //     alert("잘못된 인증번호입니다.");
    // }
});

const checkEmailCerted = document.getElementById("mailCert");

// checkEmailCerted.addEventListener('',() => {
//     if('이메일 인증된 상태'){
//         checkEmailCerted.classList.add("badge-verified");
//     }
//     else{
//         checkEmailCerted.classList.remove("badge-verified");
//     }
// })

// 취소 버튼이나 확인 버튼으로 인증이 완료된 경우에 타이머가 초기화 되어야 하는데 안 됨.

const photoEditButton = document.querySelector("button.btn-photo");
const photoEditList = document.querySelector("div.photo-edit-btn");
const profileEditButton = document.getElementById("btnPhotoEdit");
const profileDeleteButton = document.getElementById("btnPhotoDelete");
const thumbnail = document.getElementById("myhome-profile-photo");
const input = document.getElementById("attach");

profileEditButton.addEventListener("click", () => {
    input.click();
});

window.addEventListener("click", (e) => {
    if(photoEditButton.contains(e.target)){
        photoEditList.style.display ="block";
    }
    else if(!photoEditList.contains(e.target)){
        photoEditList.style.display ="none";
    }
})


input.addEventListener("change", (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", (e) => {
        const path = e.target.result;
        console.log(path)
        if (path.includes("image")) {
            thumbnail.style.backgroundImage = `url(${path})`;
        } else {
            thumbnail.style.backgroundImage = `url("images/document.jpg")`;
        }
    });
});

profileDeleteButton.addEventListener("click", (e) => {
    thumbnail.style.backgroundImage = `url("https://www.saraminimage.co.kr/sri/person/img/profile_noimg.png")`;
    thumbnail.removeChild;
    input.value = "";

    console.log("실행됨");
});
