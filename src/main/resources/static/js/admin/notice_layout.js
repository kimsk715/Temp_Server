const noticeLayout = (() =>{
    const showList = async (noticeListData) =>{
        const tbody = document.querySelector("#noticeList");
        const pageWrap = document.querySelector(".notice-pagination");
        const programModalWrap = document.querySelector("div.notice-modal div.modal-container")
        const noticePagination = noticeListData.noticePagination;

        let text = ``;
        noticeListData.noticeList.forEach((notice) => {
            text += `
                <tr>
                  <td>${notice.id}</td>
                  <td>${notice.noticeTitle}</td>
                  <td>${notice.noticeCategory}</td>
                  <td>${notice.createdDate}</td>
                  <td>${notice.updatedDate}</td>
                  <td>
                      <button type="button" class="detail-btn" value="${notice.id}">상세보기</button>                 
                  </td>
             </tr>
               `;
        })
        tbody.innerHTML = text;
        text="";
        if(noticePagination.prev) {
            text += `<button type="button" class="page-btn" id="${noticePagination.startPage - 1}">이전</button>`
        }
        for(let i = noticePagination.startPage; i<=noticePagination.endPage; i++){
            if(noticePagination.page === i){
                text += `<button type="button" class="page-btn active" id="${i}">${i}</button>`
                continue;
            }
            text += `<button type="button" class="page-btn" id="${i}">${i}</button>`
        }
        if(noticePagination.next){
            text += `<button type="button" class="page-btn" id="${noticePagination.endPage + 1}">다음</button>`
        }
        if(noticePagination.check === 0){
            text="";
        }
        pageWrap.innerHTML = text;

    }

    const openNoticeDetail = async (notice) => {
        const modalContainer = document.querySelector("div.notice-modal div.modal-container");
        modalContainer.innerHTML = `
            <div class="modal-header">
                <h3>공지 상세정보</h3>
                <button type="button" class=" close-btn">
                    <img src="/images/admin/cross.png" class="close-button" alt="닫기" />
                </button>
            </div>

            <div class="modal-body">
                <div class="notice-info">
                    <h4>INFO</h4>
                    <table class="info-table">
                        <tbody>
                            <tr>
                                <th>공지 제목</th>
                                <td colspan="3" id="notice-title">
                                        <textarea>
                                        ${notice.noticeTitle}
                                        </textarea>
                                </td>
                            </tr>
                            <tr>
                                <th>공지번호</th>
                                <td id="notice-id">${notice.id}</td>
                                <th>공지유형</th>
                                <td>
                                <select id="notice-type">
                                <option value="공지사항">공지사항</option>
                                <option value="이벤트">이벤트</option>
                                </select>
                                </td>
                            </tr>
                            <tr>
                                <th>등록일</th>
                                <td id="register-date">${notice.createdDate}</td>
                                <th>최근수정일</th>
                                <td id="deadline-date">${notice.updatedDate}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="notice-content">
                    <h4>공지내용</h4>
                    <div class="detail-content"> 
                            <div class="content-section notice-content-section">
                                <textarea class="noticeContent">${notice.noticeContent}</textarea>
                            </div>
                    </div>
                </div>

                <div class="announce-image">
                    <h4>등록된 이미지</h4>
                    <div class="image-view">
                        <img src="" alt="공고 이미지" />        
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="close-button cancel-btn">취소</button>
                <button type="button" class="close-button save-btn" value="${notice.id}">저장</button>
            </div>
        `;

        // 모달 표시

        openModal(document.querySelector(".notice-modal"));
    };

    // 공지 작성용 모달창
    const addNotice = async()  => {
        const modalContainer = document.querySelector("div.notice-modal div.modal-container");
        modalContainer.innerHTML = `
        <div class="modal-header">
                <h3>공지 작성</h3>
                <button type="button" class=" close-btn">
                    <img src="/images/admin/cross.png" class="close-button" alt="닫기" />
                </button>
            </div>

            <div class="modal-body">
                <div class="notice-info">
                    <h4>INFO</h4>
                    <table class="info-table">
                        <tbody>
                            <tr>
                                <th>공지 제목</th>
                                <td colspan="3" >
                                        <textarea id="notice-title">
                                        </textarea>
                                </td>
                            </tr>
                            <tr>
                                <th>공지유형</th>
                                <td id="notice-type">
                                <select id="noticeType">
                                <option value="공지사항">공지사항</option>
                                <option value="이벤트">이벤트</option>
                                </select>
                                </td>
                            </tr>
                        
                        </tbody>
                    </table>
                </div>
                
                <div class="notice-content">
                    <h4>공지내용</h4>
                    <div class="detail-content"> 
                            <div class="content-section notice-content-section">
                                <textarea id="noticeContent"></textarea>
                            </div>
                    </div>
                </div>

                <div class="announce-image">
                    <h4>등록된 이미지</h4>
                    <div class="image-view">
                        <img src="" alt="공고 이미지" />        
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="close-button cancel-btn">취소</button>
                <button type="button" class="close-button confirm-btn">저장</button>
            </div>`;
        openModal(document.querySelector(".notice-modal"));
    }



    return {showList : showList, openNoticeDetail: openNoticeDetail, addNotice : addNotice};
})();
