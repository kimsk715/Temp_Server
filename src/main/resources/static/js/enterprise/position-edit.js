

const pendingButton = document.querySelector(".approve")
pendingButton.addEventListener("click", () =>{
    alert("승인이 요청되었습니다.")
})

const tempSaveButton = document.querySelector(".save")

tempSaveButton.addEventListener("click", () =>{
    alert("저장되었습니다.");
})

const tempDeleteButton = document.querySelector(".delete")

tempDeleteButton.addEventListener("click", () =>{
    confirm("템프를 삭제하시겠습니까?");
    // if(confirm){
    //   // 템프 삭제하고, 템프 목록으로 돌아가기
    // }
    // else{
    //   // 창에 그대로 있기.
    // }
    // 나중에 서버까지 구축할 때 만들기.
})