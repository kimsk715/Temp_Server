// const righttopbutton = document.querySelector("div.header-right-user7");
// const righttopmenu = document.querySelector("div.header-right-menu8");
// NodeList.prototype.addEventListener = Array.prototype.addEventListener;
// NodeList.prototype.forEach = Array.prototype.forEach;
// // 우상단 마우스 이벤트트
// righttopbutton.addEventListener("mouseover", function () {
//     righttopmenu.style.display = "block";
// });
// righttopmenu.addEventListener("mouseover", function () {
//     righttopmenu.style.display = "block";
// });
// righttopbutton.addEventListener("mouseout", function () {
//     righttopmenu.style.display = "none";
// });
// righttopmenu.addEventListener("mouseout", function () {
//     righttopmenu.style.display = "none";
// });
//
const topNavigation = document.querySelector("header.header-sc");
const topMenu = document.querySelector("nav.nav-sc3");

topNavigation.addEventListener("mouseover", function () {
    topMenu.style.display = "flex";
});

topNavigation.addEventListener("mouseout", function () {
    topMenu.style.display = "none";
});
// // 검색창
// const searchBoxBlink = document.querySelectorAll("div.search-box");
// const searchBoxHidden = document.querySelectorAll("div.searchbox-hidden");
// const temp = document.querySelector("div.searchbox-hidden-content");
// const mediaSearchBtn = document.querySelector("button.media-searchbtn");
// const topSearchBox = document.querySelector("div.searchbox-top");
//
// const oldtopSearchBox = document.querySelector("div.searchbox-top.old");
// const newtopSearchBox = document.querySelector("div.searchbox-top.formedia");
// const oldSearchBoxOnClick = document.querySelector("div.searchbox-onclick.old");
// const newSearchBoxOnClick = document.querySelector(
//     "div.searchbox-onclick.formedia"
// );
//
// window.addEventListener("resize", () => {
//     window.location.reload;
//     searchBoxHidden.forEach((hiddenArea) => {
//         searchBoxBlink.forEach((blinkArea) => {
//             if (window.innerWidth < 1080) {
//                 if (oldtopSearchBox.innerHTML != "") {
//                     hiddenArea.classList.remove("invisible");
//                     hiddenArea.removeAttribute("style");
//                     newtopSearchBox.innerHTML += oldtopSearchBox.innerHTML;
//                     oldtopSearchBox.innerHTML = "";
//                 }
//             } else if (window.innerWidth >= 1080) {
//                 if (newtopSearchBox.innerHTML != "") {
//                     newSearchBoxOnClick.style.display = "none";
//                     hiddenArea.classList.add("invisible");
//                     hiddenArea.style.display = "none";
//                     oldtopSearchBox.innerHTML += newtopSearchBox.innerHTML;
//                     newtopSearchBox.innerHTML = "";
//                 }
//             }
//         });
//     });
// });
//
// document.addEventListener("click", (e) => {
//     window.location.reload;
//
//     searchBoxHidden.forEach((hiddenArea) => {
//         searchBoxBlink.forEach((blinkArea) => {
//             const screenWidth = window.innerWidth;
//             if (screenWidth >= 1080) {
//                 hiddenArea.classList.add("invisible");
//                 if (blinkArea.contains(e.target)) {
//                     hiddenArea.classList.remove("invisible");
//                     hiddenArea.setAttribute("style", "display : block;");
//                 } else if (!hiddenArea.contains(e.target)) {
//                     hiddenArea.classList.add("invisible");
//                     hiddenArea.removeAttribute("style");
//                 }
//             } else if (screenWidth < 1080) {
//                 if (mediaSearchBtn.contains(e.target)) {
//                     hiddenArea.classList.remove("invisible");
//                     newtopSearchBox.style.display = "block";
//                     newSearchBoxOnClick.style.display = "block";
//                 } else if (!newtopSearchBox.contains(e.target)) {
//                     hiddenArea.classList.add("invisible");
//                     newtopSearchBox.style.display = "none";
//                     newSearchBoxOnClick.style.display = "none";
//                 }
//             }
//         });
//     });
// });

// 검색창
const profilePhoto = document.querySelector("div.profilephoto");
const profilePhotoArea = document.querySelector("div.profile-image");
const profileUpLoadArea = document.querySelector("div.profile-upload");
const input = profilePhoto.lastElementChild;

profilePhoto.addEventListener("click", () => {
    input.click();
    profilePhotoArea.classList.remove("hidden");
    profileUpLoadArea.classList.add("hidden");
});

input.addEventListener("change", (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", (e) => {
        const path = e.target.result;
        if (path.includes("image")) {
            profilePhotoArea.style.background = `url(${path}) center center / contain no-repeat rgb(255, 255, 255)`;
        } else {
            profilePhotoArea.style.background = `url("images/document.jpg")`;
        }
    });
});

profilePhotoArea.addEventListener("mouseover", () => {
    const hoverArea1 = document.querySelector("div.hover-bg");
    const hoverArea2 = hoverArea1.nextElementSibling;
    hoverArea1.style.display = "block";
    hoverArea2.style.display = "block";
});

profilePhotoArea.addEventListener("mouseout", () => {
    const hoverArea1 = document.querySelector("div.hover-bg");
    const hoverArea2 = hoverArea1.nextElementSibling;
    hoverArea1.style.display = "none";
    hoverArea2.style.display = "none";
});

const profilePhotoDeleteBtn =
    document.querySelector("div.hover-bg").nextElementSibling;

profilePhotoDeleteBtn.addEventListener("click", () => {
    if (confirm("이미지를 삭제하시겠습니까?")) {
        profilePhotoArea.style.background = "";
        profilePhotoArea.classList.add("hidden");
        profileUpLoadArea.classList.remove("hidden");
    }
});

// 좌측 메뉴 버튼 + 해당 버튼으로 비활성화 여부 가능.
const editMenuButton = document.querySelectorAll("button.editMenuButton");

