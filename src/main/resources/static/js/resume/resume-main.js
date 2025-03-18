// const righttopbutton = document.querySelector("div.header-right-user7");
// const righttopmenu = document.querySelector("div.header-right-menu8");
// NodeList.prototype.addEventListener = Array.prototype.addEventListener;
//
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


// document.addEventListener('DOMContentLoaded', async (e) => {
//      await resumeSelectService.getResumeList(resumeLayout.showList)
// })

// 모바일 검색창
const searchBoxBlink = document.querySelectorAll("div.search-box");
const searchBoxHidden = document.querySelectorAll("div.searchbox-hidden");
const temp = document.querySelector("div.searchbox-hidden-content");
const mediaSearchBtn = document.querySelector("button.media-searchbtn");
const topSearchBox = document.querySelector("div.searchbox-top");
const pcHiddenBox = document.querySelector(
    "oldtopSearchBox > div.searchbox-hidden"
);

const oldtopSearchBox = document.querySelector("div.searchbox-top.old");
const newtopSearchBox = document.querySelector("div.searchbox-top.formedia");
const oldSearchBoxOnClick = document.querySelector("div.searchbox-onclick.old");
const newSearchBoxOnClick = document.querySelector(
    "div.searchbox-onclick.formedia"
);
// 창 열릴 때 초기 실행용
searchBoxHidden.forEach((hiddenArea) => {
    searchBoxBlink.forEach((blinkArea) => {
        if (window.innerWidth < 1080) {
            if (oldtopSearchBox.innerHTML != "") {
                hiddenArea.classList.remove("hidden");
                newtopSearchBox.innerHTML += oldtopSearchBox.innerHTML;
                oldtopSearchBox.innerHTML = "";
            }
        } else if (window.innerWidth >= 1080) {
            if (newtopSearchBox.innerHTML != "") {
                pcHiddenBox.style.display = "none";
                oldtopSearchBox.innerHTML += newtopSearchBox.innerHTML;
                newtopSearchBox.innerHTML = "";
                hiddenArea.classList.add("hidden");
            }
        }
    });
});
//  창의 사이즈(가로)가 바뀔 때 감응하는 코드
window.addEventListener("resize", () => {
    searchBoxHidden.forEach((hiddenArea) => {
        searchBoxBlink.forEach((blinkArea) => {
            if (window.innerWidth < 1080) {
                if (oldtopSearchBox.innerHTML != "") {
                    hiddenArea.classList.remove("hidden");
                    newtopSearchBox.innerHTML += oldtopSearchBox.innerHTML;
                    oldtopSearchBox.innerHTML = "";
                }
            } else if (window.innerWidth >= 1080) {
                if (newtopSearchBox.innerHTML != "") {
                    newSearchBoxOnClick.style.display = "none";
                    oldtopSearchBox.innerHTML += newtopSearchBox.innerHTML;
                    newtopSearchBox.innerHTML = "";
                    pcHiddenBox.style.display = "none";
                }
            }
        });
    });
});

//  가로 길이에 따라 열리는 검색창이 다르게 작동하는 코드.
//  모바일 --> PC로 변경될 때 검색창이 열린 상태로 고정되는 오류가 있음.
document.addEventListener("click", (e) => {
    searchBoxHidden.forEach((hiddenArea) => {
        searchBoxBlink.forEach((blinkArea) => {
            const screenWidth = window.innerWidth;
            hiddenArea.classList.add("hidden");
            if (screenWidth >= 1080) {
                hiddenArea.classList.add("hidden");
                if (blinkArea.contains(e.target)) {
                    hiddenArea.classList.remove("hidden");
                } else if (!hiddenArea.contains(e.target)) {
                    hiddenArea.classList.add("hidden");
                }
            } else if (screenWidth < 1080) {
                if (mediaSearchBtn.contains(e.target)) {
                    hiddenArea.classList.remove("hidden");
                    newtopSearchBox.style.display = "block";
                    newSearchBoxOnClick.style.display = "block";
                } else if (!newtopSearchBox.contains(e.target)) {
                    hiddenArea.classList.add("hidden");
                    newtopSearchBox.style.display = "none";
                    newSearchBoxOnClick.style.display = "none";
                }
            }
        });
    });
});

