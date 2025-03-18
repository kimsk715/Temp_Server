window.addEventListener("pageshow", function (event) {
    if(event.persisted){
        location.reload();
    }
});
const resumeLayout = (() => {
    const showList = async (resumeListData) => {
        const tbody = document.querySelector("#resume-con3")

        let text =``;
        resumeListData.forEach((resume) => {
            text += `
                        <li class="resume-content3">
                            <div class="resume-content-inner4">
                                <div class="resume-content-top">
                                    <button type="button" class="resumemanage">
                                        <span style="display: flex"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill="#A4A4A4" fill-rule="evenodd"
                                                    d="M10 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
                                                    clip-rule="evenodd"></path>
                                            </svg></span>
                                    </button>
                                    <div class="managemenu-wrapper hidden">
                                        <ul>
                                            <li><button type="button">다운로드</button></li>
                                            <li><button type="button">이력서 복사</button></li>
                                            <li><button class="warning" type="button" id="${resume.id}">이력서 삭제</button></li>
                                        </ul>
                                    </div>
                                    <h2>
                                        <a href="/resume/edit">${resume.memberName}</a>
                                    </h2>
                                    <a href="/resume/edit">
                                        <ul>
                                            <li class="resume-content-element">
                                                기술스택
                                            </li>
                                            <li class="resume-content-element">
                                                학력
                                            </li>
                                            <li class="resume-content-element">
                                                경력/프로젝트
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                                <div class="resume-content-bottom">
                                    <div>
                                        <button type="button" class="resume-open-button"></button>
                                        <span>비공개</span>
                                        <div class="resume-question">
                                            <div class="resume-question-inner"></div>
                                        </div>
                                        <div class="resumeopen-tooltip1 tooltip-message hidden"><button type="button"><span
                                                    style="display: flex;"><svg xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24">
                                                        <g fill="none" fill-rule="evenodd">
                                                            <path d="M0 0h24v24H0z"></path>
                                                            <path stroke="#C4C4C4" stroke-linejoin="round"
                                                                stroke-width="1.5" d="M18 6 6 18M6 6l12 12"></path>
                                                        </g>
                                                    </svg></span></button><strong>모든 정보가 비공개</strong> 됩니다.<br>입사지원한
                                            기업에서만<br>이력서를 확인할 수 있습니다.</div>
                                        <div class="resumeopen-tooltip2 tooltip-message hidden"><button type="button"><span
                                                    style="display: flex;"><svg xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24">
                                                        <g fill="none" fill-rule="evenodd">
                                                            <path d="M0 0h24v24H0z"></path>
                                                            <path stroke="#C4C4C4" stroke-linejoin="round"
                                                                stroke-width="1.5" d="M18 6 6 18M6 6l12 12"></path>
                                                        </g>
                                                    </svg></span></button>이력서 열람서비스를<br>준비 중입니다. 이력서 공개하시면<br> 추후
                                            <strong>이력서 열람 서비스를<br>통한 면접제안</strong>을 받으실 수 있습니다.</div>

                                    </div>
                                    <span>${resume.createdDate} 등록</span>
                                </div>
                            </div>
                        </li>
                        `
        })

        text += `
                        <li class="resume-content3">
                            <div class="new-resume">
                                <a href="/resume/insert"> 
                                <button type="button">
                                    <span style="display: flex"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                            height="20" fill="none" viewBox="0 0 20 20">
                                            <path fill="#00DD6D" fill-rule="evenodd"
                                                d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10ZM9 9V5.5h2V9h3.5v2H11v3.5H9V11H5.5V9H9Z"
                                                clip-rule="evenodd"></path>
                                        </svg></span>
                                </button>
                                </a>
                                <p>새로운 이력서를 추가해보세요!</p>
                            </div>
                        </li>
                    `
        if (tbody) {
            tbody.innerHTML += text;
            text="";
        } else {
            console.error("resumeList 요소를 찾을 수 없습니다.");
        }
    }



    return{showList: showList}
})();