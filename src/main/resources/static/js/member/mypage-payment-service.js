const myPagePaymentService= ( () => {
    // 결제내역 조회
    const selectPayHistory = async (callback) => {
        const response = await fetch("/member/select-pay-history", {
            method: "GET"
        });
        
        console.log("들어옴")
        const payHistory = await response.json();
        console.log(payHistory);
        console.log("들어옴")
        if(callback){
            console.log(payHistory);
            callback(payHistory)
        }
        console.log(payHistory);
        console.log("들어옴")
    }
    // 결제내역 저장
    const insertPayHistory = async (data, callback) => {
        const response = await fetch("/member/insert-pay-history", {
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        })

        if(callback){
            callback(insertPayHistory)
        }
        console.log("여긴 서비스", data);
    }
    return {selectPayHistory: selectPayHistory, insertPayHistory: insertPayHistory}
})();


