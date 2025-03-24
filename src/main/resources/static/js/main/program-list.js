const selectAllButton = document.querySelector(".allCategory"); // 전체 선택 버튼
const categoryButtons = document.querySelectorAll(".categorySelect"); // 각 카테고리 버튼
const allCheckboxes = document.querySelectorAll(".listJobBtnWrap label input"); // 전체 버튼 + 카테고리 버튼을 포함한 모든 버튼
const searchInput = document.querySelector("input[name=keyword]")
const homeButton = document.querySelector(".logo-wrap a");
const headerButton = document.querySelector(".header4 a");

// 메인페이지로 돌아갈 때 버튼 눌린 상태를 초기화해주는 이벤트리스너
homeButton.addEventListener("click",(e) => {
    if(JSON.parse(sessionStorage.getItem("checkboxState")) !== null) {
        let tempState = JSON.parse(sessionStorage.getItem("checkboxState"));
        console.log("홈버튼 눌림")
        console.log(tempState.length)
        for(let i=0; i<tempState.length; i++) {
            tempState[i] = false; // 체크 상태 변경
        }
        tempState[0] = true;
        console.log(tempState)
        sessionStorage.setItem("checkboxState", tempState);
    }
})
// 검색어 정보를 저장하는 함수(기존 키워드 + 현재 키워드를 비교해서 키워드가 같은 상태에서 카테고리가 바뀌는 경우
// 버튼이 누적되도록 하기 위한 조건,
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
// 버튼 클릭 정보를 저장하는 함수
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
    // console.log(checkboxState);
    sessionStorage.setItem("checkboxState", JSON.stringify(checkboxState));
}

// 기존 버튼의 상태를 불러오는 함수. 조건에 따라 추가적으로 버튼 상태를 변경해서 load 함.
function loadCheckboxState() {
    if(JSON.parse(sessionStorage.getItem("checkboxState")) != null) {
        var savedState = JSON.parse(sessionStorage.getItem("checkboxState"));
    }
    if(JSON.parse(sessionStorage.getItem("prevKeyword")) != null) {
        var prevKeyword = JSON.parse(sessionStorage.getItem("prevKeyword"));
    } // 이전 키워드 가져오기
    const currentKeyword = getQueryParam("keyword")?.[0] || "";
    console.log("이전 키워드:" ,prevKeyword)
    console.log("현재 키워드:" ,currentKeyword)
    console.log(!currentKeyword)

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
const isEmpty = (string) => {
    return string.replaceAll(" ", "")
}

// 전체 체크버튼들에 대해서 변화가 감지되었을 때, 그 버튼의 눌린 상태를 반영해서 세션에 저장.
allCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", saveCheckboxState);
});

// 페이지 로드 시 버튼 정보 불러옴.
document.addEventListener("DOMContentLoaded", loadCheckboxState);
headerButton.addEventListener("click",(e) => {
    let tempAllButton = JSON.parse(sessionStorage.getItem("checkboxState"));
    for(let i=0; i<tempAllButton.length; i++) {
        tempAllButton[i] = false; // 체크 상태 변경
    }
    tempAllButton[0] = true;

    sessionStorage.setItem("checkboxState", tempAllButton);
})

// 전체 버튼을 클릭했을 때, 다른 카테고리 필터의 클릭 상태 초기화
selectAllButton.addEventListener("click",()=>{
    categoryButtons.forEach((checkbox) => {
        checkbox.checked = false;
        })
    let tempAllButton = JSON.parse(sessionStorage.getItem("checkboxState"));
    for(let i=0; i<tempAllButton.length; i++) {
        tempAllButton[i] = false; // 체크 상태 변경
    }
    tempAllButton[0] = true;

    sessionStorage.setItem("checkboxState", tempAllButton);
})

//  버튼 체크 상태를 확인하는 boolean 변수
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
console.log(searchKeyword)
let path = "";
categoryButtons.forEach((categoryButton)=>{
    categoryButton.addEventListener("click",(e)=>{
        // console.log("카테고리 버튼 클릭")
        path = '/program/list'; // 기본 경로값. 이 뒤에 쿼리 스트링 추가됨.
        if(!!getQueryParam("keyword")[0]){
            console.log("실행?")
            searchKeyword = "keyword=" + getQueryParam("keyword") + "&";
            console.log(searchKeyword)
        }
        else if(!getQueryParam("keyword")[0]){
            searchKeyword = "";
            console.log(searchKeyword)
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
        // 5개까지만 체크
        // (ex. 1,3,4,6 이 클릭된 상태에 키워드 '감자' 가 있으면, /program/list?keyword=감자&categories=1&categories=3&categories=4&categories=6
        // 키워드나 카테고리 유무에 따라 쿼리스트링에 알맞게 추가해주는 부분.
        if(checkedCount <= 5){
            if(!!getQueryParam("keyword")[0] || categoryDatas.length > 0){
                path += "?";
            }
            if(!!getQueryParam("keyword")[0]){
                console.log(searchKeyword)
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
            if(!!getQueryParam("keyword")[0] || categoryDatas.length > 0){
                path = path.slice(0, -1);
            }
        }
        // 만약 5개가 이미 눌려있으면 이벤트 방지하고, 기존 검색 결과 링크로 이동.
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
//  전체 버튼 눌렀을 때, 카테고리 초기화
//  키워드 있으면 키워드는 유지
selectAllButton.addEventListener('click',() =>{
    path = '/program/list';
    if(!!getQueryParam("keyword")[0]){
        searchKeyword = "keyword=" + getQueryParam("keyword");
        console.log(searchKeyword)
        path += "?";
        path += searchKeyword;
    }
    categoryButtons.forEach((button) => {
        button.checked = false;
    })
    addQuery();
})
// 만약 카테고리 버튼의 변화(추가 or 삭제)가 있다면, 전체 버튼의 상태 변경
document.addEventListener("change",(anyButtonChecked));

const addQuery = () => {
    console.log(path)
    console.log(searchKeyword)
    window.location.href = path;
    path=""; // 초기화
    text="";
    searchKeyword="";
    console.log(searchKeyword)
}


// 버튼 누를 시 쿼리스트링 추가 함수 실행
categoryButtons.forEach((button) => {
    button.addEventListener("click",() =>{
        addQuery();
    })
})


document.addEventListener("DOMContentLoaded",()=>{
    let currentURL = window.location.href;
    // 나중에 도메인 주소에 맞춰서 변경. 아무런 쿼리스트링이 안들어갔을 때 어디서 접속하더라도
    // 필터 및 검색어를 초기화
    if(currentURL === "http://localhost:10000/program/list"){
        console.log("실행됨")
        selectAllButton.checked = true;
        categoryButtons.forEach((button) =>{
            button.checked = false;
        })
    }
})



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