editMenuButton.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("clicked");
        const buttonValue = button.previousElementSibling.innerText;

        switch (buttonValue) {
            case "사진":
                document
                    .querySelector("div.profilephoto")
                    .classList.toggle("hidden");
                break;
            case "간단소개":
                document
                    .querySelector("div.simplepr")
                    .classList.toggle("hidden");
                break;
            case "직무":
                // 여기는 나중에 직업 카테고리 정도로 이름 바꿀 예정
                document
                    .querySelector("div.jobcategory")
                    .classList.toggle("hidden");
                break;
            case "기타사항":
                document
                    .querySelector("div.etcarea")
                    .classList.toggle("hidden");
                break;
            default:
                document
                    .querySelector("div.applicant")
                    .classList.toggle("hidden");
                break;
        }
    });
});

const careerChoiceButton = document.querySelector("dd.memberinfo-text2");
const memberCareerPeriod = document.querySelector(
    "div.memberinfo-text2-option"
);
const memberCareerPeriodArrow = document.querySelector(
    "div.memberinfo-text2-text svg"
);
const careerPeriodList = document.querySelectorAll("label.careerperiodlist");

careerChoiceButton.addEventListener("click", () => {
    memberCareerPeriod.classList.toggle("hidden");
    memberCareerPeriodArrow.classList.toggle("svghovered");
});

const resumeReleaseBtn = document.querySelector("button.resumeradiobutton");
const yearText = document.querySelector("div.memberinfo-text2-text");
const radioButtonText = document.querySelector("div.profile-tooltip");
const resumeStatus = document.getElementById("resume-status");
resumeReleaseBtn.addEventListener("click", () => {
    resumeReleaseBtn.classList.toggle("clicked");
    if (resumeReleaseBtn.classList.contains("clicked")) {
        //공개 상태
        resumeStatus.innerText = "이력서 공개";
        privateToolTipBefore.classList.add("hidden2");
        privateToolTipAfter.classList.remove("hidden2");
        privateToolTipAfter.classList.remove("hidden");
    } else {
        resumeStatus.innerText = "이력서 비공개";
        privateToolTipBefore.classList.remove("hidden2");
        privateToolTipAfter.classList.add("hidden2");
        privateToolTipBefore.classList.remove("hidden");
    }
});

careerPeriodList.forEach((year) => {
    year.addEventListener("click", () => {
        yearText.style.color = "black";
        yearText.innerText = year.innerText;
    });
});

const resumeQuestion = document.querySelector(
    "div.memberinfo-tooltip-button-change"
);
const privateToolTipBefore = document.querySelector(
    "div.resume-private.before"
);
const privateToolTipAfter = document.querySelector("div.resume-private.after");

resumeQuestion.addEventListener("click", () => {
    resumeQuestion.classList.toggle("before");
    resumeQuestion.classList.toggle("after");
    privateToolTipBefore.classList.toggle("hidden");
    privateToolTipAfter.classList.toggle("hidden");
    if (resumeReleaseBtn.classList.contains("clicked")) {
        //공개 상태
        privateToolTipBefore.classList.add("hidden2");
        privateToolTipAfter.classList.remove("hidden2");
    } else {
        privateToolTipBefore.classList.remove("hidden2");
        privateToolTipAfter.classList.add("hidden2");
    }
});

// 비공개 --> 공개 : 공개 메시지
// 공개 --> 비공개 : 비공개 메시지

const privateCloseBtn = document.getElementById("stauts-private");
const publicCloseBtn = document.getElementById("status-public");

privateCloseBtn.addEventListener("click", () => {
    privateToolTipBefore.classList.add("hidden");
});

publicCloseBtn.addEventListener("click", () => {
    privateToolTipAfter.classList.add("hidden");
});

const simpleprTextArea = document.querySelector("textarea.simplepr-textarea");

simpleprTextArea.addEventListener("input", function () {
    this.style.height = "auto"; // 높이를 초기화
    this.style.height = this.scrollHeight + "px"; // 내용에 맞게 높이 조정
});

const jobCategoryRightButton = document.getElementById(
    "jobcategory-right-button"
);
const jobCategoryList = document.querySelector("div.jobcategory-list");
jobCategoryRightButton.addEventListener("click", () => {
    jobCategoryList.classList.toggle("hidden");
});

const jobCheckButton = document.querySelectorAll("input.jobcategory-inputarea");
const selectionWrapper = document.querySelector("div.select-wrap");
const closeButtons = document.querySelectorAll("button.btn-close");
jobCheckButton.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
        const buttonsValue = buttons.nextElementSibling.innerText;
        var temp = `<div class="select-item"><span>${buttonsValue}</span><button class="btn-close" type="button"><span class="blind">닫기</span></button></div>`;
        if (buttons.checked) {
            selectionWrapper.innerHTML += temp;
        } else {
            selectionWrapper.innerHTML -= temp;
            if ((selectionWrapper.innerHTML = "")) {
                selectionWrapper.innerHTML = "";
                // 이 처리를 안 하면 NaN 이 뜸.
            }
        }
    });
});

window.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.btn-close")) {
        e.target.closest("div").remove();
        const closeValue = e.target.previousElementSibling.innerText;
        jobCheckButton.forEach((buttons) => {
            const checkValue = buttons.nextElementSibling.innerText;
            if (closeValue == checkValue) {
                buttons.checked = false;
            }
        });
    }
});

