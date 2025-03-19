const memberPageWrap = document.querySelector(".normal-member-pagination");
const memberStatusCategories = document.querySelector(".member-status-filter");
const memberDateCategories = document.querySelector(".member-date-filter")
const memberKeywordInput = document.querySelector("div.normal-member-search-filter-container div.search-box input[name=memberKeyword]");

document.addEventListener('click', (e) =>{
    if(e.target.classList.contains("normal-member-link")){
        memberService.getAllMember(memberLayout.showList);
    }
})



memberPageWrap.addEventListener('click',(e) =>{
    if(e.target.className.includes("page-btn")){
        const dateType  = memberDateCategories.value;
        const statusType = memberStatusCategories.value;
        const memberKeyword = memberKeywordInput.value;
        const param = {page:e.target.id, search : { date : dateType, status : statusType, memberKeyword : memberKeyword}}
        memberService.getAllMember(memberLayout.showList, param);
    }
})

memberStatusCategories.addEventListener('click',(e) =>{
    const dateType  = memberDateCategories.value;
    const statusType = memberStatusCategories.value;
    const param = {search : {date : dateType, status : statusType}}
    const memberKeyword = memberKeywordInput.value;

        if(memberKeyword){
            param.search.memberKeyword = memberKeyword;
        }
    memberService.getAllMember(memberLayout.showList,param);
    })


memberDateCategories.addEventListener('click',(e) =>{
        const dateType  = memberDateCategories.value;
        const statusType = memberStatusCategories.value;
        const param = {search : {date : dateType, status : statusType}}
        const memberKeyword = memberKeywordInput.value;

        if(memberKeyword){
            param.search.memberKeyword = memberKeyword;
        }
    memberService.getAllMember(memberLayout.showList,param);
    })


memberKeywordInput.addEventListener("keyup",(e)=>{
    if(e.key === 'Enter'){
        console.log(e.target.value)
        const memberKeyword = e.target.value;

        if(memberKeyword){
            const dateType  = memberDateCategories.value;
            const statusType = memberStatusCategories.value;
            const param = {search : {date : dateType, status : statusType, memberKeyword : memberKeyword}}
            memberService.getAllMember(memberLayout.showList, param);
        }
    }
})
const memberWrapper = document.querySelector(".normal-member-management")
memberWrapper.addEventListener('click',(e) =>{
    if(e.target.classList.contains("detail-btn")){
        memberService.getDetail(memberLayout.openMemberDetail, e.target.value);

    }
})

const memberModalWrapper = document.querySelector(".normal-member-modal");

memberModalWrapper.addEventListener("click",(e)=>{
    const statusSelect = memberModalWrapper.querySelector(".status-select")
    if(statusSelect.value === "profile-image"){
        statusSelect.nextElementSibling.children[0].style.display = "block";
        statusSelect.nextElementSibling.children[1].style.display = "none";
    }
    else if(statusSelect.value === "self-intro"){
        statusSelect.nextElementSibling.children[0].style.display = "none";
        statusSelect.nextElementSibling.children[1].style.display = "block";
    }
    else{
        statusSelect.nextElementSibling.children[0].style.display = "none";
        statusSelect.nextElementSibling.children[1].style.display = "none";
    }

    const activitySelect = memberModalWrapper.querySelector(".activity-select")
    console.log(e.target)
    if(activitySelect.value === "application-history"){
        console.log("클릭 확인")
        activitySelect.nextElementSibling.children[0].style.display = "block";
        activitySelect.nextElementSibling.children[1].style.display = "none";
    }
    else if(activitySelect.value === "report-history"){
        activitySelect.nextElementSibling.children[0].style.display = "none";
        activitySelect.nextElementSibling.children[1].style.display = "block";
    }
    else{
        activitySelect.nextElementSibling.children[0].style.display = "none";
        activitySelect.nextElementSibling.children[1].style.display = "none";
    }
})



const updateResumeTable = (resumeList) => {
    const tbody = document.getElementById("memberResume");
    tbody.innerHTML = ""; // 기존 데이터 초기화

    resumeList.forEach(resume => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${resume.id}</td>
            <td>${resume.resumeTitle}</td>
            <td>${resume.resumeIntroduce}</td>
        `;
        tbody.appendChild(tr);
    });
};

const updateApplyTable = (ApplyList) =>{
    const applyTbody = document.getElementById("activity-table");
    applyTbody.innerHTML = "";

    ApplyList.forEach(apply =>{
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${apply.id}</td>
            <td>${apply.programName}</td>
            <td>${apply.companyName}</td>
            <td>${apply.applyMemberStatus}</td>
            <td>${apply.createdDate}</td>
            `;
        applyTbody.appendChild(tr);
    })
};

const updateReportList = (reportList) => {
    const tbody = document.getElementById("activity-table");
    tbody.innerHTML = "";

    reportList.forEach(report =>{
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${report.id}</td>
            <td>${report.memberName}</td>
            <td>${report.reportType}</td>
            <td>${report.reportSubject}</td>
            <td>${report.createdDate}</td>
            <td>${report.reportStatus}</td>
            `;
        tbody.appendChild(tr);
    })
}
