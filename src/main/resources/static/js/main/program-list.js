// 카테고리 버튼 구현 부분
// aria-pressed? html에 있길래 쓰긴 했는데
// 버튼같은 요소가 눌린 상태인지 여부를 나타내는 속성이라고 합니다...
// 토글 기능을 넣어야 하니까 이게 true인지 false인지에 따라 CSS에서 스탈을 따로 줘야겠음

// DOMContentLoaded가 뭔가하니 사이트 킬 때 즉시 js가 실행되게 하는 역할이라구 함
// document.addEventListener("DOMContentLoaded", () => {
    const selectAllButton = document.querySelector(".allCategory"); // 전체 선택 버튼
    const categoryButtons = document.querySelectorAll(".categorySelect");
        // selectAllButton 이 아닌 개별 카테고리 버튼
    selectAllButton.addEventListener("click",(e)=>{
     if(e.target.checked){
         categoryButtons.forEach((checkbox) => {
            checkbox.checked = false;
         })
     }
    })
let checkedCount = 0;
categoryButtons.forEach((button) =>{
    button.addEventListener('click',()=>{
        if(button.checked){
            checkedCount++;
            // console.log(checkedCount)
        }
    })


})
let text="";
categoryButtons.forEach((categoryButton)=>{
    categoryButton.addEventListener("click",(e)=>{
        text += "?";
        const categoryDatas = [];
        const categories = document.querySelectorAll(".listJobBtnWrap input[type='checkbox']:checked")
        categories.forEach((category) =>{
            categoryDatas.push(category.value);
            text += "categories="+ category.value+"&";

        })
        console.log(categoryDatas)
        text = text.slice(0,-1);
        // console.log(text);
    })
})

const addQuery = () => {
     let path = '/program/list' +text;

     text="";
    // console.log(path);
    window.location.href = path;

    path="";
}
categoryButtons.forEach((button) => {
    button.addEventListener("click",() =>{
        addQuery();
    })
})

function saveCheckboxState() {
    const checkboxState = {};
    categoryButtons.forEach((checkbox, index) => {
        checkboxState[index] = checkbox.checked; // 체크 상태 저장
    });
    localStorage.setItem("checkboxState", JSON.stringify(checkboxState)); // 저장
}

function loadCheckboxState() {
    const savedState = JSON.parse(localStorage.getItem("checkboxState"));
    if (savedState) {
        categoryButtons.forEach((checkbox, index) => {
            checkbox.checked = savedState[index] || false; // 저장된 값 적용
        });
    }
}

categoryButtons.forEach(checkbox => {
    checkbox.addEventListener("change", saveCheckboxState);
});

document.addEventListener("DOMContentLoaded", loadCheckboxState);





//
//     // 카테고리 버튼을 누르면 aria-pressed 상태 변경
//     // 버튼을 각각 확인
//     categoryButtons.forEach((button) => {
//         button.addEventListener("click", () => {
//             // aria-pressed 값 토글
//             // isPressed: 버튼이 지금 눌려있니?(boolean)
//
//             // setAttribute(속성, 값) & getAttribute(속성)?
//             // html에서 속성이랑 값을 수정할 때랑 가져올 때 쓴다구 한다.
//             // 자바때 배운 getter setter이랑 느낌은 비슷한듯
//             // 예:) document.querySelector("a").setAttribute("href", "https://google.com"); // a태그 링크수정
//             const isPressed = button.checked;
//
//
//             // 개별 버튼이 하나라도 해제되면 "전체 선택"을 false로 변경
//
//             // some은 배열에서 하나라도 조건을 만족하는 요소가 있는지 확인할 때 사용
//             // 여기선 개별 버튼을 누르면 전체 버튼을 끄는 목적으로 사용
//             const anyUnchecked = [...categoryButtons].some(
//                 (btn) => btn.checked === "false"
//             );
//
//             // aria-pressed 상태가 true인가? true면 false, false면 true로 반대로 리턴한다.
//             selectAllButton.setAttribute(
//                 "checked",
//                 anyUnchecked ? "false" : "true"
//             );
//
//             // 선택된 버튼 개수 확인
//             let buttonCount = 0;
//             categoryButtons.forEach((btn) => {
//                 // aria-pressed의 상태가 true면
//                 if (btn.checked === "true") {
//                     // 선택된 개수에 추가하여 계산한다.
//                     buttonCount++;
//                 }
//             });
//
//             // 개별 버튼을 5개 이상 누르면 alert 메세지 띄우기
//             // buttonCount 제한만 쓰니까 alert 메세지가 뜨고 버튼 해제도 안 되어서 안 눌려있다는 조건을 추가함
//
//             // ※ alert 띄우지 말고 선택만 더 안 되게 막으라고 하셔서 alert는 빼야겠음
//             if (!isPressed && buttonCount >= 5) {
//                 // alert("직무는 5개까지 선택 가능합니다");
//                 // 메세지는 제대로 뜨는데 alert가 뜨고도 버튼 체크되는게 마음에 안 듬.
//                 // 여기를 통과해야 aria-pressed의 상태를 바꾸는게 좋아보임.
//                 return;
//             }
//
//             // 상태 변경 (위 조건을 통과한 경우만 실행)
//             // aria-pressed 상태가 true인가? true면 false, false면 true로 반대로 리턴한다.
//             button.setAttribute("checked", isPressed ? "false" : "true");
//         });
//     });
//
//     // "전체 선택" 버튼 클릭 이벤트 (개별 버튼 상태 변경)
//     selectAllButton.addEventListener("click", () => {
//         const isPressed =
//             selectAllButton.checked === "true";
//
//         // "전체 선택" 버튼을 클릭하면 개별 버튼들의 aria-pressed 값을 모두 false로 변경
//         // 전체 버튼이 눌려있니? 눌려있음 끄고 꺼져있으면 키기
//         selectAllButton.setAttribute(
//             "checked",
//             isPressed ? "false" : "true"
//         );
//         categoryButtons.forEach((button) => {
//             button.setAttribute("checked", "false"); // 전체 버튼을 누르면 개별 버튼들은 모두 false로 설정
//         });
//     });
// });