// 추가 알고리즘은 ok // 이제 제거만 하면 됨.
const eduEditBtn = document.getElementById("edueditbtn");
const eduAddPlace = document.querySelector("div.memberedu");
const profileDownBtn = document.querySelectorAll("button.profile-down-button");
const profileUpBtn = document.querySelectorAll("button.profile-up-button");
const profileDeleteButton = document.querySelectorAll(
    "button.profile-delete-button"
);
globalThis.eduindex = 0;
eduEditBtn.addEventListener("click", () => {
    eduindex++;
    const membereduEditMark = document.querySelectorAll(
        "div.memberedu-edit-mark"
    );
    let newEditArea = document.createElement("div");
    membereduEditMark.forEach((mark) => {
        mark.classList.add("clicked");
    });

    newEditArea.className = "memberedu-edit";
    newEditArea.innerHTML = `<div class="memberedu-edit-mark"></div>
                                                <div class="memberedu-graduate1 memberedu-graduate2">
                                                    <div class="year-month-content">
                                                        <input class="year-content" placeholder="YYYY" maxlength="4" type="text" value="" name="educations.0.graduateYear">.<input class="month-content" placeholder="MM" maxlength="2" type="text" value="" name="educations.0.graduateMonth"><span class="dropped">졸업(예정)</span>
                                                    </div>
                                                    <div class="memberedu-drop">
                                                        <input id="${globalThis.eduindex}" type="checkbox"><label for="${globalThis.eduindex}" class="dropcheck">중퇴</label>
                                                    </div>
                                                </div>
                                                <div class="memberedu-division">
                                                    <div class="memberedu-name">
                                                        <div>
                                                            <div class="memberedu-name-inner">
                                                                <div class="memberedu-class">
                                                                    <div class="memberedu-class-inner">
                                                                        <div class="memberedu-class-choice">
                                                                            <span>학력
                                                                                구분</span><input class="memberedu-class-choice-input" type="text" name="educations.0.educationType" inputmode="none"><button type="button" class="classchoice">
                                                                                <span style="
                                                                                            display: flex;
                                                                                        "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                                                                        <path fill="#222" fill-rule="evenodd" d="M13.472 5.195c.26.26.26.683 0 .943l-5 5a.667.667 0 0 1-.943 0l-5-5a.667.667 0 1 1 .943-.943L8 9.724l4.529-4.529c.26-.26.682-.26.943 0Z" clip-rule="evenodd"></path>
                                                                                    </svg></span>
                                                                            </button>
                                                                        </div>
                                                                        <div class="memberedu-class-list hidden">
                                                                            <!-- 화면 가려서 임시로 스타일 설정. -->
                                                                            <ul>
                                                                                <li>
                                                                                    <div class="memberedu-class-content">
                                                                                        <label for="" class="class-content-label">고등학교</label>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="memberedu-class-content">
                                                                                        <label for="" class="class-content-label">대학(2,3년)</label>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="memberedu-class-content">
                                                                                        <label for="" class="class-content-label">대학교(4년)</label>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="memberedu-class-content">
                                                                                        <label for="" class="class-content-label">대학원(석사)</label>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="memberedu-class-content">
                                                                                        <label for="" class="class-content-label">대학원(박사)</label>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="memberedu-schoolname1 memberedu-schoolname2 flex-main-text2">
                                                                    <input placeholder="학교명을 입력해주세요" maxlength="255" type="text" value="" name="educations.0.schoolName">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="profile-order-control">
                                                            <div class="order-inner">
                                                                <div class="order-buttons">
                                                                    <button class="profile-down-button"  type="button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                                                            <path fill="#222" fill-rule="evenodd" d="M13.472 5.195c.26.26.26.683 0 .943l-5 5a.667.667 0 0 1-.943 0l-5-5a.667.667 0 1 1 .943-.943L8 9.724l4.529-4.529c.26-.26.682-.26.943 0Z" clip-rule="evenodd"></path>
                                                                        </svg></button><button class="profile-up-button" type="button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                                                                            <path fill="#000" fill-rule="evenodd" d="M3.793 16.207a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 0 1 1.414 0l7.5 7.5a1 1 0 0 1-1.414 1.414L12 9.414l-6.793 6.793a1 1 0 0 1-1.414 0Z" clip-rule="evenodd"></path>
                                                                        </svg></button><button class="profile-delete-button" type="button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                            <path fill="#C4C4C4" fill-rule="evenodd" d="M6.25 5.5a3 3 0 0 1 3-3h5.5a3 3 0 0 1 3 3v1.25H21a1 1 0 1 1 0 2h-1.25v9.75a3 3 0 0 1-3 3h-9.5a3 3 0 0 1-3-3V8.75H3a1 1 0 0 1 0-2h3.25V5.5Zm2 1.25h7.5V5.5a1 1 0 0 0-1-1h-5.5a1 1 0 0 0-1 1v1.25Zm-2 2v9.75a1 1 0 0 0 1 1h9.5a1 1 0 0 0 1-1V8.75H6.25Zm3.5 3a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0v-2.5a1 1 0 0 1 1-1Zm5.5 1a1 1 0 1 0-2 0v2.5a1 1 0 1 0 2 0v-2.5Z" clip-rule="evenodd"></path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="memberedu-schoolname1 memberedu-schoolname3">
                                                        <input placeholder="학과명을 입력해주세요" maxlength="255" type="text" value="" name="educations.0.majorName">
                                                    </div>
                                                    <div class="member-grade">
                                                        <div class="memberedu-schoolname1 memberedu-schoolname4">
                                                            <input placeholder="학점" maxlength="4" type="text" value="" name="educations.0.creditPoint">
                                                        </div>
                                                        <div class="memberinfo-text2-inner">
                                                            <div class="member-standard-grade">
                                                                <span>기준학점</span><input class="memberedu-class-choice-input" type="text" name="educations.0.creditPointType" inputmode="none"><button type="button" class="standardgrade">
                                                                    <span style="
                                                                                display: flex;
                                                                            "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                                                            <path fill="#222" fill-rule="evenodd" d="M13.472 5.195c.26.26.26.683 0 .943l-5 5a.667.667 0 0 1-.943 0l-5-5a.667.667 0 1 1 .943-.943L8 9.724l4.529-4.529c.26-.26.682-.26.943 0Z" clip-rule="evenodd"></path>
                                                                        </svg></span>
                                                                </button>
                                                            </div>
                                                            <div class="standard-degree hidden">
                                                                <ul>
                                                                    <li>
                                                                        <div class="sc-5a671f5b-4 khTWOS"><label for="category9999" class="maxgrade">선택
                                                                                안함</label></div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="sc-5a671f5b-4 khTWOS"><label for="" class="maxgrade">4.5</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="sc-5a671f5b-4 khTWOS"><label for="" class="maxgrade">4.3</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="sc-5a671f5b-4 khTWOS"><label for="" class="maxgrade">4.0</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="sc-5a671f5b-4 khTWOS"><label for="" class="maxgrade">5.0</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="sc-5a671f5b-4 khTWOS"><label for="" class="maxgrade">7.0</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="sc-5a671f5b-4 khTWOS"><label for="" class="maxgrade">100</label>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            `;

    eduAddPlace.insertBefore(newEditArea, eduEditBtn);
    profileDownBtn.forEach((buttons) => {
        if (eduAddPlace.contains(buttons)) {
            buttons.removeAttribute("disabled");
        }
    });

    profileUpBtn.forEach((buttons) => {
        if (eduAddPlace.contains(buttons)) {
            buttons.removeAttribute("disabled");
        }
    });

    profileDeleteButton.forEach((buttons) => {
        if (eduAddPlace.contains(buttons)) {
            buttons.removeAttribute("disabled");
        }
    });
});

