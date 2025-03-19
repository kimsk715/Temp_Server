const inquiryPageWrap = document.querySelector(".normal-inquiry-pagination");
const inquiryStatusCategories = document.querySelector(".normal-inquiry-status-filter");
const inquiryDateCategories = document.querySelector(".normal-inquiry-date-filter")
const inquiryKeywordInput = document.querySelector("div.normal-inquiry-filter div.search-box input[name=normalInquiryKeyword]");
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains("personal-inquiry-link")){
        inquiryService.getAllInquiry(inquiryLayout.showList);
    }

})

inquiryPageWrap.addEventListener('click',(e) => {
    if (e.target.className.includes("page-btn")) {
        const dateType = inquiryDateCategories.value;
        const statusType = inquiryStatusCategories.value;
        const normalInquiryKeyword = inquiryKeywordInput.value;
        const param = {
            page: e.target.id,
            search: {date: dateType, status: statusType, normalInquiryKeyword: normalInquiryKeyword}
        }

        inquiryService.getAllInquiry(inquiryLayout.showList, param);
    }
})


inquiryStatusCategories.addEventListener('click',(e) =>{
        const dateType  = inquiryDateCategories.value;
        const statusType = inquiryStatusCategories.value;
        const param = {search : {date : dateType, status : statusType}}
        const normalInquiryKeyword = inquiryKeywordInput.value;

        if(normalInquiryKeyword){
            param.search.normalInquiryKeyword = normalInquiryKeyword;
        }
        inquiryService.getAllInquiry(inquiryLayout.showList, param);
    })


inquiryDateCategories.addEventListener('click',(e) =>{
        // e.preventDefault();
        const dateType  = inquiryDateCategories.value;
        const statusType = inquiryStatusCategories.value;
        const param = {search : {date : dateType, status : statusType}}
        const normalInquiryKeyword = inquiryKeywordInput.value;

        if(normalInquiryKeyword){
            param.search.normalInquiryKeyword = normalInquiryKeyword;
        }
        inquiryService.getAllInquiry(inquiryLayout.showList, param);
    })


inquiryKeywordInput.addEventListener("keyup",(e)=>{
    if(e.key === 'Enter'){
        const normalInquiryKeyword = e.target.value;
        if(normalInquiryKeyword){
            const dateType  = inquiryDateCategories.value;
            const statusType = inquiryStatusCategories.value;
            const param = {search : {date : dateType, status : statusType, normalInquiryKeyword : normalInquiryKeyword}}
            inquiryService.getAllInquiry(inquiryLayout.showList, param);
        }
    }
})

const memberInquiryWrapper = document.querySelector(".personal-inquiry-management")

memberInquiryWrapper.addEventListener('click', (e) =>{
    if(e.target.classList.contains("detail-btn")){
        inquiryService.getDetail(inquiryLayout.openInquiryDetail, e.target.value);
    }
})


