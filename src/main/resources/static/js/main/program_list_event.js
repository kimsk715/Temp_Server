// 프로그램 모달 영역

// const keywordInput = document.querySelector("div.announce-filter div.search-box input[name=keyword]");
// const programWrapper = document.querySelector(".announce-management");

// keywordInput.addEventListener("keyup",(e)=>{
//     if(e.key === 'Enter'){
//         const keyword = e.target.value;
//         if(keyword){
//             const param = {search : {date : dateType, status : statusType, keyword : keyword}}
//             programService.getAllProgram(programLayout.showList, param);
//         }
//     }
// })
const searchCategories = document.querySelectorAll(".listJobBtnWrap button")

searchCategories.forEach((searchCategory) => {
    searchCategory.addEventListener("click", (e) => {
        // 클릭이후 업데이트 된 aria-pressed 값을 반영하기 위해 setTimeout 사용
        // 전체를 가져와서 filter를 해서 값을 가져오기

        setTimeout(() => {
            const categoryDatas = [];
            const categories = document.querySelectorAll(".listJobBtnWrap button[aria-pressed='true']");
            categories.forEach((category) => {
                categoryDatas.push(category.value);
            })
            const param = {search: {category: categoryDatas}}
            console.log(categoryDatas);
            programListService.getAllProgramList(param);
        }, 0)
    })

})

const getCategories = () =>{
    searchCategories.forEach((searchCategory) => {
        searchCategory.addEventListener("click", (e) => {
            // 클릭이후 업데이트 된 aria-pressed 값을 반영하기 위해 setTimeout 사용
            setTimeout(() => {
                const categoryDatas = [];
                const categories = document.querySelectorAll(".listJobBtnWrap button[aria-pressed='true']");
                categories.forEach((category) => {
                    categoryDatas.push(category.value);
                })
                const param = {search: {category: categoryDatas}}


            }, 0)
        })
    })
}

