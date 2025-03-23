const selectAllButton = document.querySelector(".allCategory"); // 전체 선택 버튼
const categoryButtons = document.querySelectorAll(".categorySelect"); // 각 카테고리 버튼
// 전체 버튼을 클릭했을 때, 다른 카테고리 필터의 클릭 상태 초기화
selectAllButton.addEventListener("click",(e)=>{
    if(e.target.checked){
    // selectAllButton.checked = false;
    categoryButtons.forEach((checkbox) => {
        checkbox.checked = false;
        })
    }
})

let checkedCount = 0;
//  url 로부터 keyword 받아오기
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.getAll(param);
}
// url 에 카테고리 배열을 쿼리 스트링의 형태로 추가하기
let text="";
let searchKeyword = "";
let path = "";
categoryButtons.forEach((categoryButton)=>{
    categoryButton.addEventListener("click",(e)=>{
        path = '/program/list';
        if(!(getQueryParam("keyword").length === 0)){
            searchKeyword = "keyword=" + getQueryParam("keyword") + "&";
        }
        const categoryDatas = [];
        const categories = document.querySelectorAll(".listJobBtnWrap input[type='checkbox']:checked")
        categories.forEach((category) =>{
            if(category.value !== "all"){
                categoryDatas.push(category.value);
                text += "categories="+ category.value+"&";
                checkedCount = categoryDatas.length;
            }
        })
        if(!(getQueryParam("keyword").length === 0) || categoryDatas.length > 0){
            path += "?";
        }
        if(!(getQueryParam("keyword").length === 0)){
            path += searchKeyword;
        }
        if(categoryDatas.length > 0) {
            path += text
        }
        if(!(getQueryParam("keyword").length === 0) || categoryDatas.length > 0){
            path = path.slice(0, -1);
        }
        // console.log(checkedCount)

    })
})

const anyButtonChecked = () => {
    let anyChecked = [...categoryButtons].some(
        (btn) => btn.checked);
    if(anyChecked){
        selectAllButton.checked = false;
    }
}

document.addEventListener("change",(anyButtonChecked));
const addQuery = () => {
    window.location.href = path;
    // console.log(path)
    path=""; // 초기화
    text="";
    searchKeyword="";
}


// 버튼 누를 시 쿼리 실행해주는 함수.
categoryButtons.forEach((button) => {
    button.addEventListener("click",() =>{
        addQuery();
    })
})
// 버튼 클릭 정보를 저장하는 함수
function saveCheckboxState() {
    const checkboxState = {};
    categoryButtons.forEach((checkbox, index) => {
        checkboxState[index] = checkbox.checked; // 체크 상태 저장
    });
    sessionStorage.setItem("checkboxState", JSON.stringify(checkboxState));
}

function loadCheckboxState() {
    const savedState = JSON.parse(sessionStorage.getItem("checkboxState"));
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

// 이 아래부터는 스크랩 기능 관련 함수 모음
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

// 여기까지 스크랩 관련 함수 모음.