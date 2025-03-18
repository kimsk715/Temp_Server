const memberLayout = (() =>{
    const showList = async (memberListData) =>{
        const tbodyMember = document.querySelector(".normal-member-table tbody");
        const memberPageWrap = document.querySelector(".normal-member-pagination");
        const memberPagination = memberListData.memberPagination;
        let memberText = ``;
        memberListData.memberList.forEach((member) => {
            let className = "";
            switch (member.memberStatus){
                case "활성" :
                    className = "active";
                    break;
                case "휴면" :
                    className = "dormant";
                    break;
                case "정지" :
                    className = "suspended";
                    break;
                default :
                    className = "withdrawn";
            }
            memberText += `
                <tr>
                  <td>${member.id}</td>
                  <td>${member.memberName}</td>
                  <td>${member.memberEmail}</td>
                  <td>${member.createdDate}</td>
                  <td>${member.memberRecentLogin}</td>
                  <td>
                      <span class="status ${className}">${member.memberStatus}</span>
                  </td>
                  <td>
                      <button type="button" class="detail-btn" value="${member.id}">상세보기</button>                 
                  </td>
             </tr>
               `;
        })
        tbodyMember.innerHTML = memberText;

        memberText=``;

        if(memberPagination.prev) {
            memberText += `<button type="button" class="page-btn" id="${memberPagination.startPage - 1}">이전</button>`
        }
        for(let i = memberPagination.startPage; i<=memberPagination.endPage; i++){
            if(memberPagination.page === i){
                memberText += `<button type="button" class="page-btn active" id="${i}">${i}</button>`
                continue;
            }
            memberText += `<button type="button" class="page-btn" id="${i}">${i}</button>`
        }
        if(memberPagination.next){
            memberText += `<button type="button" class="page-btn" id="${memberPagination.endPage + 1}">다음</button>`
        }
        memberPageWrap.innerHTML = memberText;
        console.log(memberPagination);
    }
    const openMemberDetail = async (member) => {
        const modalContainer = document.querySelector("div.normal-member-modal div.modal-container");

        modalContainer.innerHTML = `
                <div class="modal-header">
                    <h3>일반회원 상세정보</h3>
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
                    <!-- 기본 정보 섹션 -->
                    <div class="member-info">
                        <h4>INFO</h4>
                        <table class="info-table">
                            <tbody>
                                <tr>
                                    <th>회원번호</th>
                                    <td id="member-id">${member.id}</td>
                                    <th>이름</th>
                                    <td id="member-name">${member.memberName}</td>
                                </tr>
                                <tr>
                                    <th>이메일</th>
                                    <td id="member-email">
                                        ${member.memberEmail}
                                    </td>
                                    <th>연락처</th>
                                    <td id="member-phone">${member.memberPhone}</td>
                                </tr>
                                <tr>
                                    <th>가입일</th>
                                    <td id="join-date">${member.createdDate}</td>
                                    <th>최근접속일</th>
                                    <td id="last-access">${member.memberRecentLogin}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- 상세 내용 섹션 -->
                    <div class="member-detail">
                        <h4>회원 상세내용</h4>
                        <select class="status-select detail-select">
                            <option value="">카테고리 선택</option>
                            <option value="profile-image">대표 이미지</option>
                            <option value="self-intro">자기소개서</option>
                        </select>
                        <!-- 상세 내용 표시 영역 -->
                        <div class="detail-content">
                            <!-- 대표 이미지 섹션 -->
                            <div
                                class="content-section profile-image-section"
                                style="display: none"
                            >
                                <div class="profile-image-view">
                                    <img
                                        src="${member.memberProfilePath}"
                                        alt="프로필 이미지"
                                    />
                                </div>
                            </div>                     
                            <!-- 자기소개서 섹션 -->
                            <div
                                class="content-section self-intro-section"
                                style="display: none"
                            >
                                <table>
                                    <thead>
                                        <tr>
                                            <th>번호</th>
                                            <th>제목</th>
                                            <th>내용</th>
                                        </tr>
                                    </thead>
                                    <tbody id="memberResume">
                                    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <!-- 활동 내역 섹션 -->
                    <div class="member-activity">
                        <h4>활동 내역</h4>
                        <select class="status-select activity-select">
                            <option value="">카테고리 선택</option>
                            <option value="application-history">
                                지원이력
                            </option>
                            <option value="report-history">신고내역</option>
                        </select>
                        <!-- 활동 내역 표시 영역 -->
                        <div class="activity-content">
                            <!-- 지원이력 섹션 -->
                            <div
                                class="content-section application-history-section"
                                style="display: none"
                            >
                                <table >
                                    <thead>
                                        <tr>
                                            <th>지원번호</th>
                                            <th>프로그램명</th>
                                            <th>기업명</th>
                                            <th>지원상태</th>
                                            <th>지원일</th>
                                        </tr>
                                    </thead>
                                    <tbody id="activity-table">
                                        
                                        <!-- 추가 데이터는 서버에서 받아와 동적으로 추가 예정 -->
                                    </tbody>
                                </table>
                            </div>

                            <!-- 신고내역 섹션 -->
                            <div
                                class="content-section report-history-section"
                                style="display: none"
                            >
                                <table >
                                    <thead>
                                        <tr>
                                            <th>신고번호</th>
                                            <th>신고자</th>
                                            <th>신고유형</th>
                                            <th>신고대상</th>
                                            <th>신고일</th>
                                            <th>처리상태</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody id="activity-table">
                                        
                                        <!-- 추가 데이터는 서버에서 받아와 동적으로 추가 예정 -->
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <!-- 회원 상태 변경 섹션 -->
                    <div class="status-selection">
                        <h4>회원 상태</h4>
                        <select class="status-select">
                            <option value="활성">활성</option>
                            <option value="휴면">휴면</option>
                            <option value="정지">정지</option>
                            <option value="탈퇴">탈퇴</option>
                        </select>
                    </div>

                    <!-- 관리자 메모 -->
                    <div class="admin-memo">
                        <h4>관리자 메모</h4>
                        <textarea
                            placeholder="처리 관련 메모를 입력하세요"
                            id="admin-memo"
                        ></textarea>
                    </div>
                </div>

                <!-- 모달 푸터 -->
                <div class="modal-footer">
                    <button type="button" class="cancel-btn close-button">취소</button>
                    <button type="button" class="save-btn close-button" value="${member.id}">저장</button>
                </div>`;

        updateResumeTable(member.resumeList);
        updateApplyTable(member.applyDTOList);
        updateReportList(member.reportDTOList);
        openModal(document.querySelector(".normal-member-modal"));
    }

    return {showList : showList, openMemberDetail : openMemberDetail};
})();




