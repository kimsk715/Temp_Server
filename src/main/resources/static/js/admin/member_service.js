const memberService= (() => {
        //  상태 변경
    document.querySelector(".normal-member-modal").addEventListener("click", async (e) => {
        if (e.target.classList.contains("save-btn")) {
            let memberId = e.target.value;  // 버튼의 value 속성에서 memberId 가져옴
            const modalBody = e.target.closest('div').previousElementSibling;
            const selection = modalBody.querySelector(".status-selection .status-select");

            let memberStatus = selection.value;
            console.log(memberId)
            console.log(memberStatus)

            // memberId를 포함한 API 요청
            let savePath = `/admin/home/members?member-id=${memberId}&memberStatus=${memberStatus}`;

            try {
                const response = await fetch(savePath, {
                    method: "PATCH", // 필요에 따라 PUT도 사용 가능
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

    const getAllMember = async(callback, param ={}) =>{
        let page = param.page || 1;
        let search = param.search;
        let memberKeyword = "";
        let status = "";
        let date = 0;
        if(search){
            memberKeyword = search.memberKeyword;
            status = search.status;
            date = search.date;
        }
        let memberPath =`/admin/home/members?page=${page}`;
        if(status){
            memberPath += `&status=${status}`
        }
        if(date){
            memberPath += `&date=${date}`
        }
        if(memberKeyword){
            memberPath += `&memberKeyword=${memberKeyword}`
        }
        const response = await fetch(memberPath)
        const memberListData = await response.json();
        if(callback){
            callback(memberListData)
        }
    }

    const getDetail = async (callback, memberId) => {
        let path = `/admin/home/member?member-id=${memberId}`;
        const response = await fetch(path);
        const member = await response.json();
        if(callback){
            callback(member);
        }
    }
    return {getAllMember: getAllMember, getDetail : getDetail};
})();
