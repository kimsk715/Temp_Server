const righttopbutton = document.querySelector("div.header-right-user7");
const righttopmenu = document.querySelector("div.header-right-menu8");
NodeList.prototype.addEventListener = Array.prototype.addEventListener;

// 우상단 마우스 이벤트트
righttopbutton.addEventListener("mouseover", function () {
    righttopmenu.style.display = "block";
})
righttopmenu.addEventListener("mouseover", function () {
    righttopmenu.style.display = "block";
})
righttopbutton.addEventListener("mouseout", function () {
    righttopmenu.style.display = "none";
})
righttopmenu.addEventListener("mouseout", function () {
    righttopmenu.style.display = "none";
})

const searchBoxBlink = document.querySelector("div.search-box");
const searchBoxHidden = document.querySelector("div.searchbox-hidden")
const searchBoxOnClick = document.querySelector("div.searchbox-onclick")
const searchButton = document.querySelector("button.search-button");
document.addEventListener('click', function(e){
    if(searchBoxBlink.contains(e.target)){
        searchBoxHidden.style.display = "block";
        searchBoxOnClick.style.display = "block";
    }
    else if(!searchBoxHidden.contains(e.target)){
        searchBoxHidden.style.display = "none";
        searchBoxOnClick.style.display = "none";
    }
})
const searchInput = document.querySelector("input[name=keyword]")
const isEmpty = (string) => {
    return string.replaceAll(" ", "")
}
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    // console.log(urlParams.getAll(param))
    return urlParams.getAll(param);
}


// 헤더의 검색 버튼 관련 이벤트
const searchBox = document.querySelector(".search-box input");
// 검색 버튼 누를 때, 기존 카테고리 버튼 초기화
searchButton.addEventListener("click",(e)=>{
    if(JSON.parse(sessionStorage.getItem("prevKeyword")) != null) {
        var prevKeyword = JSON.parse(sessionStorage.getItem("prevKeyword"));
    } // 이전 키워드 가져오기
    const currentKeyword = getQueryParam("keyword")?.[0] || "";
    console.log(currentKeyword)
    let tempKeyword = searchInput.value;
    // 검색창 input 의 value 가져오기
    console.log(tempKeyword)
    // 공백을 모두 제거
    console.log(isEmpty(tempKeyword))

    if(!isEmpty(tempKeyword)){
        alert("검색어를 입력해주세요!");
        e.preventDefault()
        window.location.href = window.location.search
        return;
    }
    if(prevKeyword === currentKeyword){
        let tempAllButton = JSON.parse(sessionStorage.getItem("checkboxState"));
        for(let i=0; i<tempAllButton.length; i++) {
            tempAllButton[i] = false; // 체크 상태 변경
        }
        tempAllButton[0] = true;
        sessionStorage.setItem("checkboxState", tempAllButton);
    }
})



document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 방지
    let keyword = this.keyword.value.trim();
    window.location.href = keyword ? `/program/list?keyword=${encodeURIComponent(keyword)}` : `/program/list`;
});


