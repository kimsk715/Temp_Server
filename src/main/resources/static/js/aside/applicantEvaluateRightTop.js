// 별 클릭 이벤트
document.querySelector(".sidebar .person img").addEventListener("click", (star) => {
    if (star.target.className == "clicked") {
        star.target.src = `../../static/images/aside/whiteStar.png`;
        star.target.className = "";
        star.target.style.width = "70px";
        star.target.style.marginLeft = "-20px";
    } else {
        star.target.src = `../../static/images/aside/blueStar.png`;
        star.target.className = "clicked";
        star.target.style.width = "30px";
        star.target.style.marginLeft = "0px";
    }
});
// 버튼 클릭 이벤트
document.querySelector(".buttons").addEventListener("click", (button) => {
    if (button.target.classList.contains("fail")) {
        document.querySelector(".sidebar .pass").classList.remove("clicked");
        document.querySelector(".sidebar .badge").textContent = "불합격";
        document.querySelector(".sidebar .buttons").innerHTML = `
                <button class="review">재검토</button>`;
    } else if (button.target.classList.contains("pass")) {
        document.querySelector(".sidebar .fail").classList.remove("clicked");
        document.querySelector(".sidebar .badge").textContent = "최종합격";
        document.querySelector(".sidebar .buttons").innerHTML = `
                <button class="apply">수수료 정산 신청하기</button>
                <button class="passCancel">입사취소</button>`;
    } else if (button.target.classList.contains("passCancel")) {
        document.querySelector(".sidebar .apply").classList.remove("clicked");
        document.querySelector(".sidebar .badge").textContent = "신규지원자";
        document.querySelector(".sidebar .buttons").innerHTML = `
                <button class="pass">최종합격</button>
                <button class="fail">불합격</button>`;
    } else if (button.target.classList.contains("apply")) {
        document.querySelector(".sidebar .passCancel").classList.remove("clicked");
        applyAction();
    } else if (button.target.classList.contains("review")) {
        // 확인용 화면으로 변경
        document.querySelector(".sidebar .buttons").innerHTML = `    
                <div class="review">
                    <p class="circle note1">확인 클릭 시, 해당 지원자는 신규지원자 탭으로 상태가 변경됩니다.</p>
                    <div class="middleText">
                        <h1 class="highlight-text">'신규지원자' 상태로 변경</h1>
                        <p note2>
                            해당 지원자를 <span class="highlight">‘신규지원자(열람)’</span> 상태로 변경합니다.
                            변경하시겠습니까?
                        </p>
                    </div>
                    <p class="circle note3">
                        상태 변경 시, 지원자에게 재검토 대상이 되었음을 안내하는 메일이 발송됩니다. 점프 메일 템플릿으로
                        발송되며, 메일 발송 이력에서 확인 가능합니다.
                    </p>
                    <div class="buttons">
                        <button class="reviewCancel">취소</button>
                        <button class="reviewConfirm">확인</button>
                    </div>
                </div>`;
    } else if (button.target.classList.contains("reviewCancel")) {
        document.querySelector(".sidebar .badge").textContent = "불합격";
        document.querySelector(".sidebar .buttons").innerHTML = `
                <button class="review">재검토</button>`;
    } else if (button.target.classList.contains("reviewConfirm")) {
        document.querySelector(".sidebar .badge").textContent = "신규지원자";
        document.querySelector(".sidebar .buttons").innerHTML = `
                <button class="pass">최종합격</button>
                <button class="fail">불합격</button>`;
    }

    button.target.classList.add("clicked");
});

// 수수료 정산 신청 클릭시 모달창 처리, X 클릭시 모달창 닫기
function applyAction() {
    document.querySelector(".sidebar-modal-body").innerHTML = `    
        <div class="sidebar-modal">
            <div class="close-btn">&times;</div>
            <div class="modal-header">채용수수료 정산 신청</div>
            <div class="info-box">
                채용수수료 정산을 위해 필요한 정보를 입력해주시면 빠른 시일 내에 담당자가 연락 드리겠습니다.
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="topic">이름</label>
                    <div>김점마</div>
                </div>
                <div class="form-group">
                    <label class="topic">입사일(예정일)</label>
                    <input type="date" value="2022-08-05" />
                </div>
                <div class="form-group">
                    <label class="topic">연봉</label>
                    <input type="text" placeholder="원" />
                </div>
                <div class="form-group">
                    <label class="topic">담당자 연락처</label>
                    <input type="text" value="0220252733" />
                </div>
                <div class="form-group">
                    <label class="topic">담당자 이메일</label>
                    <input type="email" value="help@jumpit.co.kr" />
                </div>
                <div class="notice">
                    <p>• 정산 신청 완료 후 정보 수정을 원하시면 고객센터로 문의 바랍니다</p>
                    <p>점핏 고객센터: 02-2025-2733 (평일 09:00 - 18:00, 점심 12:00 - 13:00, 주말·공휴일 휴무)</p>
                    <p>이메일: help@jumpit.co.kr</p>
                </div>
                <div class="button-group">
                    <div class="button-container">
                        <button class="cancel">취소</button>
                        <button class="submit">신청하기</button>
                    </div>
                </div>
            </div>
        </div>`;

    document.querySelector(".sidebar-modal-body").style.display = "flex";

    // 취소, 신청하기 버튼 클릭시 색 바꿔주기
    document.querySelector(".sidebar-modal .button-container").addEventListener("click", (e) => {
        if (e.target.classList.contains("cancel")) {
            document.querySelector(".sidebar-modal .submit").classList.remove("clicked");
        } else {
            document.querySelector(".sidebar-modal .cancel").classList.remove("clicked");
        }
        e.target.classList.add("clicked");
    });

    // X 클릭시 모달창 닫기
    document.querySelector(".sidebar-modal .close-btn").addEventListener("click", () => {
        document.querySelector(".sidebar-modal").innerHTML = ``;
        document.querySelector(".sidebar-modal-body").style.display = "none";
    });
}
