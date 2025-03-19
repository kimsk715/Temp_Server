const companyInquiryLayout = (() =>{
    const showList = async (companyInquiryListData) =>{
        const tbodyInquiry = document.querySelector(".company-inquiry-table tbody");
        const pageWrap = document.querySelector(".company-inquiry-pagination");
        const companyInquiryPagination = companyInquiryListData.companyInquiryPagination;
        let text = ``;
        companyInquiryListData.companyInquiryList.forEach((companyInquiry) => {
            let className = "";
            if(companyInquiry.companyInquiryStatus === "처리완료"){
                className = "completed";
            }
            else{
                className = "pending";
            }
            text += `
                <tr>
                  <td>${companyInquiry.id}</td>
                  <td>${companyInquiry.companyInquiryType}</td>
                  <td>${companyInquiry.companyName}</td>
                  <td>${companyInquiry.memberName}</td>
                  <td>${companyInquiry.createdDate}</td>   
                  <td>
                      <span class="status ${className}">${companyInquiry.companyInquiryStatus}</span>
                  </td>
                  <td>
                      <button type="button" class="detail-btn" value="${companyInquiry.id}">상세보기</button>                 
                  </td>
             </tr>
               `;
        })

        tbodyInquiry.innerHTML = text;
        text=``;
        if(companyInquiryPagination.prev) {
            text += `<button type="button" class="page-btn" id="${companyInquiryPagination.startPage - 1}">이전</button>`
        }
        for(let i = companyInquiryPagination.startPage; i<=companyInquiryPagination.endPage; i++){
            if(companyInquiryPagination.page === i){
                text += `<button type="button" class="page-btn active" id="${i}">${i}</button>`
                continue;
            }
            text += `<button type="button" class="page-btn" id="${i}">${i}</button>`
        }
        if(companyInquiryPagination.next){
            text += `<button type="button" class="page-btn" id="${companyInquiryPagination.endPage + 1}">다음</button>`
        }
        if(companyInquiryPagination.check === 0){
            text = "";
        }
        pageWrap.innerHTML = text;

    }
    const openCompanyInquiryDetail = async (companyInquiry) => {
        const modalContainer = document.querySelector("div.company-inquiry-modal div.modal-container");
        // 모달 내용 업데이트
        modalContainer.innerHTML = `
            <!-- 모달 헤더 -->
                <div class="modal-header">
                    <h3>문의 상세정보</h3>
                    <button type="button" class="close-btn">
                        <img
                            class="close-button"
                            src="/images/admin/cross.png"
                            alt="닫기"
                        />
                    </button>
                </div>

                <!-- 모달 본문 -->
                <div class="modal-body">
                    <!-- 문의 기본 정보 -->

                    <div class="company-inquiry-info">
                        <h4>INFO</h4>
                        <table class="info-table">
                            <tbody>
                                <tr>
                                    <th>문의번호</th>
                                    <td id="company-inquiry-id">${companyInquiry.id}</td>
                                    <th>문의일시</th>
                                    <td id="company-inquiry-date">
                                        ${companyInquiry.createdDate}
                                    </td>
                                </tr>
                                <tr>
                                    <th>기업명</th>
                                    <td id="company-name">${companyInquiry.companyName}</td>
                                    <th>담당자</th>
                                    <td id="company-inquirer">${companyInquiry.memberName}</td>
                                </tr>
                                <tr>
                                    <th>문의유형</th>
                                    <td colspan="3" id="company-inquiry-type">
                                        ${companyInquiry.companyInquiryType}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- 문의 상세 내용 -->
                    <div class="company-inquiry-detail">
                        <h4>문의 상세내용</h4>
                        <div
                            class="detail-content"
                            id="company-inquiry-content"
                        >
                          ${companyInquiry.companyInquiryDetail}
                        </div>
                    </div>

                    <!-- 처리 상태 선택 -->
                    <div class="status-selection">
                        <h4>처리 상태</h4>
                        <select class="status-select">
                            <option value="처리대기">처리대기</option>
                            <option value="처리완료">처리완료</option>
                        </select>
                    </div>

                    <!-- 관리자 메모 -->
                    <div class="admin-memo">
                        <h4>관리자 메모</h4>
                        <textarea
                            placeholder="처리 관련 메모를 입력하세요"
                            id="c-inquiry-admin-memo"
                        ></textarea>
                    </div>
                </div>

                <!-- 모달 푸터 -->
                <div class="modal-footer">
                    <button type="button" class="cancel-btn close-button">취소</button>
                    <button type="button" class="save-btn close-button" value="${companyInquiry.id}">저장</button>
                </div>
        `;

        // 모달 표시
        openModal(document.querySelector(".company-inquiry-modal"));
    };
    return {showList : showList, openCompanyInquiryDetail:openCompanyInquiryDetail};
})();






