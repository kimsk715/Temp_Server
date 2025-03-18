const companyMemberPageWrap = document.querySelector(".company-member-pagination");
const companyMemberStatusCategories = document.querySelector(".company-member-status-filter");
const companyMemberDateCategories = document.querySelector(".company-member-date-filter")
const companyMemberKeywordInput = document.querySelector(".company-member-search.search-box input[name=companyKeyword]");

document.addEventListener('click', (e) =>{
    if(e.target.classList.contains("company-member-link")){
        companyMemberService.getAllCompanyMember(companyMemberLayout.showList);
    }
})



companyMemberPageWrap.addEventListener('click',(e) =>{
    if(e.target.className.includes("page-btn")){
        const dateType  = companyMemberDateCategories.value;
        const statusType = companyMemberStatusCategories.value;
        const keyword = companyMemberKeywordInput.value;
        const param = {page:e.target.id, search : {date : dateType, status : statusType, keyword : keyword}};
        companyMemberService.getAllCompanyMember(companyMemberLayout.showList, param);

    }
})

companyMemberStatusCategories.addEventListener('click',(e) =>{
        const dateType  = companyMemberDateCategories.value;
        const statusType = companyMemberStatusCategories.value;
        const keyword = companyMemberKeywordInput.value;
        if(keyword){
            param.search.keyword = keyword;
        }
        const param = {search : {date : dateType, status : statusType, keyword : keyword}}
    companyMemberService.getAllCompanyMember(companyMemberLayout.showList,param);
    })


companyMemberDateCategories.addEventListener('click',(e) =>{
        // e.preventDefault();
        const dateType  = companyMemberDateCategories.value;
        const statusType = companyMemberStatusCategories.value;
        const keyword = companyMemberKeywordInput.value;
        if(keyword){
            param.search.keyword = keyword;
        }
        const param = {search : {date : dateType, status : statusType, keyword : keyword}}
    companyMemberService.getAllCompanyMember(companyMemberLayout.showList,param);
    })


companyMemberKeywordInput.addEventListener("keyup",(e)=>{
    if(e.key === 'Enter'){
        const keyword = e.target.value;
        if(keyword){
            const dateType  = companyMemberDateCategories.value;
            const statusType = companyMemberStatusCategories.value;
            const param = {search : {date : dateType, status : statusType, keyword : keyword}}
            companyMemberService.getAllCompanyMember(companyMemberLayout.showList, param);
        }
    }
})
const companyMemberWrapper = document.querySelector(".company-member-management")
companyMemberWrapper.addEventListener('click',(e) =>{
    if(e.target.classList.contains("detail-btn")){
        companyMemberService.getDetail(companyMemberLayout.openCompanyMemberDetail, e.target.value);
    }

})


const companyMemberModalWrapper = document.querySelector(".company-member-modal")
companyMemberModalWrapper.addEventListener('click',(e)=>{
    const detailSelect = document.querySelector(".detail-select")
    const activitySelect = document.querySelector(".activity-select")
    switch (detailSelect.value){
        case "company-logo" :
            detailSelect.nextElementSibling.children[0].style.display = "block";
            detailSelect.nextElementSibling.children[1].style.display = "none";
            detailSelect.nextElementSibling.children[2].style.display = "none";
            detailSelect.nextElementSibling.children[3].style.display = "none";
            detailSelect.nextElementSibling.children[4].style.display = "none";
            break;
        case "business-certificate" :
            detailSelect.nextElementSibling.children[0].style.display = "none";
            detailSelect.nextElementSibling.children[1].style.display = "block";
            detailSelect.nextElementSibling.children[2].style.display = "none";
            detailSelect.nextElementSibling.children[3].style.display = "none";
            detailSelect.nextElementSibling.children[4].style.display = "none";
            break;
        case "company-intro" :
            detailSelect.nextElementSibling.children[0].style.display = "none";
            detailSelect.nextElementSibling.children[1].style.display = "none";
            detailSelect.nextElementSibling.children[2].style.display = "block";
            detailSelect.nextElementSibling.children[3].style.display = "none";
            detailSelect.nextElementSibling.children[4].style.display = "none";
            break;
        case "welfare" :
            detailSelect.nextElementSibling.children[0].style.display = "none";
            detailSelect.nextElementSibling.children[1].style.display = "none";
            detailSelect.nextElementSibling.children[2].style.display = "none";
            detailSelect.nextElementSibling.children[3].style.display = "block";
            detailSelect.nextElementSibling.children[4].style.display = "none";
            break;
        case "company-culture" :
            detailSelect.nextElementSibling.children[0].style.display = "none";
            detailSelect.nextElementSibling.children[1].style.display = "none";
            detailSelect.nextElementSibling.children[2].style.display = "none";
            detailSelect.nextElementSibling.children[3].style.display = "none";
            detailSelect.nextElementSibling.children[4].style.display = "block";
            break;
        default :
            detailSelect.nextElementSibling.children[0].style.display = "none";
            detailSelect.nextElementSibling.children[1].style.display = "none";
            detailSelect.nextElementSibling.children[2].style.display = "none";
            detailSelect.nextElementSibling.children[3].style.display = "none";
            detailSelect.nextElementSibling.children[4].style.display = "none";
    }

    switch(activitySelect.value){
        case "announcement-history":
            activitySelect.nextElementSibling.children[0].style.display = "block";
            activitySelect.nextElementSibling.children[1].style.display = "none";
            activitySelect.nextElementSibling.children[2].style.display = "none";
            break;
        case "program-history":
            activitySelect.nextElementSibling.children[0].style.display = "none";
            activitySelect.nextElementSibling.children[1].style.display = "block";
            activitySelect.nextElementSibling.children[2].style.display = "none";
            break;
        case "report-history":
            activitySelect.nextElementSibling.children[0].style.display = "none";
            activitySelect.nextElementSibling.children[1].style.display = "none";
            activitySelect.nextElementSibling.children[2].style.display = "block";
            break;
        default:
            activitySelect.nextElementSibling.children[0].style.display = "none";
            activitySelect.nextElementSibling.children[1].style.display = "none";
            activitySelect.nextElementSibling.children[2].style.display = "none";
    }

})

const updateProgramTable = (programList) => {
    const tbody = document.getElementById("detailPrograms");
    tbody.innerHTML = ""; // 기존 데이터 초기화

    programList.forEach(program => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${program.id}</td>
            <td>${program.programName}</td>
            <td>${program.createdDate}</td>
            <td>${program.programEndDate}</td>
            <td>${program.programStatus}</td>
            <td>${program.programExpired}</td>
        `;
        tbody.appendChild(tr);
    });
};

const updateInquiryTable = (inquiryList) => {
    const tbody = document.getElementById("companyInquiryList");
    tbody.innerHTML = ""; // 기존 데이터 초기화

    inquiryList.forEach(inquiry => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${inquiry.id}</td>
            <td>${inquiry.companyInquiryType}</td>
            <td>${inquiry.companyInquiryDetail}</td>
            <td>${inquiry.createdDate}</td>
            <td>${inquiry.companyInquiryStatus}</td>
        `;
        tbody.appendChild(tr);
    });
};