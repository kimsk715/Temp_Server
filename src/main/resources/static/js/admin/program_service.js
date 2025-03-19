const programService= (() => {

    //  상태 변경용
    document.querySelector(".announce-modal").addEventListener("click", async (e) => {
        if (e.target.classList.contains("save-btn")) {
            let programId = e.target.value;  // 버튼의 value 속성에서 programId 가져옴
            const modalBody = e.target.closest('div').previousElementSibling;
            const selection = modalBody.querySelector(".status-selection .status-select");

            let programStatus = selection.value;


            let savePath = `/admin/home/programs?program-id=${programId}&program-status=${programStatus}`;

            try {
                const response = await fetch(savePath, {
                    method: "PATCH",
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

    const getAllProgram = async(callback, param ={}) =>{
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
        let path =`/admin/home/programs?page=${page}`;
        if(status){
            path += `&status=${status}`
        }
        if(date){
            path += `&date=${date}`
        }
        if(keyword){
            path += `&keyword=${keyword}`
        }
        const response = await fetch(path)
        const programListData = await response.json();
        if(callback){
            callback(programListData)
        }
    }

    const getDetail = async (callback, programId) => {
        let path = `/admin/home/program?program-id=${programId}`;
        const response = await fetch(path);
        const program = await response.json();
        if(callback){
            callback(program);
        }
    }
    return {getAllProgram: getAllProgram, getDetail: getDetail};
})();
