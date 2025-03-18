const inquiryService= (() => {
     document.querySelector(".normal-inquiry-modal").addEventListener("click", async (e) => {
        if (e.target.classList.contains("save-btn")) {
            let inquiryId = e.target.value;  // 버튼의 value 속성에서 programId 가져옴
            const modalBody = e.target.closest('div').previousElementSibling;
            const selection = modalBody.querySelector(".status-selection .status-select");
            const inquiryAnswer = document.getElementById("n-inquiry-admin-memo").value;
            let inquiryStatus = selection.value;
            let savePath = `/admin/home/member-inquiries?inquiry-id=${inquiryId}&inquiryStatus=${inquiryStatus}&inquiry-answer=${inquiryAnswer}`;

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

    const getAllInquiry = async(callback, param ={}) =>{
        let page = param.page || 1;
        let search = param.search;
        let normalInquiryKeyword = "";
        let status = "";
        let date = 0;
        if(search){
            normalInquiryKeyword = search.normalInquiryKeyword;
            status = search.status;
            date = search.date;
        }
        let path =`/admin/home/member-inquiries?page=${page}`;
        if(status){
            path += `&status=${status}`
        }
        if(date){
            path += `&date=${date}`
        }
        if(normalInquiryKeyword){
            path += `&normalInquiryKeyword=${normalInquiryKeyword}`
        }
        const response = await fetch(path)
        const inquiryListData = await response.json();
        if(callback){
            callback(inquiryListData)
        }
    }

    const getDetail = async (callback, inquiryId) => {
        let path = `/admin/home/member-inquiry?inquiry-id=${inquiryId}`;
        const response = await fetch(path);
        const inquiry = await response.json();
        if(callback){
            callback(inquiry);
        }
    }

    return {getAllInquiry: getAllInquiry, getDetail:getDetail};
})();

