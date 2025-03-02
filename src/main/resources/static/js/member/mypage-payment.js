const pay = async function () {
    const response = await Bootpay.requestPayment({
        application_id: "678096d9692d0516c36e53e9",
        price: 1000,
        order_name: "테스트결제",
        order_id: "TEST_ORDER_ID",
        pg: "카카오",
        method: "간편",
        tax_free: 0,
        user: {
            id: "회원아이디",
            username: "회원이름",
            phone: "01000000000",
            email: "test@test.com",
        },
        items: [
            {
                id: "item_id",
                name: "테스트아이템",
                qty: 1,
                price: 1000,
            },
        ],
        extra: {
            open_type: "iframe",
            card_quota: "0,2,3",
            escrow: false,
        },
    });
};

const appliedChoice = document.querySelectorAll("button.peer");
const optSpan = document.querySelector("button.btn-text > span");
appliedChoice.forEach((choice) => {
    choice.addEventListener("click", () => {
        console.log(choice.innerText);
        switch (choice.innerText) {
            case "전체":
                optSpan.innerText = "전체";
                break;
            case "결제완료":
                optSpan.innerText = "결제완료";
                break;
            default:
                optSpan.innerText = "결제대기";
                break;
        }
    });
    // 나중에 서버랑 연동해서 조건에 해당하는 공고목록 띄우도록 바꿔야 함.
});
const filterButton = document.querySelector("button.btn-text");
const filterArrow = document.querySelector("svg.arrow");
const filterList = document.querySelector("div.filter-list");
const filterBackground = document.querySelector("div.filter-background");
const paymentFilter = document.querySelector("div.layer_contents");
const filterButtonArea = document.querySelector("div.applied-list0-filter");
document.addEventListener("click", function (e) {
    console.log(e.target);
    if (filterButtonArea.contains(e.target)) {
        if (filterButton.getAttribute("aria-expanded") == "false") {
            filterButton.setAttribute("aria-expanded", "true");
            filterArrow.classList.add("arrow-up");
            filterList.classList.remove("hidden");
            filterBackground.classList.remove("hidden");
        } else {
            filterButton.setAttribute("aria-expanded", "false");
            filterArrow.classList.remove("arrow-up");
            filterList.classList.add("hidden");
            filterBackground.classList.add("hidden");
        }
    } else if (!filterList.contains(e.target)) {
        filterButton.setAttribute("aria-expanded", "false");
        filterArrow.classList.remove("arrow-up");
        filterList.classList.add("hidden");
        filterBackground.classList.add("hidden");
    }
});

// 여기도 추후에 각각 전체, 결제완료, 결제대기 리스트를 서버로부터 받아서
// 해당 데이터만 출력되도록 할 예정.
