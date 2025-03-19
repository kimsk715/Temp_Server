// 기간 필터의 기본값을 강제로 전체로 설정
window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".report-date-filter").value = "all";
});

const reportLayout = (() => {
    const showList = async (reportListData) => {
        // js로 생성된 내용을 넣을 테이블의 바디
        const reportTbody = document.querySelector("#report-table tbody");
        // 페이지네이션을 감싸는 div
        const reportPageWrap = document.querySelector(".report-pagination");
        // 신고목록 데이터에 있는 페이지네이션 정보
        const pagination = reportListData.pagination;

        let text = ``;
        // 신고개수만큼 반복해서 테이블의 행 생성
        reportListData.reports.forEach((report) => {
            const statusClass = getStatusClass(report.reportStatus); // 상태에 따른 클래스 설정
            const formattedDate = formatDate(report.createdDate); // 날짜 포매팅(시간 제거)

            text += `
                <tr>
                     <td>${report.id}</td>
                     <td>${report.reportType}</td>
                     <td>${report.reportSubject}</td>
                     <td>${report.memberName}</td>
                     <td>${formattedDate}</td>
                     <td>
                          <span class="status ${statusClass}">${report.reportStatus}</span>
                     </td>
                     <td>
                         <button type="button" class="detail-btn" id="${report.id}">상세보기</button>
                     </td>
                </tr>
            `;
        })

        reportTbody.innerHTML = text;

        text = ``;

        // 페이지 수에 맞게 페이지네이션 버튼을 생성
        // 이전버튼(첫 페이지가 아닐때만 뜸)
        if(pagination.prev){
            text += `<button id="${pagination.startPage - 1}" class="page-btn prev">이전</button>`
        }
        // 페이지 수만큼 반복되어 만들어지는 페이지 버튼(id로 누를 때 이동할 페이지를 알려줌)
        for(let i=pagination.startPage; i<=pagination.endPage; i++){
            if(pagination.page === i){
                text += `<button id="${i}" class="page-btn active">${i}</button>`
                continue;
            }
            text += `<button id="${i}" class="page-btn">${i}</button>`
        }
        // 다음버튼(마지막 페이지가 아닐때만 뜸)
        if(pagination.next){
            text += `<button id="${pagination.endPage + 1}" class="page-btn next">다음</button>`
        }
        reportPageWrap.innerHTML = text;
    }

    // 상태별 span의 클래스 변경(스타일이 다름)
    const getStatusClass = (status) => {
        switch (status){
            case "처리중":
                return "pending";
            case "보류":
                return "hold";
            case "허위신고":
                return "false";
            case "처리완료":
                return "completed";
        }
    };

    // 신고날짜에서 시간을 빼고 0000-00-00 형식으로 출력
    const formatDate = (dateString) => {
        const date = new Date(dateString); // 문자열을 Date 객체로 변환
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
        const day = String(date.getDate()).padStart(2, '0'); // 날짜를 두 자릿수로 만듬
        return `${year}-${month}-${day}`; // 'YYYY-MM-DD' 형식으로 반환
    }


    return {showList : showList};
})();


