const inquiryLayout = (() =>{
    const showList = async (inquiryListData) =>{
        const tbodyInquiry = document.querySelector(".normal-inquiry-table tbody");
        const pageWrap = document.querySelector(".normal-inquiry-pagination");
        const memberInquiryPagination = inquiryListData.memberInquiryPagination;
        let text = ``;
        inquiryListData.memberInquiryList.forEach((inquiry) => {
            let className = "";
            if(inquiry.memberInquiryStatus === "처리완료"){
                className = "completed";
            }
            else{
                className = "pending";
            }
            text += `
                <tr>
                  <td>${inquiry.id}</td>
                  <td>${inquiry.memberInquiryType}</td>
                  <td>${inquiry.memberName}</td>
                  <td>${inquiry.memberEmail}</td>
                  <td>${inquiry.createdDate}</td>   
                  <td>
                      <span class="status ${className}">${inquiry.memberInquiryStatus}</span>
                  </td>
                  <td>
                      <button type="button" class="detail-btn" value="${inquiry.id}">상세보기</button>                 
                  </td>
             </tr>
               `;
        })
        tbodyInquiry.innerHTML = text;
        text=``;
        if(memberInquiryPagination.prev) {
            text += `<button type="button" class="page-btn" id="${memberInquiryPagination.startPage - 1}">이전</button>`
        }
        for(let i = memberInquiryPagination.startPage; i<=memberInquiryPagination.endPage; i++){
            if(memberInquiryPagination.page === i){
                text += `<button type="button" class="page-btn active" id="${i}">${i}</button>`
                continue;
            }
            text += `<button type="button" class="page-btn" id="${i}">${i}</button>`
        }
        if(memberInquiryPagination.next){
            text += `<button type="button" class="page-btn" id="${memberInquiryPagination.endPage + 1}">다음</button>`
        }
        if(memberInquiryPagination.check === 0){
            text = "";
        }
        pageWrap.innerHTML = text;

    }
    const openInquiryDetail = async (inquiry) => {
        const modalContainer = document.querySelector("div.normal-inquiry-modal div.modal-container");
        // 모달 내용 업데이트
        modalContainer.innerHTML = ` <div class="modal-header">
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

                    <div class="normal-inquiry-info">
                        <h4>INFO</h4>
                        <table class="info-table">
                            <tbody>
                                <tr>
                                    <th>문의번호</th>
                                    <td id="normal-inquiry-id">${inquiry.id}</td>
                                    <th>문의일시</th>
                                    <td id="normal-inquiry-date">${inquiry.createdDate}</td>
                                </tr>
                                <tr>
                                    <th>문의자</th>
                                    <td id="normal-inquirer">${inquiry.memberName}</td>
                                    <th>이메일</th>
                                    <td id="normal-inquiry-email">
                                        ${inquiry.memberEmail}
                                    </td>
                                </tr>
                                <tr>
                                    <th>문의유형</th>
                                    <td colspan="3" id="normal-inquiry-type">
                                        ${inquiry.memberInquiryType}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- 문의 상세 내용 -->
                    <div class="normal-inquiry-detail">
                        <h4>문의 상세내용</h4>
                        <div class="detail-content" id="normal-inquiry-content">
                            ${inquiry.memberInquiryDetail}
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
                        <h4>답변 내역</h4>
                        <textarea
                            placeholder="답변할 내용을 입력하세요"
                            id="n-inquiry-admin-memo"
                        ></textarea>
                    </div>
                </div>

                <!-- 모달 푸터 -->
                <div class="modal-footer">
                    <button type="button" class="cancel-btn close-button">취소</button>
                    <button type="button" class="save-btn close-button" value="${inquiry.id}">저장</button>
                </div>
        `;

        // 모달 표시
        openModal(document.querySelector(".normal-inquiry-modal"));
    };
    return {showList : showList, openInquiryDetail:openInquiryDetail};
})();





