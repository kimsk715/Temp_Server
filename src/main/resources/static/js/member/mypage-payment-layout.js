const mypagePaymentLayout = (() => {
    const showList = async (dataList) => {
        const tbody = document.getElementById("payHistory")


        let text = ``;

        dataList.forEach((data) => {
            console.log("data: ", data);
            text += `<li style="background: #f8f8f8; margin: 10px 0; padding: 10px; border-radius: 5px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1)">
                            <span style="display: block;margin: 5px 0;">가격: ${data.charge}</span>
                            <span style="display: block;margin: 5px 0;">날짜: ${data.purchasedAt}</span>
                            <span style="display: block;margin: 5px 0;">결제 상태: ${data.paymentStatusLocale}</span>
                        </li>`
        })

        tbody.innerHTML += text;
    }

    return {showList: showList}
})();