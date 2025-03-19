const noticeService= (() => {

    //  상태 변경용
    document.querySelector(".notice-modal").addEventListener("click", async (e) => {
        if (e.target.classList.contains("save-btn")) {
            let noticeId = e.target.value;  // 버튼의 value 속성에서 programId 가져옴
            const modalBody = e.target.closest('div').previousElementSibling;
            const noticeContent = document.querySelector(".noticeContent").value;
            const noticeTitle = document.querySelector("#notice-title textarea").value;
            let savePath = `/admin/home/notices?notice-id=${noticeId}`;
            if(noticeTitle){
                savePath += `&notice-title=${noticeTitle}`
            }
            if(noticeContent){
                savePath += `&notice-content=${noticeContent}`
            }
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
        // else if (e.target.classList.contains("write-btn")) {
        //      // 버튼의 value 속성에서 programId 가져옴
        //     const noticeContent = document.querySelector(".noticeContent").value;
        //     const noticeTitle = document.querySelector("#notice-title textarea").value;
        //     let savePath = `/admin/home/notices?notice-title=${noticeTitle}&notice-content=${noticeContent}`;
        //     if(noticeTitle == null || noticeContent == null){
        //         alert("제목 혹은 내용이 입력되지 않았습니다!")
        //         return;
        //     }
        //
        //     try {
        //         const response = await fetch(savePath, {
        //             method: "PUT",
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //         });
        //
        //         if (!response.ok) {
        //             throw new Error(`HTTP error! Status: ${response.status}`);
        //         }
        //
        //         const data = await response.json();
        //         console.log("받은 데이터:", data);
        //
        //         // 필요한 로직 추가 (예: 데이터 화면에 출력)
        //     } catch (error) {
        //         console.error("데이터 가져오기 오류:", error);
        //     }
        // }
    });




    const getAllNotice = async(callback, param ={}) =>{
        let page = param.page || 1;
        let search = param.search;
        let keyword = "";
        let type = "";
        let date = 0;
        if(search){
            keyword = search.keyword;
            type = search.type;
            date = search.date;
        }
        let path =`/admin/home/notices?page=${page}`;
        if(type){
            path += `&type=${type}`
        }
        if(date){
            path += `&date=${date}`
        }
        if(keyword){
            path += `&keyword=${keyword}`
        }
        const response = await fetch(path)
        const noticeListData = await response.json();
        if(callback){
            callback(noticeListData)
        }
    }

    const getDetail = async (callback, noticeId) => {
        let path = `/admin/home/notice?notice-id=${noticeId}`;
        const response = await fetch(path);
        const notice = await response.json();
        if(callback){
            callback(notice);
        }
    }
    return {getAllNotice: getAllNotice, getDetail: getDetail};
})();
