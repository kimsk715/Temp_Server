// const programListLayout = (() =>{
//     const showList = async (programListData) =>{
//         const programListWrapper = document.querySelector(".mainContentsList");
//         let text = ``;
//         programListData.forEach((program) => {
//             text += `
//                 <div class="mainContentCard">
//                     <a href="/program/detail/${program.id}" id="card-wrapper" class="mainContentCardWrapper">
//                         <div class="imgBox">
//                             <img
//                                     src="${program.programThumbnailPath}"
//                                     class="img"
//                             />
//                             <div class="imgDdayBadge">
//                                 <span class="dayLeft" th:text="|D-${program.dDay}|"></span>
//                             </div>
//                             <div class="count">
//                                 <button type="button" class="scrapButton"
//                                         id="button-${program.id}"
//                                         aria-pressed="${program.scrapStatus}"
//                                         th:attr="onclick=|toggleScrap(${program.id})|, aria-pressed=${isScrapped}">
//                                     <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="24"
//                                             height="24"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             class="scrapSVG"
//                                     >
//                                         <path
//                                                 fill="#000000"
//                                                 fill-rule="evenodd"
//                                                 d="M10.725 14.71a2 2 0 0 1 2.55 0l3.975 3.289V5H6.75v12.999l3.975-3.29ZM4.75 20.123V5a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v15.124a1 1 0 0 1-1.638.77L12 16.25l-5.612 4.645a1 1 0 0 1-1.638-.77Z"
//                                                 clip-rule="evenodd"
//                                                 class="scrapPath"
//                                         ></path>
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>
//                         <div class="contentText">
//                             <div class="companyName">
//                                 <span th:text="${program.companyName}"></span>
//                             </div>
//                             <h2 class="positionCardTitle" th:text="${program.programName}">
//                             </h2>
//                             <!-- 요구 스킬을 포지션 카테고리로 바꿔도? -->
//                             <ul class="requiredSkill">
//                                 <li>Spring</li>
//                                 <li>· JavaScript</li>
//                                 <li>· jQuery</li>
//                                 <li>· Java</li>
//                             </ul>
//                             <ul class="companyLocation">
//                                 <li>서울 금천구</li>
//                                 <li>경력 5~15년</li>
//                             </ul>
//                         </div>
//                     </a>
//                 </div>
//                `;
//         })
//         programListWrapper.innerHTML = text;
//         text=``;
//     }
//
//
//
//     return {showList : showList};
// })();