eduAddPlace.addEventListener("click", (e) => {
    const temp = e.target.closest("div.memberedu-graduate2").firstElementChild
        .lastElementChild;
    // console.log(temp)
    if (e.target && e.target.matches("div.memberedu-drop input"))
        if (e.target.checked) {
            temp.innerText = "중퇴";
        } else {
            temp.innerText = "졸업(예정)";
        }
});

// const classChoiceBtn = document.querySelectorAll("button.classchoice");
const classChoice = document.querySelectorAll("div.memberedu-class-list");

eduAddPlace.addEventListener("click", (e) => {
    const eduClassList = e.target.closest("div").nextElementSibling;
    if (e.target && e.target.matches("button.classchoice svg")) {
        eduClassList.classList.toggle("hidden");
    }
});

eduAddPlace.addEventListener("click", (e) => {
    const classLabel = e.target.closest("div.memberedu-class-list");

    if (e.target && e.target.matches(".class-content-label")) {
        classLabel.previousElementSibling.firstElementChild.innerText =
            e.target.innerText;
        classLabel.previousElementSibling.firstElementChild.style.color =
            "black";
        classLabel.classList.add("hidden");
    }
});

//  기준학점 선택 시 숫자 입력되는 코드
eduAddPlace.addEventListener("click", (e) => {
    if (e.target && e.target.matches("label.maxgrade")) {
        const temp = e.target.closest(
            "div.standard-degree"
        ).previousElementSibling;
        const memberEduSpan = temp.firstElementChild;
        if (e.target.innerText != "선택 안함") {
            memberEduSpan.innerText = e.target.innerText;
        }
        e.target.closest("div.standard-degree").classList.add("hidden");
    }
});
//

const maxGradeBtn = document.getElementById("standardgrade");
eduAddPlace.addEventListener("click", (e) => {
    if (e.target && e.target.matches(".standardgrade svg")) {
        const maxGradeList = e.target.closest("div").nextElementSibling;
        maxGradeList.classList.toggle("hidden");
    }
});
const maxGradeSpan = document.querySelector("div.member-standard-grade span");
const maxGradeValue = document.querySelectorAll("label.maxgrade");

// 한 개만 있을 때는 버튼들 disabled 상태, 여러개면 활성화
// 삭제는 무조건 활성화, 위 아래 버튼은 각각 맨 위, 맨 아래에 있을 때 비활성화
const memberEdu = document.querySelector("div.memberedu");
const amountDiv = memberEdu.querySelectorAll("div.memberedu-edit");
const editMark = document.querySelectorAll("div.memberedu-edit-mark");

eduAddPlace.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.profile-delete-button")) {
        e.target.closest("div.memberedu-edit").remove();
        //  학력 정보가 한 개만 남았을 때에는 clicked 속성이 없어져야 함.
        console.log(amountDiv.length);
        if (amountDiv.length === 1) {
            editMark.forEach((mark) => {
                mark.classList.remove("clicked");
            });
            profileDownBtn.forEach((buttons) => {
                if (eduAddPlace.contains(buttons)) {
                    buttons.setAttribute("disabled", "true");
                }
            });

            profileUpBtn.forEach((buttons) => {
                if (eduAddPlace.contains(buttons)) {
                    buttons.setAttribute("disabled", "true");
                }
            });

            profileDeleteButton.forEach((buttons) => {
                if (eduAddPlace.contains(buttons)) {
                    buttons.setAttribute("disabled", "true");
                }
            });
        }
    }
});
eduAddPlace.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.profile-up-button")) {
        const currentDiv = e.target.closest("div.memberedu-edit");
        const previousDiv = currentDiv.previousElementSibling;
        eduAddPlace.insertBefore(currentDiv, previousDiv);
    }
});

eduAddPlace.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.profile-down-button")) {
        const currentDiv = e.target.closest("div.memberedu-edit");
        const nextDiv = currentDiv.nextElementSibling;
        eduAddPlace.insertBefore(nextDiv, currentDiv);
    }
});

//  경력

