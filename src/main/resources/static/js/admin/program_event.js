// 프로그램 모달 영역
const programModalWrapper = document.querySelector(".announce-modal");
const pageWrap = document.querySelector(".announce-pagination");
const statusCategories = document.querySelector(".announce-status-filter");
const dateCategories = document.querySelector(".announce-date-filter")
const keywordInput = document.querySelector("div.announce-filter div.search-box input[name=keyword]");
// const programWrapper = document.querySelector(".announce-management");

document.addEventListener('click',(e)=>{
    if(e.target.classList.contains("announce-link")){
        console.log("클릭됨")
        programService.getAllProgram(programLayout.showList);
    }

})

pageWrap.addEventListener('click',(e) =>{
    if(e.target.className.includes("page-btn")){
        const dateType  = dateCategories.value;
        const statusType = statusCategories.value;
        const keyword = keywordInput.value;
        const param = {page:e.target.id, search : { date : dateType, status : statusType, keyword : keyword}}
        programService.getAllProgram(programLayout.showList, param);
        console.log("페이지", e.target.innerText)

    }
})

statusCategories.addEventListener('click',(e) =>{
        const dateType  = dateCategories.value;
        const statusType = statusCategories.value;
        const param = {search : {date : dateType, status : statusType}}
        const keyword = keywordInput.value;

        if(keyword){
            param.search.keyword = keyword;
        }
        programService.getAllProgram(programLayout.showList , param);
    })


dateCategories.addEventListener('click',(e) =>{
        // e.preventDefault();
        const dateType  = dateCategories.value;
        const statusType = statusCategories.value;
        const param = {search : {date : dateType, status : statusType}}
        const keyword = keywordInput.value;

        if(keyword){
            param.search.keyword = keyword;
        }
        programService.getAllProgram(programLayout.showList,param);
    })


keywordInput.addEventListener("keyup",(e)=>{
    if(e.key === 'Enter'){
        const keyword = e.target.value;
        if(keyword){
            const dateType  = dateCategories.value;
            const statusType = statusCategories.value;
            const param = {search : {date : dateType, status : statusType, keyword : keyword}}
            programService.getAllProgram(programLayout.showList, param);
        }
    }
})


programModalWrapper.addEventListener('click',(e)=>{
    const contentSelect = programModalWrapper.querySelector(".content-select");
        if(e.target.contains(contentSelect)) {
            if (contentSelect.value === "company-intro") {
                contentSelect.nextElementSibling.children[0].style.display = "block";
                contentSelect.nextElementSibling.children[1].style.display = "none";
                contentSelect.nextElementSibling.children[2].style.display = "none";
            }
            else if (contentSelect.value === "program-intro") {
                contentSelect.nextElementSibling.children[0].style.display = "none";
                contentSelect.nextElementSibling.children[1].style.display = "block";
                contentSelect.nextElementSibling.children[2].style.display = "none";
            }
            else if(contentSelect.value === "program-benefit") {
                contentSelect.nextElementSibling.children[0].style.display = "none";
                contentSelect.nextElementSibling.children[1].style.display = "none";
                contentSelect.nextElementSibling.children[2].style.display = "block";
            }
            else{
                contentSelect.nextElementSibling.children[0].style.display = "none";
                contentSelect.nextElementSibling.children[1].style.display = "none";
                contentSelect.nextElementSibling.children[2].style.display = "none";
            }
        }
    })


programWrapper.addEventListener('click',(e) =>{
    if(e.target.classList.contains("detail-btn")){
        console.log("클릭됨")
        programService.getDetail(programLayout.openProgramDetail, e.target.value);
    }
})




