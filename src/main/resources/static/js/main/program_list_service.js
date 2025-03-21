// const programListService= (() => {
//     const getAllProgramList = async(param ={}, keyword) =>{
//         let category = "";
//         let search = param.search;
//
//         if(search){
//             category = search.category;
//         }
//         console.log(category)
//         let path = `/program/lists`;
//
//         if(keyword){
//             path += `?keyword=${keyword}`;
//
//         }
//         if(category.length !== 0){
//            if(!keyword) {
//                path += `?`;
//
//            }
//             category.forEach((data) => {
//                 if(data !== "all") {
//                     path += `categories=${data}&`;
//
//                 }
//             })
//             path = path.slice(0, -1);
//
//         }
//         console.log(path)
//         const response = await fetch(path)
//
//     }
//     return {getAllProgramList: getAllProgramList};
// })();
// // 검색 키워드 + 카테고리 필터링
//
