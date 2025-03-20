const noticeModalWrapper = document.querySelector(".notice-modal");
const noticeCategories = document.querySelector(".notice-type-filter");
const noticeDateCategories = document.querySelector(".notice-date-filter")
const noticeKeywordInput = document.querySelector("div.notice-filter div.search-box input[name=keyword]");
const noticeWrapper = document.querySelector(".notice-management");
const noticePageWrapper = document.querySelector(".notice-pagination");
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains("notice-link")){
        noticeService.getAllNotice(noticeLayout.showList);
    }
})



noticePageWrapper.addEventListener('click',(e) =>{
    if(e.target.className.includes("page-btn")){
        const dateType  = noticeDateCategories.value;
        const statusType = noticeCategories.value;
        const keyword = noticeKeywordInput.value;
        const param = {page:e.target.id, search : { date : dateType, type : statusType, keyword : keyword}}
        noticeService.getAllNotice(noticeLayout.showList, param);
        console.log("페이지", e.target.innerText)

    }
})

noticeCategories.addEventListener('click',(e) =>{
    const dateType  = noticeDateCategories.value;
    const statusType = noticeCategories.value;
    const keyword = noticeKeywordInput.value;
    const param = {search : {date : dateType, type : statusType}}
    if(keyword){
        param.search.keyword = keyword;
    }
    noticeService.getAllNotice(noticeLayout.showList, param);
})


noticeDateCategories.addEventListener('click',(e) =>{
    // e.preventDefault();
    const dateType  = noticeDateCategories.value;
    const statusType = noticeCategories.value;
    const keyword = noticeKeywordInput.value;
    const param = {search : {date : dateType, type : statusType}}
    if(keyword){
        param.search.keyword = keyword;
    }
    noticeService.getAllNotice(noticeLayout.showList, param);
})


noticeKeywordInput.addEventListener("keyup",(e)=>{
    if(e.key === 'Enter'){
        const keyword = e.target.value;
        console.log(keyword)
        if(keyword){
            const dateType  = noticeDateCategories.value;
            const statusType = noticeCategories.value;
            const param = {search : {date : dateType, type : statusType, keyword : keyword}}
            noticeService.getAllNotice(noticeLayout.showList, param);
        }
    }
})


noticeWrapper.addEventListener('click',(e) =>{
    if(e.target.classList.contains("detail-btn")){
        console.log("클릭됨")
        noticeService.getDetail(noticeLayout.openNoticeDetail, e.target.value);
    }
})



document.addEventListener("input",(e) =>{
    if(e.target && e.target.matches(".noticeContent")) {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    }
})

document.addEventListener("input",(e) =>{
    if(e.target && e.target.matches("#notice-title textarea")) {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    }
})

const noticeWriteButton = document.querySelector(".write-button");
noticeWriteButton.addEventListener('click',()=>{
    console.log("작성버튼 클릭됨")
    noticeLayout.addNotice();
})