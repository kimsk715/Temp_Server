const appliedLayout = (() => {
    const showlist = async (applyList, page ) => {
        let tbody;
        let text = '';
        applyList.forEach((list) => {
            if(list.programEndDate === "0" || list.programEndDate.includes("-") ){
                list.programEndDate = "day";
            }

            if((applyList[0].applyMemberStatus) === "지원완료"){
                tbody = document.getElementById("appliedList-wrap")
                text += `
                <li class="contentlist">
                    <div class="applied_item">
                        <div class="applied_item_field">
                            <a rel="noreferrer" target="_blank" href="/position/42110">
                                <dl>
                                    <dt>
                                        <div>${list.companyName}</div>
                                        <span class="datespan">D-${list.programEndDate}</span>
                                    </dt>
                                    <dd class="applications_main_title">
                                        <span>${list.programName}</span>
                                    </dd>
                                </dl>
                            </a>
                        </div>
                        <div class="content-apply-div">
                            <div class="apply-delete-div">
                                <button class="apply-delete-button">삭제</button>
                            </div>
                        </div>
                    </div>
                </li>
            `;
            }
            else if((applyList[0].applyMemberStatus) === "최종합격"){
                tbody = document.getElementById("hiredList-wrap")
                text += `<li class="contentlist">
                    <div class="applied_item">
                        <div class="applied_item_field">
                            <a rel="noreferrer" target="_blank" href="/position/42110">
                                <dl>
                                    <dt>
                                        <div>${list.companyName}</div>
                                        <span class="datespan">D-${list.programEndDate}</span>
                                    </dt>
                                    <dd class="applications_main_title">
                                        <span>${list.programName}</span>
                                    </dd>
                                </dl>
                            </a>
                        </div>
                        <div class="content-apply-div">
                            <div class="apply-pay-div">
                                <button class="apply-pay-button" value="${list.id}">결제</button>
                            </div>
                            <div class="apply-delete-div">
                                <button class="apply-delete-button">삭제</button>
                            </div>
                        </div>
                    </div>
                </li>`
            }
            else{
                tbody = document.getElementById("rejectedList-wrap")
                text += `
                <li class="contentlist">
                    <div class="applied_item">
                        <div class="applied_item_field">
                            <a rel="noreferrer" target="_blank" href="/position/42110">
                                <dl>
                                    <dt>
                                        <div>${list.companyName}</div>
                                        <span class="datespan">D-${list.programEndDate}</span>
                                    </dt>
                                    <dd class="applications_main_title">
                                        <span>${list.programName}</span>
                                    </dd>
                                </dl>
                            </a>
                        </div>
                        <div class="content-apply-div">
                            <div class="apply-delete-div">
                                <button class="apply-delete-button">삭제</button>
                            </div>
                        </div>
                    </div>
                </li>
            `;
            }
        });

        tbody.innerHTML = text;
    };

    return { showlist: showlist };
})();