const addfileButton = document.getElementById("addfilebutton");
const emptyfileArea = document.querySelector(".empty-file");
const fileaddArea = document.querySelector("ul.file-container");
const input = document.getElementById("attach");

addfileButton.addEventListener("click", () => {
    input.click();
});

input.addEventListener("change", (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    var newFile = document.createElement("li");
    newFile.innerHTML = `<span class="file-type">PDF</span>
                    <span class="file-title">${[file][0].name}</span>
                    <span class="file-create">2025.02.06 등록</span>
                    <button type="button" class="file-remove">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill="#C4C4C4"
                                fill-rule="evenodd"
                                d="M4.667 2h6.666v2.667H14V6h-1.333v8H3.333V6H2V4.667h2.667V2ZM6 4.667h4V3.333H6v1.334ZM4.667 6v6.667h6.666V6H4.667ZM6 10.667V8h1.333v2.667H6ZM8.667 8v2.667H10V8H8.667Z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>`;
    reader.addEventListener("load", (e) => {
        const path = e.target.result;
        if (path.includes("pdf")) {
            fileaddArea.append(newFile);
            emptyfileArea.classList.add("hidden")
        }
    });
    const fileRemoveBtn = newFile.querySelector(".file-remove")
    const amountLi = newFile.querySelectorAll("li")
    fileRemoveBtn.addEventListener('click', (e) => {
        e.target.closest('li').remove()
        if (amountLi.length < 1) {
            emptyfileArea.classList.remove("hidden")
        }

    })
});

window.addEventListener("click",(e) =>{
    if(e.target && e.target.matches("button.resume-open-button")){
        const toggleText = e.target.nextElementSibling
        if (toggleText.innerText == "비공개") {
        e.target.classList.add("public");
        alert("이력서 공개로 설정되었습니다. 추후 이력서 열람서비스를 통한 면접 제안을 받으실 수 있습니다.")
        toggleText.innerText = "공개";

    } else {
        e.target.classList.remove("public");
        toggleText.innerText = "비공개";
    }
    }
})


window.addEventListener('click',(e) =>{
    if(e.target && e.target.matches("div.tooltip-message button svg")){
        const temp = e.target.closest("div")
        temp.classList.add("hidden")
        const temp2 = temp.parentElement.querySelector('div:first-of-type').lastElementChild
        console.log(temp2)
        temp2.classList.remove("clicked")
    }
})

window.addEventListener('click',(e) =>{
    const toggleText = e.target.parentElement.previousElementSibling
    if(e.target && e.target.matches("div.resume-question-inner")){
        if (toggleText.innerText == "비공개") {
        e.target.parentElement.nextElementSibling.classList.toggle("hidden")
        e.target.parentElement.nextElementSibling.nextElementSibling.classList.add("hidden")
            if(e.target.classList.contains("clicked")){
                e.target.classList.remove("clicked")
            }
            else{
                e.target.classList.add("clicked")
            }
        
        } else {
            e.target.parentElement.nextElementSibling.classList.add("hidden")
        e.target.parentElement.nextElementSibling.nextElementSibling.classList.toggle("hidden")
        if(e.target.classList.contains("clicked")){
                e.target.classList.remove("clicked")
            }
            else{
                e.target.classList.add("clicked")
            }
    }
    }
})


const newResume = document.querySelector("div.new-resume")
const resumeArea = document.querySelector("ul.resume-content-list2")
const addResume = resumeArea.lastElementChild
const resumeManageBtn = document.querySelectorAll(".resumemanage")
const amountResume = resumeArea.querySelectorAll("li.resume-content3")
const warningBtn = resumeArea.querySelectorAll("button.warning")