const careerAddButton = document.getElementById("careeraddbutton");
const careerAddArea = document.querySelector("div.membercareer");
const memberCareerEditMark = document.querySelectorAll(
    "div.membercareer-edit-mark"
);
globalThis.careerindex = 0;
// 나중에는 경력Array의 사이즈로 초기화
careerAddButton.addEventListener("click", () => {
    careerindex++;
    let newEditArea = document.createElement("div");
    memberCareerEditMark.forEach((mark) => {
        mark.classList.add("clicked");
    });

    newEditArea.className = "membercareer-content";
    newEditArea.innerHTML = ` <div class="membercareer-edit-mark"></div>
                                                <div class="membercareer-date1 membercareer-date2">
                                                    <div class="duration">
                                                        <input class="hide" type="text" value="" name="careers.0.startTime"><input class="hide" type="text" value="" name="careers.0.endTime">
                                                        <div class="calendar-area">
                                                            <div class="calendar-box">
                                                                <input class="calendar-year profile-input" maxlength="4" placeholder="YYYY" type="text" value=""><span>.</span><input class="calendar-month profile-input" maxlength="2" placeholder="MM" type="text" value="">
                                                            </div>
                                                            <span class="center-pa">-</span>
                                                            <div class="calendar-box">
                                                                <input class="calendar-year profile-input" maxlength="4" placeholder="YYYY" type="text" value=""><span>.</span><input class="calendar-month profile-input" maxlength="2" placeholder="MM" type="text" value="">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="during-button">
                                                        <input autocomplete="off" id="${globalThis.careerindex}" class="working" type="checkbox" name="careers.0-proceeding"><label for="${globalThis.careerindex}" class="sc-beab3720-0 lbwSup">재직중</label>
                                                    </div>
                                                </div>
                                                <div class="company-name">
                                                    <div class="company-name-input">
                                                        <div class="company-name1 company-name2 flex-main-text">
                                                            <input placeholder="회사명을 입력해주세요" maxlength="255" type="text" value="" name="careers.0.companyName">
                                                        </div>
                                                        
                                                        <div class="profile-order-control">
                                                            <div class="order-inner">
                                                                <div class="order-buttons">
                                                                    <button class="profile-down-button"  type="button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                                                            <path fill="#222" fill-rule="evenodd" d="M13.472 5.195c.26.26.26.683 0 .943l-5 5a.667.667 0 0 1-.943 0l-5-5a.667.667 0 1 1 .943-.943L8 9.724l4.529-4.529c.26-.26.682-.26.943 0Z" clip-rule="evenodd"></path>
                                                                        </svg></button><button class="profile-up-button"  type="button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                                                                            <path fill="#000" fill-rule="evenodd" d="M3.793 16.207a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 0 1 1.414 0l7.5 7.5a1 1 0 0 1-1.414 1.414L12 9.414l-6.793 6.793a1 1 0 0 1-1.414 0Z" clip-rule="evenodd"></path>
                                                                        </svg></button><button class="profile-delete-button"  type="button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                            <path fill="#C4C4C4" fill-rule="evenodd" d="M6.25 5.5a3 3 0 0 1 3-3h5.5a3 3 0 0 1 3 3v1.25H21a1 1 0 1 1 0 2h-1.25v9.75a3 3 0 0 1-3 3h-9.5a3 3 0 0 1-3-3V8.75H3a1 1 0 0 1 0-2h3.25V5.5Zm2 1.25h7.5V5.5a1 1 0 0 0-1-1h-5.5a1 1 0 0 0-1 1v1.25Zm-2 2v9.75a1 1 0 0 0 1 1h9.5a1 1 0 0 0 1-1V8.75H6.25Zm3.5 3a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0v-2.5a1 1 0 0 1 1-1Zm5.5 1a1 1 0 1 0-2 0v2.5a1 1 0 1 0 2 0v-2.5Z" clip-rule="evenodd"></path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="companytext1 companytext2">
                                                        <input placeholder="회사소개를 간단하게 입력해주세요" type="text" value="" name="careers.0.companyInfo">
                                                    </div>
                                                    <div class="companytext1 companytext3">
                                                        <input placeholder="부서명/직책" maxlength="255" type="text" value="" name="careers.0.divisionName">
                                                    </div>
                                                    
                                                    <div class="companytext5 companytext6">
                                                        <textarea name="careers.0.jobDetailInfo" placeholder="주요업무 및 성과를 작성해주세요" class="careertext" style="
                                                                    height: 22px;
                                                                "></textarea>
                                                    </div>
                                                </div>
                                            `;
    careerAddArea.insertBefore(newEditArea, careerAddButton);
    profileDownBtn.forEach((buttons) => {
        if (careerAddArea.contains(buttons)) {
            buttons.removeAttribute("disabled");
        }
    });

    profileUpBtn.forEach((buttons) => {
        if (careerAddArea.contains(buttons)) {
            buttons.removeAttribute("disabled");
        }
    });

    profileDeleteButton.forEach((buttons) => {
        if (careerAddArea.contains(buttons)) {
            buttons.removeAttribute("disabled");
        }
    });
});

// 재직 기간
window.addEventListener("click", (e) => {
    if (e.target && e.target.matches(".during-button input")) {
        const duringtemp = e.target.closest("div").previousElementSibling;
        if (e.target.checked) {
            duringtemp.lastElementChild.lastElementChild.classList.add(
                "read-only"
            );
            duringtemp.lastElementChild.lastElementChild.firstElementChild.disabled =
                "true";
            duringtemp.lastElementChild.lastElementChild.lastElementChild.disabled =
                "true";
        } else {
            duringtemp.lastElementChild.lastElementChild.classList.remove(
                "read-only"
            );
            duringtemp.lastElementChild.lastElementChild.firstElementChild.disabled =
                "false";
            duringtemp.lastElementChild.lastElementChild.lastElementChild.disabled =
                "false";
        }
    }
});

careerAddArea.addEventListener("input", (e) => {
    if (e.target && e.target.matches("textarea.careertext")) {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px"; // 내용에 맞게 높이 조정
    }
});

const careerDiv = careerAddArea.querySelectorAll("div.membercareer-content");
careerAddArea.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.profile-delete-button")) {
        e.target.closest("div.membercareer-content").remove();
        //  학력 정보가 한 개만 남았을 때에는 clicked 속성이 없어져야 함.

        if (careerDiv.length === 1) {
            memberCareerEditMark.forEach((mark) => {
                mark.classList.remove("clicked");
            });
            profileDownBtn.forEach((buttons) => {
                if (careerAddArea.contains(buttons)) {
                    buttons.setAttribute("disabled", "true");
                }
            });

            profileUpBtn.forEach((buttons) => {
                if (careerAddArea.contains(buttons)) {
                    buttons.setAttribute("disabled", "true");
                }
            });

            profileDeleteButton.forEach((buttons) => {
                if (careerAddArea.contains(buttons)) {
                    buttons.setAttribute("disabled", "true");
                }
            });
        }
    }
});
careerAddArea.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.profile-up-button")) {
        const currentDiv = e.target.closest("div.membercareer-content");
        const previousDiv = currentDiv.previousElementSibling;
        careerAddArea.insertBefore(currentDiv, previousDiv);
    }
});

careerAddArea.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.profile-down-button")) {
        const currentDiv = e.target.closest("div.membercareer-content");
        const nextDiv = currentDiv.nextElementSibling;
        careerAddArea.insertBefore(nextDiv, currentDiv);
    }
});

