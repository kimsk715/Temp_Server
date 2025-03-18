const appliedLayout = (() => {
    const showlist = async (applyList, page = 1) => {
        const tbody = document.getElementById("appliedList-wrap");

        let text = '';
        console.log(applyList);
        applyList.forEach((list) => {
            text += `
                <li class="contentlist">
                    <div class="applied_item">
                        <div class="applied_item_field">
                            <a rel="noreferrer" target="_blank" href="/position/42110">
                                <dl>
                                    <dt>
                                        <div>${list.companyName}</div>
                                        <span class="datespan">|D-${list.programEndDate}|</span>
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
        });

        tbody.innerHTML = text;
    };

    return { showlist: showlist };
})();
