const programLayout = (() =>{
    const showList = async (programListData) =>{
        const tbodyProgram = document.querySelector(".announce-table tbody");
        const pageWrap = document.querySelector(".announce-pagination");
        const programModalWrap = document.querySelector("div.announce-modal div.modal-container")
        const programPagination = programListData.programPagination;
        console.log(programPagination);
        let text = ``;
        programListData.programs.forEach((program) => {
            let className = "";
            switch (program.programStatus){
                case "심사중" :
                    className = "pending";
                    break;
                case "보류" :
                    className = "hold";
                    break;
                case "승인" :
                    className = "approved";
                    break;
                default :
                    className = "rejected";
            }

            text += `
                <tr>
                  <td>${program.id}</td>
                  <td>${program.companyName}</td>
                  <td>${program.programName}</td>
                  <td>${program.createdDate}</td>
                  <td>${program.programEndDate}</td>
                  <td>
                      <span class="status ${className}">${program.programStatus}</span>
                  </td>
                  <td>
                      <button type="button" class="detail-btn" value="${program.id}">상세보기</button>                 
                  </td>
             </tr>
               `;
        })
        tbodyProgram.innerHTML = text;
        text=``;
        if(programPagination.prev) {
            text += `<button type="button" class="page-btn" id="${programPagination.startPage - 1}">이전</button>`
        }
        for(let i = programPagination.startPage; i<=programPagination.endPage; i++){
            if(programPagination.page === i){
                text += `<button type="button" class="page-btn active" id="${i}">${i}</button>`
                continue;
            }
            text += `<button type="button" class="page-btn" id="${i}">${i}</button>`
        }
        if(programPagination.next){
            text += `<button type="button" class="page-btn" id="${programPagination.endPage + 1}">다음</button>`
        }
        if(programPagination.check === 0){
            text="";
        }
        pageWrap.innerHTML = text;

    }

    const openProgramDetail = async (program) => {
        const modalContainer = document.querySelector("div.announce-modal div.modal-container");
        modalContainer.innerHTML = `
            <div class="modal-header">
                <h3>공고 상세정보</h3>
                <button type="button" class=" close-btn">
                    <img src="/images/admin/cross.png" class="close-button" alt="닫기" />
                </button>
            </div>

            <div class="modal-body">
                <div class="announce-info">
                    <h4>INFO</h4>
                    <table class="info-table">
                        <tbody>
                            <tr>
                                <th>공고 제목</th>
                                <td colspan="3" id="announce-title">${program.programName}</td>
                            </tr>
                            <tr>
                                <th>공고번호</th>
                                <td id="announce-id">${program.id}</td>
                                <th>기업명</th>
                                <td id="company-name">${program.companyName}</td>
                            </tr>
                            <tr>
                                <th>등록일</th>
                                <td id="register-date">${program.createdDate}</td>
                                <th>마감일</th>
                                <td id="deadline-date">${program.programEndDate}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="announce-content">
                    <h4>공고 상세내용</h4>
                    <select class="status-select content-select">
                        <option value="">카테고리 선택</option>
                        <option value="company-intro">기업 및 서비스 소개</option>
                        <option value="program-intro">프로그램 소개</option>
                        <option value="program-benefit">프로그램 혜택</option>
                    </select>
                    <div class="detail-content">
                        <!-- 선택된 카테고리의 내용이 표시될 영역 -->
                         <!-- 기업 소개 섹션 -->
                            <div
                                class="content-section company-intro-section"
                                style="display: none"
                            >
                                <p>${program.companyIntroduce}</p>
                            </div>

                            <!-- 프로그램 소개 섹션 -->
                            <div
                                class="content-section program-intro-section"
                                style="display: none"
                            >
                                <p>${program.programDetail}</p>
                            </div>

                            <!-- 프로그램 장점 섹션 -->
                            <div
                                class="content-section program-benefit-section"
                                style="display: none"
                            >
                                <p>${program.programBenefit}</p>
                            </div>
                    </div>
                </div>

                <div class="announce-image">
                    <h4>등록된 이미지</h4>
                    <div class="image-view">
                        <img src="${program.programThumbnailPath}" alt="공고 이미지" />        
                    </div>
                </div>

                <div class="status-selection">
                    <h4>처리 상태</h4>
                    <select class="status-select">
                        <option value="심사중">심사중</option>
                        <option value="보류">보류</option>
                        <option value="승인">승인</option>
                        <option value="반려">반려</option>
                    </select>
                </div>

                <div class="admin-memo">
                    <h4>관리자 메모</h4>
                    <textarea id="admin-memo" placeholder="처리 관련 메모를 입력하세요"></textarea>
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="close-button cancel-btn">취소</button>
                <button type="button" class="close-button save-btn" value="${program.id}">저장</button>
            </div>
        `;

        // 모달 표시
        openModal(document.querySelector(".announce-modal"));
    };

    return {showList : showList, openProgramDetail: openProgramDetail};
})();
