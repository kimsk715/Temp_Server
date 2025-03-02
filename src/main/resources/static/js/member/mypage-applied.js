const mainContentArea = document.querySelectorAll(
    "div.main-content2 ul.applied-list0"
);
const writingButton = document.getElementById("writing");
const appliedButton = document.getElementById("applied");
const passedButton = document.getElementById("passed");
const hiredButton = document.getElementById("hired");
const rejectedButton = document.getElementById("rejected");
const lists = document.querySelectorAll("ul.topbox0 li");

writingButton.addEventListener("click", () => {
    mainContentArea.forEach((list) => {
        if (list.classList.contains("writing-list")) {
            list.classList.remove("hidden");
            lists.forEach((li) => {
                li.classList.remove("topbox-content1-1");
                li.classList.add("topbox-content1");
            });
            writingButton.classList.add("topbox-content1-1");
            writingButton.classList.remove("topbox-content1");
        } else {
            list.classList.add("hidden");
        }
    });
});

appliedButton.addEventListener("click", () => {
    mainContentArea.forEach((list) => {
        if (list.classList.contains("applied-list")) {
            list.classList.remove("hidden");
            lists.forEach((li) => {
                li.classList.remove("topbox-content1-1");
                li.classList.add("topbox-content1");
            });
            appliedButton.classList.add("topbox-content1-1");
            appliedButton.classList.remove("topbox-content1");
        } else {
            list.classList.add("hidden");
        }
    });
});

passedButton.addEventListener("click", () => {
    mainContentArea.forEach((list) => {
        if (list.classList.contains("passed-list")) {
            list.classList.remove("hidden");
            lists.forEach((li) => {
                li.classList.remove("topbox-content1-1");
                li.classList.add("topbox-content1");
            });
            passedButton.classList.add("topbox-content1-1");
            passedButton.classList.remove("topbox-content1");
        } else {
            list.classList.add("hidden");
        }
    });
});

hiredButton.addEventListener("click", () => {
    mainContentArea.forEach((list) => {
        if (list.classList.contains("hired-list")) {
            list.classList.remove("hidden");
            lists.forEach((li) => {
                li.classList.remove("topbox-content1-1");
                li.classList.add("topbox-content1");
            });
            hiredButton.classList.add("topbox-content1-1");
            hiredButton.classList.remove("topbox-content1");
        } else {
            list.classList.add("hidden");
        }
    });
});

rejectedButton.addEventListener("click", () => {
    mainContentArea.forEach((list) => {
        if (list.classList.contains("rejected-list")) {
            list.classList.remove("hidden");
            lists.forEach((li) => {
                li.classList.remove("topbox-content1-1");
                li.classList.add("topbox-content1");
            });
            rejectedButton.classList.add("topbox-content1-1");
            rejectedButton.classList.remove("topbox-content1");
        } else {
            list.classList.add("hidden");
        }
    });
});
const filterButtonArea = document.querySelector("div.applied-list0-filter");
const filterButton = document.querySelector("button.btn-text");
const filterArrow = document.querySelector("svg.arrow");
const filterList = document.querySelector("div.filter-list");
const filterBackground = document.querySelector("div.filter-background");
// filterButton.addEventListener("click", () => {
//     if (filterButton.getAttribute("aria-expanded") == "false") {
//         filterButton.setAttribute("aria-expanded", "true");
//         filterArrow.classList.add("arrow-up");
//         filterList.classList.remove("hidden");
//         filterBackground.classList.remove("hidden");
//     } else {
//         filterButton.setAttribute("aria-expanded", "false");
//         filterArrow.classList.remove("arrow-up");
//         filterList.classList.add("hidden");
//         filterBackground.classList.add("hidden");
//     }
// });

const appliedChoice = document.querySelectorAll("button.peer");
const optApplied = document.getElementById("APPLIED");
const optRead = document.getElementById("READ");
const optUnread = document.getElementById("UNREAD");
const optCanceled = document.getElementById("CANCELED");
const optSpan = document.querySelector("button.btn-text > span");
appliedChoice.forEach((choice) => {
    choice.addEventListener("click", () => {
        console.log(choice.innerText);
        switch (choice.innerText) {
            case "전체":
                optSpan.innerText = "전체";
                break;
            case "열람":
                optSpan.innerText = "열람";
                break;
            case "미열람":
                optSpan.innerText = "미열람";
                break;
            default:
                optSpan.innerText = "지원취소";
                break;
        }
    });
    // 나중에 서버랑 연동해서 조건에 해당하는 공고목록 띄우도록 바꿔야 함.
});

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
