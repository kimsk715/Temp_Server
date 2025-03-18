const companyMemberLayout = (() =>{
    const showList = async (companyMemberListData) =>{
        const tbodyCompanyMember = document.querySelector(".company-member-table tbody");
        const companyMemberPageWrap = document.querySelector(".company-member-pagination");
        const companyMemberPagination = companyMemberListData.companyMemberPagination;
        let companyMemberText = ``;
        companyMemberListData.companyMemberList.forEach((companyMember) => {
            let className = "";
            switch (companyMember.memberStatus){
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

            companyMemberText += `
                <tr>
                  <td>${companyMember.id}</td>
                  <td>${companyMember.companyName}</td>
                  <td>${companyMember.companyBusinessNumber}</td>
                  <td>${companyMember.memberName}</td>
                  <td>${companyMember.memberEmail}</td>
                  <td>${companyMember.createdDate}</td>
                  <td>${companyMember.memberRecentLogin}</td>
                  <td>
                      <span class="status ${className}">${companyMember.memberStatus}</span>
                  </td>
                  <td>
                      <button type="button" class="detail-btn" value="${companyMember.id}">상세보기</button>                 
                  </td>
             </tr>
               `;
        })
        tbodyCompanyMember.innerHTML = companyMemberText;

        companyMemberText=``;

        if(companyMemberPagination.prev) {
            companyMemberText += `<button type="button" class="page-btn" id="${companyMemberPagination.startPage - 1}">이전</button>`
        }
        for(let i = companyMemberPagination.startPage; i<=companyMemberPagination.endPage; i++){
            if(companyMemberPagination.page === i){
                companyMemberText += `<button type="button" class="page-btn active" id="${i}">${i}</button>`
                continue;
            }
            companyMemberText += `<button type="button" class="page-btn" id="${i}">${i}</button>`
        }
        if(companyMemberPagination.next){
            companyMemberText += `<button type="button" class="page-btn" id="${companyMemberPagination.endPage + 1}">다음</button>`
        }
        if(companyMemberPagination.check === 0){
            companyMemberText = "";
        }
        companyMemberPageWrap.innerHTML = companyMemberText;

    }
    const openCompanyMemberDetail = async (companyMember) => {
        const modalContainer = document.querySelector("div.company-member-modal div.modal-container");
        modalContainer.innerHTML = `
                <!-- 모달 헤더 -->
                <div class="modal-header">
                    <h3>기업회원 상세정보</h3>
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
                        <h4>INFO </h4>
                        <table class="info-table">
                            <tbody>
                                <tr>
                                    <th>회원번호</th>
                                    <td id="company-member-id">${companyMember.id}</td>
                                    <th>기업명</th>
                                    <td id="member-company-name">${companyMember.companyName}</td>
                                </tr>
                                <tr>
                                    <th>사업자등록번호</th>
                                    <td id="business-number">${companyMember.companyBusinessNumber}</td>
                                    <th>대표자명</th>
                                    <td id="ceo-name">${companyMember.companyCEO}</td>
                                </tr>
                                <tr>
                                    <th>설립일</th>
                                    <td id="establishment-date">${companyMember.companyEstablishment}</td>
                                    <th>기업규모</th>
                                    <td id="company-size">중소기업</td>
                                </tr>
                                <tr>
                                    <th>사원수</th>
                                    <td id="employee-count">${companyMember.companyEmployee}명</td>
                                    <th>본사주소</th>
                                    <td id="company-address">
                                        ${companyMember.companyMainAddress}
                                    </td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>

                    <!-- 담당자 정보 섹션 -->
                    <div class="manager-info">
                        <h4>담당자 정보</h4>
                        <table class="manager-table">
                            <tbody>
                                <tr>
                                    <th>담당자명</th>
                                    <td id="manager-name">${companyMember.memberName}</td>
                                    <th>부서/직책</th>
                                    <td id="manager-position">${companyMember.companyMemberPosition}</td>
                                </tr>
                                <tr>
                                    <th>아이디</th>
                                    <td id="manager-userid">younghee123</td>
                                    <th>연락처</th>
                                    <td id="manager-phone">${companyMember.memberPhone}</td>
                                </tr>
                                <tr>
                                    <th>가입일</th>
                                    <td id="company-join-date">${companyMember.createdDate}</td>
                                    <th>최근접속일</th>
                                    <td id="company-last-access">${companyMember.memberRecentLogin}</td>
                                </tr>
                                <tr>
                                    <th>이메일</th>
                                    <td colspan="3" id="manager-email">
                                        ${companyMember.memberEmail}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- 기업 상세 정보 섹션 -->
                    <div class="company-detail">
                        <h4>기업 상세정보</h4>
                        <select class="status-select detail-select">
                            <option value="">카테고리 선택</option>
                            <option value="company-logo">기업 로고</option>
                            <option value="business-certificate">
                                사업자등록증명원
                            </option>
                            <option value="company-intro">기업 소개</option>
                            <option value="welfare">복리후생</option>
                            <option value="company-culture">기업문화</option>
                        </select>
                        <!-- 상세 내용 표시 영역 -->
                        <div class="detail-content">
                            <!-- 기업 로고 섹션 -->
                            <div
                                class="content-section company-logo-section"
                                style="display: none"
                            >
                                <div class="logo-image-view">
                                    <img
                                        src="${companyMember.companyLogoPath}"
                                        alt="기업 로고"
                                    />
                                </div>
                            </div>
                            <!-- 사업자등록증명원 섹션 추가 -->
                            <div
                                class="content-section business-certificate-section"
                                style="display: none"
                            >
                                <div class="certificate-image-view">
                                    <img
                                        src="${companyMember.companyCertificatePath}"
                                        alt="사업자등록증명원"
                                        class="certificate-image"
                                    />
                                    <div class="certificate-info">
                                        <p class="certificate-date">
                                            등록일: 2025-01-15
                                        </p>
                                        <p class="certificate-notice">
                                            * 이미지를 클릭하면 원본 크기로 볼
                                            수 있습니다
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- 기업 소개 섹션 -->
                            <div
                                class="content-section company-intro-section"
                                style="display: none"
                            >
                                <p>${companyMember.companyIntroduce}</p>
                            </div>

                            

                            <!-- 복리후생 섹션 -->
                            <div
                                class="content-section welfare-section"
                                style="display: none"
                            >
                                <p>${companyMember.companyWelfare}</p>
                            </div>

                            <!-- 기업문화 섹션 -->
                            <div
                                class="content-section company-culture-section"
                                style="display: none"
                            >
                                <p>${companyMember.companyCulture}</p>
                            </div>

                            <!-- 기타정보 섹션 -->
                            
                        </div>
                    </div>

                    <!-- 활동 내역 섹션 -->
                    <div class="company-activity">
                        <h4>활동 내역</h4>
                        <select class="status-select activity-select">
                            <option value="">카테고리 선택</option>
                            <option value="announcement-history">
                                공고 등록 내역
                            </option>
                            <option value="program-history">
                                체험 프로그램 운영 내역
                            </option>
                            <option value="report-history">문의 내역</option>
                        </select>
                        <!-- 활동 내역 표시 영역 -->
                        <div class="activity-content">
                            <!-- 공고 등록 내역 섹션 -->
                            <div
                                class="content-section announcement-history-section"
                                style="display: none"
                            >
                                <table class="activity-table">
                                    <thead>
                                        <tr>
                                            <th>공고번호</th>
                                            <th>공고제목</th>
                                            <th>등록일</th>
                                            <th>마감일</th>
                                            <th>처리상태</th>
                                            <th>마감여부</th>
                                        </tr>
                                    </thead>
                                    <tbody id="detailPrograms">
                                        
                                    </tbody>
                                </table>
                            </div>

                            <!-- 체험 프로그램 운영 내역 섹션 -->
                            <div
                                class="content-section program-history-section"
                                style="display: none"
                            >
                                <table class="activity-table">
                                    <thead>
                                        <tr>
                                            <th>프로그램명</th>
                                            <th>시작일</th>
                                            <th>종료일</th>
                                            <th>참가인원</th>
                                            <th>상태</th>
                                        </tr>
                                    </thead>
                                    <tbody id="detailExpired">
                                        
                                    </tbody>
                                </table>
                            </div>

                            <!-- 신고 내역 섹션 -->
                            <div
                                class="content-section report-history-section"
                                style="display: none"
                            >
                                <table class="activity-table">
                                    <thead>
                                        <tr>
                                            <th>문의번호</th>
                                            <th>문의유형</th>
                                            <th>문의내용</th>
                                            <th>문의일시</th>
                                            <th>처리상태</th>
                                        </tr>
                                    </thead>
                                    <tbody id="companyInquiryList">
                                       
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
                    <button type="button" class="save-btn close-button" value="${companyMember.id}">저장</button>
                </div>`;
        updateProgramTable(companyMember.companyProgramList);
        updateInquiryTable(companyMember.companyInquiryList);
        openModal(document.querySelector(".company-member-modal"));
    };
    return {showList : showList, openCompanyMemberDetail : openCompanyMemberDetail};
})();