// 이 아래 부터 수정함(Kim)
const scrapButtons = document.querySelectorAll("button.scrapButton");

document.addEventListener("DOMContentLoaded",() =>{
    scrapButtons.forEach(buttons => {
        let check = buttons.getAttribute("aria-pressed") === "true";
        let oldD = "M10.725 14.71a2 2 0 0 1 2.55 0l3.975 3.289V5H6.75v12.999l3.975-3.29ZM4.75 20.123V5a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v15.124a1 1 0 0 1-1.638.77L12 16.25l-5.612 4.645a1 1 0 0 1-1.638-.77Z";
        let newD = "M6.403 20.825a1 1 0 0 1-1.653-.757V5a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v15.068a1 1 0 0 1-1.653.757L12 16l-5.597 4.825Z";
        let oldFill = "#222";
        let newFill = "#00DD6D";
        let path = buttons.querySelector("svg path")
        if(check && path){
            path.setAttribute("d",newD);
            path.setAttribute("fill", newFill);
        }
    })
})

function updateButtonState(programId, isScrapped) {
    const button = document.querySelector(`#button-${programId}`);
    let oldD = "M10.725 14.71a2 2 0 0 1 2.55 0l3.975 3.289V5H6.75v12.999l3.975-3.29ZM4.75 20.123V5a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v15.124a1 1 0 0 1-1.638.77L12 16.25l-5.612 4.645a1 1 0 0 1-1.638-.77Z";
    let newD = "M6.403 20.825a1 1 0 0 1-1.653-.757V5a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v15.068a1 1 0 0 1-1.653.757L12 16l-5.597 4.825Z";
    let oldFill = "#222";
    let newFill = "#00DD6D";
    if (button) {
        const path = button.querySelector("svg path")
        button.setAttribute("aria-pressed", isScrapped);
        if(isScrapped){
            path.setAttribute("d",newD);
            button.setAttribute("fill", newFill);
        }
        else{
            path.setAttribute("d", oldD);
            button.setAttribute("fill", oldFill);
        }
    }
}


function toggleScrap(programId) {
    fetch(`/program/list/exists/${programId}`)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();})
        .then(data => {
            if (data.exists) {
                deleteScrap(programId);
            } else {
                addScrap(programId);
            }
        })
        .catch(error => console.error("Error:", error));
}

function addScrap(programId) {
    fetch(`/program/list/add/${programId}`, { method: "POST" })
        .then(response => {
            if (response.ok) {
                updateButtonState(programId, true); // ✅ 버튼 상태 업데이트
            }
        })
        .catch(error => console.error("Error:", error));
}

function deleteScrap(programId) {
    fetch(`/program/list/delete/${programId}`, { method: "DELETE" })
        .then(response => {
            if (response.ok) {
                updateButtonState(programId, false); // ✅ 버튼 상태 업데이트
            }
        })
        .catch(error => console.error("Error:", error));
}