//기타사항
globalThis.etcindex = 0;
const etcAddButton = document.getElementById("etcaddbutton");
const etcAddArea = document.querySelector("div.etcarea");
const memberEtcEditMark = document.querySelectorAll("div.etc-content-mark");
etcAddButton.addEventListener("click", () => {
    etcindex++;
    
    let newEditArea = document.createElement("div");
    memberEtcEditMark.forEach((mark) => {
        mark.classList.add("clicked");
    });

    newEditArea.className = "etc-content";
    newEditArea.innerHTML = `<div class="etc-content-mark">
                                                </div>
                                                <div
                                                    class="etcdate1 etcdate2">
                                                    <div
                                                        class="etc-calender">
                                                        <input
                                                            class="hide"
                                                            type="text"
                                                            value=""
                                                            name="etcHistories.0.startTime" /><input
                                                            class="hide"
                                                            type="text"
                                                            value=""
                                                            name="etcHistories.0.endTime" />
                                                        <div
                                                            class="calendar-area">
                                                            <div
                                                                class="calendar-box">
                                                                <input
                                                                    class="calendar-year profile-input"
                                                                    maxlength="4"
                                                                    placeholder="YYYY"
                                                                    type="text"
                                                                    value="" /><span>.</span><input
                                                                    class="calendar-month profile-input"
                                                                    maxlength="2"
                                                                    placeholder="MM"
                                                                    type="text"
                                                                    value="" />
                                                            </div>
                                                            <span
                                                                class="center-pa">-</span>
                                                            <div
                                                                class="calendar-box changeoption">
                                                                <input
                                                                    class="calendar-year profile-input"
                                                                    maxlength="4"
                                                                    placeholder="YYYY"
                                                                    type="text"
                                                                    value="" /><span>.</span><input
                                                                    class="calendar-month profile-input"
                                                                    maxlength="2"
                                                                    placeholder="MM"
                                                                    type="text"
                                                                    value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="no-expire">
                                                        <input
                                                            autocomplete="off"
                                                            id="${globalThis.etcindex}"
                                                            class="noexpire-input"
                                                            type="checkbox"
                                                            name="etcHistories.0-proceeding" /><label
                                                            for="${globalThis.etcindex}"
                                                            class="noexpire-label">종료일
                                                            없음</label>
                                                    </div>
                                                </div>
                                                <div
                                                    class="etc-content-wrapper">
                                                    <div
                                                        class="etc-content-input">
                                                        <div
                                                            class="etctext1 etctext2 main-text">
                                                            <input
                                                                placeholder="활동명/이력제목을 입력해주세요"
                                                                maxlength="255"
                                                                type="text"
                                                                value=""
                                                                name="etcHistories.0.etcName" />
                                                        </div>
                                                        <div
                                                            class="profile-order-control">
                                                            <div
                                                                class="order-inner">
                                                                <div
                                                                    class="order-buttons">
                                                                    <button
                                                                        class="profile-down-button"
                                                                        
                                                                        type="button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                            width="16"
                                                                            height="16"
                                                                            fill="none"
                                                                            viewBox="0 0 16 16">
                                                                            <path
                                                                                fill="#222"
                                                                                fill-rule="evenodd"
                                                                                d="M13.472 5.195c.26.26.26.683 0 .943l-5 5a.667.667 0 0 1-.943 0l-5-5a.667.667 0 1 1 .943-.943L8 9.724l4.529-4.529c.26-.26.682-.26.943 0Z"
                                                                                clip-rule="evenodd">
                                                                            </path>
                                                                        </svg></button><button
                                                                        class="profile-up-button"
                                                                        
                                                                        type="button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                            width="16"
                                                                            height="16"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24">
                                                                            <path
                                                                                fill="#000"
                                                                                fill-rule="evenodd"
                                                                                d="M3.793 16.207a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 0 1 1.414 0l7.5 7.5a1 1 0 0 1-1.414 1.414L12 9.414l-6.793 6.793a1 1 0 0 1-1.414 0Z"
                                                                                clip-rule="evenodd">
                                                                            </path>
                                                                        </svg></button><button
                                                                        class="profile-delete-button"
                                                                        
                                                                        type="button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                            width="24"
                                                                            height="24"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24">
                                                                            <path
                                                                                fill="#C4C4C4"
                                                                                fill-rule="evenodd"
                                                                                d="M6.25 5.5a3 3 0 0 1 3-3h5.5a3 3 0 0 1 3 3v1.25H21a1 1 0 1 1 0 2h-1.25v9.75a3 3 0 0 1-3 3h-9.5a3 3 0 0 1-3-3V8.75H3a1 1 0 0 1 0-2h3.25V5.5Zm2 1.25h7.5V5.5a1 1 0 0 0-1-1h-5.5a1 1 0 0 0-1 1v1.25Zm-2 2v9.75a1 1 0 0 0 1 1h9.5a1 1 0 0 0 1-1V8.75H6.25Zm3.5 3a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0v-2.5a1 1 0 0 1 1-1Zm5.5 1a1 1 0 1 0-2 0v2.5a1 1 0 1 0 2 0v-2.5Z"
                                                                                clip-rule="evenodd">
                                                                            </path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="etctext1 etctext3">
                                                        <div
                                                            class="etc-choice">
                                                            <div
                                                                class="etc-choice-inner">
                                                                <span>이력구분
                                                                    선택</span><input
                                                                    class="etc-choice-input"
                                                                    type="text"
                                                                    name="drop-0-etcType"
                                                                    inputmode="none" /><button
                                                                    type="button"
                                                                    class="cvchoice">
                                                                    <span
                                                                        style="
                                                                                display: flex;
                                                                            "><svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="16"
                                                                            height="16"
                                                                            fill="none"
                                                                            viewBox="0 0 16 16">
                                                                            <path
                                                                                fill="#222"
                                                                                fill-rule="evenodd"
                                                                                d="M13.472 5.195c.26.26.26.683 0 .943l-5 5a.667.667 0 0 1-.943 0l-5-5a.667.667 0 1 1 .943-.943L8 9.724l4.529-4.529c.26-.26.682-.26.943 0Z"
                                                                                clip-rule="evenodd">
                                                                            </path>
                                                                        </svg></span>
                                                                </button>
                                                            </div>
                                                            <div
                                                                class="etc-content-list hidden">

                                                                <ul>
                                                                    <li>
                                                                        <div
                                                                            class="etc-content-elements">
                                                                            <label
                                                                                for="category9999"
                                                                                class="etccontentvalue">선택
                                                                                안함</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div
                                                                            class="etc-content-elements">
                                                                            <label
                                                                                for=""
                                                                                class="etccontentvalue">자격증</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div
                                                                            class="etc-content-elements">
                                                                            <label
                                                                                for=""
                                                                                class="etccontentvalue">대외활동</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div
                                                                            class="etc-content-elements">
                                                                            <label
                                                                                for=""
                                                                                class="etccontentvalue">어학</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div
                                                                            class="etc-content-elements">
                                                                            <label
                                                                                for=""
                                                                                class="etccontentvalue">수상이력</label>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="text-wrap">
                                                            <input
                                                                maxlength="255"
                                                                placeholder="관련기관을 입력해주세요"
                                                                type="text"
                                                                value=""
                                                                name="etcHistories.0.etcOrganization" />
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="etctext1 etctext4">
                                                        <textarea
                                                            name="etcHistories.0.etcInfo"
                                                            placeholder="상세내용/점수 및 수준을 작성해주세요"
                                                            class="etcbottomtext"
                                                            style="
                                                                    height: 22px;
                                                                "></textarea>
                                                    </div>
                                                </div>
                                            `;
    etcAddArea.insertBefore(newEditArea, etcAddButton);
    profileDownBtn.forEach((buttons) => {
        if (etcAddArea.contains(buttons)) {
            buttons.removeAttribute("disabled");
        }
    });

    profileUpBtn.forEach((buttons) => {
        if (etcAddArea.contains(buttons)) {
            buttons.removeAttribute("disabled");
        }
    });

    profileDeleteButton.forEach((buttons) => {
        if (etcAddArea.contains(buttons)) {
            buttons.removeAttribute("disabled");
        }
    });
});

