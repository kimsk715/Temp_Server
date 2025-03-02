const agreeCheckButton = document.getElementById("agreeChk");
const agreeArea = document.getElementById("withdrawalAgree");
const certifyArea = document.getElementById("withdrawalCertify");
const reasonArea = document.getElementById("withdrawalReason");
const withdrawalButton = document.getElementById("btn_out_agree");
// 계정 탈퇴 버튼
withdrawalButton.addEventListener("click", () => {
    if (agreeCheckButton.checked) {
        // certifyArea.style.display = "";
        // 현재는 비밀번호 유효성 검사 페이지 스킵하게 되어있음
        // 나중에는 주석 바로 윗줄 주석 해제하고, 주석 바로 아래 한줄은 주석 처리해서 사용.
        reasonArea.style.display = "";
        agreeArea.style.display = "none";
    } else {
        alert("안내 사항 동의 버튼을 체크해주세요.");
    }
});
//  비밀번호 확인 버튼
// const certifyButton = document.getElementById("btn_out_normal_certify");
// certifyButton.addEventListener("click", () => {
//     // 메시지 테스트용 임시 비밀번호
//     const temppassword = "qwer1234";
//     const pwInput = document.getElementById("passwd");
//     // 나중에 서버와 연동할 때는 서버에서 받은 비밀번호와 비교하면 넘어가도록 수정.
//     if (pwInput.value == temppassword) {
//         reasonArea.style.display = "";
//         certifyArea.style.display = "none";
//     } else {
//         alert("비밀번호가 일치하지 않습니다.");
//     }
// });

// 탈퇴 이유 선택시 도움말 출력하는 기능
const reasonOptions = document.querySelectorAll("select#out_reason_cd option");
const reasonContents = document.querySelectorAll("div.area_conts");
const selectBox = document.getElementById("out_reason_cd");
NodeList.prototype.addEventListener = Array.prototype.addEventListener;

selectBox.addEventListener("change", () => {
    let value;
    boxValue = selectBox.value;
    reasonContents.forEach((content) => {
        const contentValue = content.getAttribute("data-out_reason_cd");
        console.log(contentValue);
        if (contentValue == boxValue) {
            content.classList.add("show");
        } else if (boxValue == 2 || boxValue == 10) {
            if (contentValue == 13) {
                content.classList.add("show");
            } else {
                content.classList.remove("show");
            }
        } else {
            content.classList.remove("show");
        }
    });
});

// 최종 이유 선택 버튼(미구현)
