const noticeModalWrapper = document.querySelector(".notice-modal");
const noticeCategories = document.querySelector(".notice-status-filter");
const noticeDateCategories = document.querySelector(".notice-date-filter")
const noticeKeywordInput = document.querySelector("div.notice-filter div.search-box input[name=keyword]");
const noticeWrapper = document.querySelector(".notice-management");
document.addEventListener('click',(e) => {
    console.log(e.target);
})

document.addEventListener('click',(e)=>{
    if(e.target.classList.contains("notice-link")){
        console.log("클릭됨")
        noticeService.getAllNotice(noticeLayout.showList);
    }

})



pageWrap.addEventListener('click',(e) =>{
    if(e.target.className.includes("page-btn")){
        const dateType  = noticeDateCategories.value;
        const statusType = noticeCategories.value;
        const keyword = noticeKeywordInput.value;
        const param = {page:e.target.id, search : { date : dateType, type : statusType, keyword : keyword}}
        noticeService.getAllNotice(noticeLayout.showList, param);
        console.log("페이지", e.target.innerText)

    }
})

statusCategories.addEventListener('click',(e) =>{
        const dateType  = noticeDateCategories.value;
        const statusType = noticeCategories.value;
        const param = {search : {date : dateType, type : statusType}}
        const keyword = noticeKeywordInput.value;

        if(keyword){
            param.search.keyword = keyword;
        }
        noticeService.getAllNotice(noticeLayout.showList, param);
    })


dateCategories.addEventListener('click',(e) =>{
        // e.preventDefault();
        const dateType  = noticeDateCategories.value;
        const statusType = noticeCategories.value;
        const param = {search : {date : dateType, type : statusType}}
        const keyword = noticeKeywordInput.value;

        if(keyword){
            param.search.keyword = keyword;
        }
        noticeService.getAllNotice(noticeLayout.showList, param);
    })


keywordInput.addEventListener("keyup",(e)=>{
    if(e.key === 'Enter'){
        const keyword = e.target.value;
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
