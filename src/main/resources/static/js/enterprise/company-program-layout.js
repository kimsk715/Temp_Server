

const companyProgramLayout = (() => {
    const showList = async (programList) => {

        const columnWait = document.querySelector("#wait");
        const columnEnd = document.querySelector("#end");
        const columnWork = document.querySelector("#work");
        const columnWrite = document.querySelector("#write");

        let wait = '';
        let end = '';
        let work = '';
        let write = '';
        await programList.selectProgramWorkByCompanyId.forEach((program) => {
        wait += `
                    <div class="card ">
                        <div>${program.programName}</div>
                        <div>${program.createdDate}</div>
                        <div class="card-bottom">
                            <div class="ongoing">진행중</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 32 32">
                                <path fill="#fff" fill-rule="evenodd" d="M22.221 4.667a2.667 2.667 0 0 0-3.77 0l-11.602 11.6c-.5.501-.781 1.18-.781 1.887v3.18A2.667 2.667 0 0 0 8.734 24h3.18c.707 0 1.386-.281 1.886-.781L25.4 11.617a2.667 2.667 0 0 0 0-3.77l-3.18-3.18ZM8.734 18.153l11.602-11.6 3.18 3.179-11.602 11.601h-3.18v-3.18ZM5.334 26a1.333 1.333 0 1 0 0 2.666h21.333a1.333 1.333 0 0 0 0-2.666H5.333Z" clip-rule="evenodd"></path>
                            </svg>
                            <button>수정</button>
                        </div>
                    </div>
`
        })
        programList.selectProgramWaitByCompanyId.forEach((program) => {
            work += `
                     <div class="card ">
                        <div>${program.programName}</div>
                        <div>${program.createdDate}</div>
                        <div class="card-bottom">
                            <div class="pending">승인 요청중</div>
                        </div>
                    </div>
                    `
        })
        programList.selectProgramWriteByCompanyId.forEach((program) => {
            end += `
                        <div class="card ">
                        <div>${program.programName}</div>
                        <div>${program.createdDate}</div>
                        <div class="card-bottom">
                            <div class="writing">작성중</div>

                        </div>
                    </div>
                    `
        })
        programList.selectProgramEndByCompanyId.forEach((program) => {
            end += `<div class="card ">
                        <div>${program.programName}</div>
                            <div>2021.07.28</div>
                        <div class="card-bottom">
                            <div class="closed">마감</div>

                        </div>
                    </div>
                        
                        `
    })

        columnWork.innerHTML += work;
        columnWait.innerHTML += wait;
        columnWrite.innerHTML += write;
        columnEnd.innerHTML += end;
}
return {showList: showList}
})();