// newResume.addEventListener('click', () => {
//     const newResumeHtml = document.createElement("li")
//     newResumeHtml.className = "resume-content3"
//     newResumeHtml.innerHTML = `<div class="resume-content-inner4">
//                                 <div class="resume-content-top">
//                                     <button type="button" class="resumemanage">
//                                         <span style="display: flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                                                 <path fill="#A4A4A4" fill-rule="evenodd" d="M10 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" clip-rule="evenodd"></path>
//                                             </svg></span>
//                                     </button>
//                                     <div class="managemenu-wrapper hidden">
//                                         <ul>
//                                             <li><button type="button">다운로드</button></li>
//                                             <li><button type="button">이력서 복사</button></li>
//                                             <li><button class="warning" type="button">이력서 삭제</button></li>
//                                         </ul>
//                                     </div>
//                                     <h2>
//                                         <a href="/resume/468095">회원명이력서_SYSDATE</a>
//                                     </h2>
//                                     <a href="/resume/468095">
//                                         <ul>
//                                             <li class="resume-content-element">
//                                                 기술스택
//                                             </li>
//                                             <li class="resume-content-element">
//                                                 학력
//                                             </li>
//                                             <li class="resume-content-element">
//                                                 경력/프로젝트
//                                             </li>
//                                         </ul>
//                                     </a>
//                                 </div>
//                                 <div class="resume-content-bottom">
//                                     <div>
//                                         <button type="button" class="resume-open-button"></button><span>비공개</span>
//                                         <div class="resume-question">
//                                             <div class="resume-question-inner"></div>
//                                         </div>
//                                         <div class="resumeopen-tooltip1 tooltip-message hidden"><button type="button"><span
//                                                     style="display: flex;"><svg xmlns="http://www.w3.org/2000/svg"
//                                                         width="24" height="24">
//                                                         <g fill="none" fill-rule="evenodd">
//                                                             <path d="M0 0h24v24H0z"></path>
//                                                             <path stroke="#C4C4C4" stroke-linejoin="round"
//                                                                 stroke-width="1.5" d="M18 6 6 18M6 6l12 12"></path>
//                                                         </g>
//                                                     </svg></span></button><strong>모든 정보가 비공개</strong> 됩니다.<br>입사지원한
//                                             기업에서만<br>이력서를 확인할 수 있습니다.</div>
//                                         <div class="resumeopen-tooltip2 tooltip-message hidden"><button type="button"><span
//                                                     style="display: flex;"><svg xmlns="http://www.w3.org/2000/svg"
//                                                         width="24" height="24">
//                                                         <g fill="none" fill-rule="evenodd">
//                                                             <path d="M0 0h24v24H0z"></path>
//                                                             <path stroke="#C4C4C4" stroke-linejoin="round"
//                                                                 stroke-width="1.5" d="M18 6 6 18M6 6l12 12"></path>
//                                                         </g>
//                                                     </svg></span></button>이력서 열람서비스를<br>준비 중입니다. 이력서 공개하시면<br> 추후
//                                             <strong>이력서 열람 서비스를<br>통한 면접제안</strong>을 받으실 수 있습니다.</div>
//                                     </div>
//                                     <span>2025.01.30 등록</span>
//                                 </div>
//                             </div>`
//     resumeArea.insertBefore(newResumeHtml,addResume)
//
// })

//
warningBtn.forEach((buttons) =>{
    newResume.addEventListener('click', ()=>{
        buttons.removeAttribute("disabled")
    })
})

window.addEventListener('click',(e)=>{
        if(e.target && e.target.matches("button.warning")){
            e.target.closest('li.resume-content3').remove()
        }
})
// 원래 있던 ul 태그를 클릭하면?
resumeArea.addEventListener('click',(e)=>{
    var temp = e.target.closest("button").nextElementSibling
    console.log("temp :" + temp)
    if(e.target && e.target.matches("button.resumemanage svg")){
        temp.classList.toggle("hidden")
    }
})