etcAddArea.addEventListener("input", (e) => {
    if (e.target && e.target.matches("textarea.etcbottomtext")) {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px"; // 내용에 맞게 높이 조정
    }
});

etcAddArea.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.profile-delete-button")) {
        e.target.closest("div.membercareer-content").remove();
        //  학력 정보가 한 개만 남았을 때에는 clicked 속성이 없어져야 함.

        if (careerDiv.length === 35) {
            memberCareerEditMark.forEach((mark) => {
                mark.classList.remove("clicked");
            });
            
        }
    }
});
etcAddArea.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.profile-up-button")) {
        const currentDiv = e.target.closest("div.membercareer-content");
        const previousDiv = currentDiv.previousElementSibling;
        etcAddArea.insertBefore(currentDiv, previousDiv);
    }
});

etcAddArea.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.profile-down-button")) {
        const currentDiv = e.target.closest("div.membercareer-content");
        const nextDiv = currentDiv.nextElementSibling;
        etcAddArea.insertBefore(nextDiv, currentDiv);
    }
});

etcAddArea.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.cvchoice svg")) {
        e.target.closest("div").nextElementSibling.classList.toggle("hidden");
    }
});

etcAddArea.addEventListener("click", (e) => {
    if (e.target && e.target.matches("label.etccontentvalue")) {
        const temp = e.target.closest(
            "div.etc-content-list"
        ).previousElementSibling;
        const etcChoiceSpan = temp.firstElementChild;
        if (e.target.innerText != "선택 안함") {
            etcChoiceSpan.innerText = e.target.innerText;
        }
        e.target.closest("div.etc-content-list").classList.add("hidden");
    }
});

const etcDiv = etcAddArea.querySelectorAll("div.etc-content");
etcAddArea.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.profile-delete-button")) {
        e.target.closest("div.etc-content").remove();
        //  학력 정보가 한 개만 남았을 때에는 clicked 속성이 없어져야 함.

        if (etcDiv.length === 1) {
            memberEtcEditMark.forEach((mark) => {
                mark.classList.remove("clicked");
            });
            profileDownBtn.forEach((buttons) => {
                if (etcAddArea.contains(buttons)) {
                    buttons.setAttribute("disabled", "true");
                }
            });

            profileUpBtn.forEach((buttons) => {
                if (etcAddArea.contains(buttons)) {
                    buttons.setAttribute("disabled", "true");
                }
            });

            profileDeleteButton.forEach((buttons) => {
                if (etcAddArea.contains(buttons)) {
                    buttons.setAttribute("disabled", "true");
                }
            });
        }
    }
});
etcAddArea.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.profile-up-button")) {
        const currentDiv = e.target.closest("div.etc-content");
        const previousDiv = currentDiv.previousElementSibling;
        etcAddArea.insertBefore(currentDiv, previousDiv);
    }
});

etcAddArea.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.profile-down-button")) {
        const currentDiv = e.target.closest("div.etc-content");
        const nextDiv = currentDiv.nextElementSibling;
        etcAddArea.insertBefore(nextDiv, currentDiv);
    }
});

window.addEventListener("click", (e) => {
    if (e.target && e.target.matches("input.noexpire-input")) {
        const duringtemp =
            e.target.closest("div.no-expire").previousElementSibling;
        const careerContent = document.querySelectorAll(".etc-content");
        if (e.target.checked) {
            duringtemp.lastElementChild.lastElementChild.classList.add(
                "read-only"
            );
            duringtemp.lastElementChild.lastElementChild.firstElementChild.disabled =
                "true";
            duringtemp.lastElementChild.lastElementChild.lastElementChild.disabled =
                "true";
        } else {
            duringtemp.lastElementChild.lastElementChild.classList.remove(
                "read-only"
            );
            duringtemp.lastElementChild.lastElementChild.firstElementChild.disabled =
                "false";
            duringtemp.lastElementChild.lastElementChild.lastElementChild.disabled =
                "false";
        }
    }
});

// 자소서
const applicantAddButton = document.getElementById("applicant-add-button");
const applicantAddArea = document.querySelector("div.applicant");
const memberApplicantEditMark =
        document.querySelectorAll("div.applicant-mark");
