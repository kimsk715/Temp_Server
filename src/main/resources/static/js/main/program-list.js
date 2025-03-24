const selectAllButton = document.querySelector(".allCategory"); // 전체 선택 버튼
const categoryButtons = document.querySelectorAll(".categorySelect"); // 각 카테고리 버튼
const allCheckboxes = document.querySelectorAll(".listJobBtnWrap label input"); // 전체 버튼 + 카테고리 버튼을 포함한 모든 버튼
const searchInput = document.querySelector("input[name=keyword]")
// 버튼 클릭 정보를 저장하는 함수
searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        const currentKeyword = searchInput.value.trim();
        const prevKeyword = JSON.parse(sessionStorage.getItem("prevKeyword")) || "";

        console.log("이전 키워드:", prevKeyword);
        console.log("현재 키워드:", currentKeyword);

        if (currentKeyword !== prevKeyword) {
            console.log("🔄 검색어 변경됨 -> prevKeyword 업데이트!");
            sessionStorage.setItem("prevKeyword", JSON.stringify(currentKeyword));
        } else {
            console.log("✅ 검색어 동일 -> 업데이트 안함");
        }
    }
});
function saveCheckboxState() {
    const checkboxState = {};
    const prevKeyword = JSON.parse(sessionStorage.getItem("prevKeyword"));
    allCheckboxes.forEach((checkbox, index) => {
        checkboxState[index] = checkbox.checked; // 체크 상태 저장
    });
    // 카테고리 버튼이 하나라도 체크되어있으면, 전체 버튼 체크 해제 (0번 인덱스가 전체 버튼)
    let anyChecked = [...categoryButtons].some(
        (btn) => btn.checked);
    if(anyChecked){
        checkboxState[0] = false;
    }
    // 키워드 입력으로 검색 시 카테고리 초기화
    // 위에서 버튼 체크 상태로 체크해도 검색어가 입력되면 그에 맞게 초기화 되도록
    // 좀 더 후순위로 실행되도록 밑에 작성.
    sessionStorage.setItem("checkboxState", JSON.stringify(checkboxState));
}

// - 카테고리로 필터링 된 상태에서 검색을 다시 할 경우, 키워드로만 검색되는데, 버튼의 표시 상태가 초기화되지 않음.


function loadCheckboxState() {
    const savedState = JSON.parse(sessionStorage.getItem("checkboxState"));
    let prevKeyword = JSON.parse(sessionStorage.getItem("prevKeyword")); // 이전 키워드 가져오기
    const currentKeyword = getQueryParam("keyword")?.[0] || "";
    console.log("이전 키워드:" ,prevKeyword)
    console.log("현재 키워드:" ,currentKeyword)
    if (savedState) {
        // 🔥 이전 키워드와 현재 키워드가 다를 때만 초기화!
        if (currentKeyword !== "" && prevKeyword !== currentKeyword) {
            console.log("🔄 검색어 변경됨 -> 카테고리 초기화");
            allCheckboxes.forEach((checkbox) => {
                checkbox.checked = false; // 체크박스 초기화
            });
            selectAllButton.checked = true; // '전체' 버튼 체크

            // ✅ 검색어가 변경된 경우에만 prevKeyword 업데이트
            sessionStorage.setItem("prevKeyword", JSON.stringify(currentKeyword));
        } else {
            console.log("✅ 검색어 동일 -> 기존 체크 상태 유지");
            // 기존 체크 상태 유지
            allCheckboxes.forEach((checkbox, index) => {
                checkbox.checked = savedState[index] || false;
            });
        }
    }
}

allCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", saveCheckboxState);
});

// 페이지 로드 시 버튼 정보 불러옴.
document.addEventListener("DOMContentLoaded", loadCheckboxState);


// 전체 버튼을 클릭했을 때, 다른 카테고리 필터의 클릭 상태 초기화
selectAllButton.addEventListener("click",()=>{
    categoryButtons.forEach((checkbox) => {
        checkbox.checked = false;
        })

})

const anyButtonChecked = () => {
    let anyChecked = [...categoryButtons].some(
        (btn) => btn.checked);
    // 만약 하나라도 체크되어있으면 true 반환 ==> 전체 버튼 비활성화
    // 모두 해제되어있으면 false 반환 ==> 전체 버튼 활성화
    selectAllButton.checked = !anyChecked;
}

// 필터링 + 검색어 초기화 버튼에 넣을 함수
const resetAll = () => {
    path = "/program/list";
}
// =======================================

let checkedCount = 0; // 카테고리 선택된 갯수 확인
//  url 로부터 keyword 받아오기
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    // console.log(urlParams.getAll(param))
    return urlParams.getAll(param);
}

// url 에 카테고리 배열을 쿼리 스트링의 형태로 추가하기
let text="";
let searchKeyword = "";
let path = "";
categoryButtons.forEach((categoryButton)=>{
    categoryButton.addEventListener("click",(e)=>{
        // console.log("카테고리 버튼 클릭")
        path = '/program/list'; // 기본 경로값. 이 뒤에 쿼리 스트링 추가됨.
        if(!(getQueryParam("keyword").length === 0)){
            searchKeyword = "keyword=" + getQueryParam("keyword") + "&";
        }
        // 카테고리를 배열의 형태로 저장.
        const categoryDatas = [];
        const categories = document.querySelectorAll(".listJobBtnWrap input[type='checkbox']:checked")
        categories.forEach((category) =>{
            if(category.value !== "all"){
                categoryDatas.push(category.value);
                text += "categories="+ category.value+"&";
                checkedCount = categoryDatas.length;
            }
        })
        // 5개까지만 동시에 필터링. 그 이상일 경우에는 버튼의 이벤트를 방지하고, 직전 검색 결과로 이동.
        // (ex. 1,3,4,6 이 클릭된 상태에 키워드 '감자' 가 있으면, /program/list?keyword=감자&categories=1&categories=3&categories=4&categories=6
        if(checkedCount <= 5){
            if(!(getQueryParam("keyword").length === 0) || categoryDatas.length > 0){
                path += "?";
            }
            if(!(getQueryParam("keyword").length === 0)){
                path += searchKeyword;
            }
            if(categoryDatas.length > 0) {
                path += text
            }
            let anyChecked = [...categoryButtons].some(
                (btn) => btn.checked);
            if(!anyChecked){
                text="";
            }
            if(!(getQueryParam("keyword").length === 0) || categoryDatas.length > 0){
                path = path.slice(0, -1);
            }
        }
        else{
            e.preventDefault();
            e.target.checked = false;
            const prevURL = window.location.search;
            path += prevURL
        }
        console.log(path)
        console.log(checkedCount + "클릭 이후의 카운트 수")
    })
})

selectAllButton.addEventListener('click',() =>{
    path = '/program/list';
    if(!(getQueryParam("keyword").length === 0)){
        searchKeyword = "keyword=" + getQueryParam("keyword");
        path += "?";
        path += searchKeyword;
    }
    categoryButtons.forEach((button) => {
        button.checked = false;
    })
    addQuery();
})
// 만약 카테고리 버튼의 변화(추가 or 삭제)가 있다면, 실행해서
document.addEventListener("change",(anyButtonChecked));

const addQuery = () => {
    console.log(path)
    window.location.href = path;
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


// if(!(getQueryParam("keyword").length === 0)){
//     allCheckboxes.forEach((checkbox, index) => {
//         savedState[index] = false; // 체크 상태 변경
//     });
//     savedState[0] = true;
//     console.log("검색어 입력 시 카테고리 초기화")
// }




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