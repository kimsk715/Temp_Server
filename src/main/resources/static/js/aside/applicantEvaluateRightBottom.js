// 평가 말풍선 클릭 이벤트 - 지원자 평가의견 모달창
document.querySelector(".sidebar .speechBubble").addEventListener("click", (e) => {
    e.target.classList.add("clicked");
    document.querySelector(".sidebar-modal-bottom-body").innerHTML = `
        <div class="sidebar-modal">
            <div class="modal-header">
                <span>지원자 평가 의견</span>
                <span class="close">&times;</span>
            </div>
            <div class="tabs">
                <div class="tab">서류 평가 2</div>
                <div class="tab active">면접 평가 3</div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th class="first">평가자</th>
                        <th class="second">평가</th>
                        <th class="third">평가의견</th>
                        <th class="fourth">평가일시</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="first">유피엠</td>
                        <td class="second">
                            <img src="../../static/images/aside/thumbDown.png" />
                        </td>
                        <td class="third">학구적인 태도가 실무에 도움이 될 것으로 기대됨</td>
                        <td class="fourth">2022.03.15</td>
                    </tr>
                    <tr>
                        <td class="first">정팀장</td>
                        <td class="second">
                            <img src="../../static/images/aside/thumbup.png" />
                        </td>
                        <td class="third">학구적인 태도가 실무에 도움이 될 것으로 기대됨</td>
                        <td class="fourth">2022.03.15</td>
                    </tr>
                    <tr>
                        <td class="first">이인담</td>
                        <td class="second">
                            <img src="../../static/images/aside/thumbup.png" />
                        </td>
                        <td class="third">자신감 넘치는 모습이 주체적으로 업무할 수 있을 것으로 기대됨</td>
                        <td class="fourth">2022.03.15</td>
                    </tr>
                </tbody>
            </table>
        </div>`;
    document.querySelector(".sidebar-modal-bottom-body").style.display = "flex";

    // tabs 서류평가 면접평가 클릭시

    //  X 버튼 클릭시
    document.querySelector(".sidebar-modal .close").addEventListener("click", (e) => {
        e.target.classList.remove("clicked");
        document.querySelector(".sidebar-modal-bottom-body").innerHTML = ``;
        document.querySelector(".sidebar-modal-bottom-body").style.display = "none";
        return;
    });
});
// 평가 말풍선 클릭 이벤트 - 지원자 평가의견 모달창

// input 창에 글자를 넣으면 등록 버튼 활성화

document.querySelector(".sidebar .evaluate").addEventListener("input", (e) => {
    const maxLength = 100;
    const currentLength = e.target.value.length;

    if (currentLength > maxLength) {
        alert("최대 100자까지 입력 가능합니다.");
        e.target.value = e.target.value.slice(0, maxLength);
    }

    if (document.querySelector(".sidebar .evaluate").value.trim().length > 0) {
        document.querySelector(".submit-button button").classList.add("clicked");
        document.querySelector(".submit-button button").style.cursor = "pointer";
    } else {
        document.querySelector(".submit-button button").classList.remove("clicked");
        document.querySelector(".submit-button button").style.cursor = "not-allowed";
    }
});
// input 창에 글자를 넣으면 등록 버튼 활성화

// 등록 버튼 클릭
document.querySelector(".sidebar .submit-button").addEventListener("click", (e) => {
    console.log(e.target.outerHTML);
    if (e.target.style.cursor != "not-allowed") {
        if (e.target.className == "newbutton") {
            document.querySelectorAll(".sidebar .newbutton").forEach((e) => {
                e.classList.remove("clicked");
            });
            e.target.classList.add("clicked");
        } else {
            e.target.closest(
                ".submit-button"
            ).innerHTML = `<button class="newbutton" style="cursor:pointer">수정</button>
                           <button class="newbutton" style="cursor:pointer">삭제</button>`;
        }
    }
});
