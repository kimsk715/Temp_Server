const companyInquiryService= (() => {
    document.querySelector(".company-inquiry-modal").addEventListener("click", async (e) => {
        if (e.target.classList.contains("save-btn")) {
            let companyInquiryId = e.target.value;  // 버튼의 value 속성에서 programId 가져옴
            const modalBody = e.target.closest('div').previousElementSibling;
            const selection = modalBody.querySelector(".status-selection .status-select");

            let companyInquiryStatus = selection.value;
            let companyInquiryAnswer = document.getElementById("c-inquiry-admin-memo").value;
            // programId를 포함한 API 요청
            let savePath = `/admin/home/company-inquiries?company-inquiry-id=${companyInquiryId}&companyInquiryStatus=${companyInquiryStatus}&company-inquiry-answer=${companyInquiryAnswer}`;

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
        closeModal(document.querySelector(".company-inquiry-modal"));
    });

    const getAllCompanyInquiry = async(callback, param ={}) =>{
        let page = param.page || 1;
        let search = param.search;
        let companyInquiryKeyword = "";
        let status = "";
        let date = 0;
        if(search){
            companyInquiryKeyword = search.companyInquiryKeyword;
            status = search.status;
            date = search.date;
        }
        let path =`/admin/home/company-inquiries?page=${page}`;
        if(status){
            path += `&status=${status}`
        }
        if(date){
            path += `&date=${date}`
        }
        if(companyInquiryKeyword){
            path += `&companyInquiryKeyword=${companyInquiryKeyword}`
        }
        const response = await fetch(path)
        const companyInquiryListData = await response.json();
        if(callback){
            callback(companyInquiryListData)
        }
    }
    const getDetail = async (callback, companyInquiryId) => {
        let path = `/admin/home/company-inquiry?company-inquiry-id=${companyInquiryId}`;
        const response = await fetch(path);
        const companyInquiry = await response.json();
        if(callback){
            callback(companyInquiry);
        }
    }

    return {getAllCompanyInquiry: getAllCompanyInquiry, getDetail:getDetail};
})();
