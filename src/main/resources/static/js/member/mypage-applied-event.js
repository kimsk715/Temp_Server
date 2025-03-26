const applyStatus = document.querySelectorAll("a.apply-status");

// 게시글 목록 불러오기
// service 에서 지원목록을 불러옴
// 불러온 데이터들을 showlist 에 전달해서 화면에 표시




applyStatus.forEach((status) => {
    status.addEventListener('click' , async (e) => {
        // 기능을 정지시킴.
        // js로 다른 기능을 사용하기 위해서
        e.preventDefault();

        // status 를 위해서 href 값을 가져옴
        const applyMemberStatus = e.target.parentElement.parentElement.getAttribute("href");

        // href 값을 검사해서 Controller로 전송
        const validStatuses = ["지원완료", "최종합격", "불합격"];

        if (validStatuses.includes(applyMemberStatus)) {
            console.log(applyMemberStatus)
            console.log(validStatuses.includes(applyMemberStatus))
            await myPageAppliedService.apply(applyMemberStatus);
            await myPageAppliedService.getList(applyMemberStatus, appliedLayout.showlist);
        }
    })
})

