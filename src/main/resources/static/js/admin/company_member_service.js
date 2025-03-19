const companyMemberService= (() => {
    document.querySelector(".company-member-modal").addEventListener("click", async (e) => {
        if (e.target.classList.contains("save-btn")) {
            let companyMemberId = e.target.value;  // 버튼의 value 속성에서 programId 가져옴
            const modalBody = e.target.closest('div').previousElementSibling;
            const selection = modalBody.querySelector(".status-selection .status-select");

            let companyMemberStatus = selection.value;

            // programId를 포함한 API 요청
            let savePath = `/admin/home/company-members?company-member-id=${companyMemberId}&companyMemberStatus=${companyMemberStatus}`;

            try {
                const response = await fetch(savePath, {
                    method: "PATCH", // 필요에 따라 "POST"로 변경
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                console.log("받은 데이터:", data);

                // 필요한 로직 추가 (예: 데이터 화면에 출력)
            } catch (error) {
                console.error("데이터 가져오기 오류:", error);
            }
        }
    });

    const getAllCompanyMember = async(callback, param ={}) =>{
        let page = param.page || 1;
        let search = param.search;
        let keyword = "";
        let status = "";
        let date = 0;
        if(search){
            keyword = search.keyword;
            status = search.status;
            date = search.date;
        }
        let companyMemberPath =`/admin/home/company-members?page=${page}`;
        if(status){
            companyMemberPath += `&status=${status}`
        }
        if(date){
            companyMemberPath += `&date=${date}`
        }
        if(keyword){
            companyMemberPath += `&keyword=${keyword}`
        }
        const response = await fetch(companyMemberPath)
        // console.log(response);
        const companyMemberListData = await response.json();
        // console.log(memberListData)
        if(callback){
            callback(companyMemberListData)
        }
    }
    const getDetail = async (callback, companyMemberId) => {
        let path = `/admin/home/company-member?company-member-id=${companyMemberId}`;
        const response = await fetch(path);
        const companyMember = await response.json();
        if(callback){
            callback(companyMember);
        }
    }
    return {getAllCompanyMember: getAllCompanyMember, getDetail:getDetail};
})();