applicantAddButton.addEventListener("click", () => {
    
    let newEditArea = document.createElement("div");
    memberApplicantEditMark.forEach((mark) => {
        mark.classList.add("clicked");
    });

    newEditArea.className = "applicant-wrapper";
    newEditArea.innerHTML = `<div class="applicant-mark"></div>
<div class="applicant-content">
    <div class="applicant-text-first">
        <div class="applicant-text1 applicant-text2 pr-text">
            <input placeholder="소제목을 입력해주세요" maxlength="255" type="text" value="" name="selfIntroductions.0.selfTitle">
        </div>
        <div class="profile-order-control">
            <div class="order-inner">
                <div class="order-buttons">
                    <button class="profile-down-button"  type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                            <path fill="#222" fill-rule="evenodd" d="M13.472 5.195c.26.26.26.683 0 .943l-5 5a.667.667 0 0 1-.943 0l-5-5a.667.667 0 1 1 .943-.943L8 9.724l4.529-4.529c.26-.26.682-.26.943 0Z" clip-rule="evenodd"></path>
                        </svg></button><button class="profile-up-button"  type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                            <path fill="#000" fill-rule="evenodd" d="M3.793 16.207a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 0 1 1.414 0l7.5 7.5a1 1 0 0 1-1.414 1.414L12 9.414l-6.793 6.793a1 1 0 0 1-1.414 0Z" clip-rule="evenodd"></path>
                        </svg></button><button class="profile-delete-button"  type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="#C4C4C4" fill-rule="evenodd" d="M6.25 5.5a3 3 0 0 1 3-3h5.5a3 3 0 0 1 3 3v1.25H21a1 1 0 1 1 0 2h-1.25v9.75a3 3 0 0 1-3 3h-9.5a3 3 0 0 1-3-3V8.75H3a1 1 0 0 1 0-2h3.25V5.5Zm2 1.25h7.5V5.5a1 1 0 0 0-1-1h-5.5a1 1 0 0 0-1 1v1.25Zm-2 2v9.75a1 1 0 0 0 1 1h9.5a1 1 0 0 0 1-1V8.75H6.25Zm3.5 3a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0v-2.5a1 1 0 0 1 1-1Zm5.5 1a1 1 0 1 0-2 0v2.5a1 1 0 1 0 2 0v-2.5Z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="applicant-text1 applicant-text3">
        <textarea name="selfIntroductions.0.selfContent" placeholder="자기소개서 내용을 작성해주세요" class="applicant-text-second" style="
                    height: 22px;
                "></textarea><span class="textamount">0 자</span>
    </div>
</div>`;
    applicantAddArea.insertBefore(newEditArea, applicantAddButton);
    profileDownBtn.forEach((buttons) => {
        if (applicantAddArea.contains(buttons)) {
            buttons.removeAttribute("disabled");
        }
    });

    profileUpBtn.forEach((buttons) => {
        if (applicantAddArea.contains(buttons)) {
            buttons.removeAttribute("disabled");
        }
    });

    profileDeleteButton.forEach((buttons) => {
        if (applicantAddArea.contains(buttons)) {
            buttons.removeAttribute("disabled");
        }
    });
});

applicantAddArea.addEventListener("input", (e) => {
    if (e.target && e.target.matches("textarea.applicant-text-second")) {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px"; // 내용에 맞게 높이 조정
    }
});

const applicantDiv = applicantAddArea.querySelectorAll("div.applicant-wrapper");
applicantAddArea.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.profile-delete-button")) {
        e.target.closest("div.applicant-wrapper").remove();
        //  학력 정보가 한 개만 남았을 때에는 clicked 속성이 없어져야 함.

        if (applicantDiv.length === 1) {
            memberApplicantEditMark.forEach((mark) => {
                mark.classList.remove("clicked");
            });
            profileDownBtn.forEach((buttons) => {
                if (applicantAddArea.contains(buttons)) {
                    buttons.setAttribute("disabled", "true");
                }
            });

            profileUpBtn.forEach((buttons) => {
                if (applicantAddArea.contains(buttons)) {
                    buttons.setAttribute("disabled", "true");
                }
            });

            profileDeleteButton.forEach((buttons) => {
                if (applicantAddArea.contains(buttons)) {
                    buttons.setAttribute("disabled", "true");
                }
            });
        }
    }
});
applicantAddArea.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.profile-up-button")) {
        const currentDiv = e.target.closest("div.applicant-wrapper");
        const previousDiv = currentDiv.previousElementSibling;
        applicantAddArea.insertBefore(currentDiv, previousDiv);
    }
});

applicantAddArea.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.profile-down-button")) {
        const currentDiv = e.target.closest("div.applicant-wrapper");
        const nextDiv = currentDiv.nextElementSibling;
        applicantAddArea.insertBefore(nextDiv, currentDiv);
    }
});

const applicantTextArea = document.querySelectorAll(".applicant-text-second")
const textCount = document.querySelectorAll("span.textamount")

applicantTextArea.forEach((textarea) =>{
    textCount.forEach((count) =>{
        textarea.addEventListener('change',() =>{
            if(count.parentNode.contains(textarea)){
                count.innerText = `${textarea.value.length} 자`
            }
        })
    })
    
})


// 아래 바

const previewButton = document.querySelector("button.previewbutton");
const saveButton = document.querySelector("button.savebutton");
saveButton.addEventListener("click", () => {
    alert("이력서가 저장되었습니다.");

    // alert('확인이 필요한 항목이 있습니다. 다시 확인 후 시도해주세요.')
    // 필요 조건이 충족되지 않을 경우 출력할 메시지.
});

previewButton.addEventListener("click", () => {
    window.open(
        "popup.html",
        "popupWindow",
        "width:759,height:1822,scrollbars=yes"
    );
});

// 바닥 툴팁 물음표 버튼 누르면 툴팁 뜨도록 하기.

const bottomToolTip = document.querySelector("div.bottom-tooltip");
const bottomToolTipBtn = document.querySelector("div.bottomquestion");
bottomToolTipBtn.addEventListener("click", () => {
    bottomToolTip.classList.toggle("hidden");
    bottomToolTipBtn.classList.toggle("clicked");
});

const bottomToolTipClose = document.querySelector(
    "button.bottom-tooltip-text1-btn"
);

bottomToolTipClose.addEventListener("click", () => {
    bottomToolTip.classList.add("hidden");
});
