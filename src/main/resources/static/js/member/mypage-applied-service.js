const myPageAppliedService = (()=>{
    // 1
    // 추가
    // 비동기 함수,, applyMemberStatus는 파라미터를 받아서 처리함, reply는 서버로 전송할 데이터다!!!
    const apply = async (applyMemberStatus) => {

        // 2
        // fetch() 는 네트워크 요청을 보내는 함수인데, 여기서는 서버의 /replie/write 경로에 요청을 보내는 코드
        // "await" 을 사용하면 "fetch()" 가 완료될 때까지 기다린 후 그 결과를 반환받습니다.
        // 즉, 서버에서 응답을 받을 때까지 다음 코드로 넘어가지 않음
        await fetch(`/mypage/account-applis?applyMemberStatus=${applyMemberStatus}`, {

            // fetch()의 옵션으로 요청 받법을 설정하는 부분입니다. 여기서는 post 메서드를 사용하여 데이터를 서버로 전송하려고 합니다.
            // post는 주로 서버에 새로운 데이터를 생성 , 전송할때
            method: "post",

            // 3
            // "body"는 요청에 포함될 데이터입니다. reply 객체를 json 문자열로 변환한 후 서버로 전송
            // JSON.stringify(reply), 은 자바스립트 객체를 json 형식의 문자열로 변환하는 함수
            // body: JSON.stringify({"applyMemberStatus": applyMemberStatus}),

            // "Content-Type": "application/json;charset=utf-8" 서버에게 요청 본문인(body)가 json형식임을 명시, UTF-8 인코딩사용
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });

    }
    // 게시글 목록
    const getList = async (applyMemberStatus, callback, page = 1) => {
        console.log(applyMemberStatus)

        const response = await fetch(`/mypage/account-applis?applyMemberStatus=${applyMemberStatus}`,{
            method: "post",
            body: JSON.stringify({page: page}),
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });


        console.log("이건 리스폰" , response)
        const list = await response.json();
        if(callback){
            callback(list);
        }
    }

    return {getList: getList, apply: apply};

})();