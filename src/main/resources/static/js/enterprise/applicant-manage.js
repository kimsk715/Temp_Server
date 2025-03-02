const newBanner = document.querySelector(".new-menu");
const paperBanner = document.querySelector(".paperpassed-menu");
const passBanner = document.querySelector(".pass-menu");
const failBanner = document.querySelector(".fail-menu");
const newContent = document.querySelector(".new-applicant");
const paperContent = document.querySelector(".paper-passed");
const passContent = document.querySelector(".final-passed");
const failContent = document.querySelector(".failed");

newBanner.addEventListener("click", () => {
    newContent.classList.remove("hidden");
    newBanner.classList.add("selected");
    paperContent.classList.add("hidden");
    paperBanner.classList.remove("selected");
    passContent.classList.add("hidden");
    passBanner.classList.remove("selected");
    failContent.classList.add("hidden");
    failBanner.classList.remove("selected");
});

paperBanner.addEventListener("click", () => {
    newContent.classList.add("hidden");
    newBanner.classList.remove("selected");
    paperContent.classList.remove("hidden");
    paperBanner.classList.add("selected");
    passContent.classList.add("hidden");
    passBanner.classList.remove("selected");
    failContent.classList.add("hidden");
    failBanner.classList.remove("selected");
});

passBanner.addEventListener("click", () => {
    newContent.classList.add("hidden");
    newBanner.classList.remove("selected");
    paperContent.classList.add("hidden");
    paperBanner.classList.remove("selected");
    passContent.classList.remove("hidden");
    passBanner.classList.add("selected");
    failContent.classList.add("hidden");
    failBanner.classList.remove("selected");
});

failBanner.addEventListener("click", () => {
    newContent.classList.add("hidden");
    newBanner.classList.remove("selected");
    paperContent.classList.add("hidden");
    paperBanner.classList.remove("selected");
    passContent.classList.add("hidden");
    passBanner.classList.remove("selected");
    failContent.classList.remove("hidden");
    failBanner.classList.add("selected");
});

const deleteApplicant = document.querySelectorAll("span.delete");

deleteApplicant.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (confirm("지원자를 삭제하시겠습니까?")) {
            e.target.closest("tr").remove();
        } else {
        }
    });
});

const checkBox = document.querySelectorAll(".statuscheck");
const docupassBtn = document.querySelectorAll("div.docu-pass");
const failBtn = document.querySelectorAll("div.fail");
const dropdownBtn = document.querySelectorAll("button.dropdown-button")
const finalpassBtn = document.querySelectorAll(".final-pass")


docupassBtn.forEach((btns) => {
    btns.addEventListener("click", () => {
        console.log(btns);
        checkBox.forEach((check) => {
            console.log(check.checked);
            if (check.checked) {
                check.parentElement.parentElement.lastElementChild.innerHTML = `서류통과`;
                console.log(check);
            } else {
            }
        });
        btns.parentElement.style.display = "none"
    });
});

finalpassBtn.forEach((btns) => {
    btns.addEventListener("click", () => {
        console.log(btns);
        checkBox.forEach((check) => {
            console.log(check.checked);
            if (check.checked) {
                check.parentElement.parentElement.lastElementChild.innerHTML = `최종합격`;
                console.log(check);
            } else {
            }
        });
        btns.parentElement.style.display = "none"
    });
});
const dropdownArea = document.querySelectorAll(".dropdown")

dropdownArea.forEach((hover) =>{
    hover.addEventListener("mouseover",()=>{
        hover.lastElementChild.style.display = "block"
    })
})

dropdownArea.forEach((hover) =>{
    hover.addEventListener("mouseout",()=>{
        hover.lastElementChild.style.display = "none"
    })
})

failBtn.forEach((btns) => {
    btns.addEventListener("click", () => {
        console.log(btns);
        checkBox.forEach((check) => {
            console.log(check.checked);
            if (check.checked) {
                check.parentElement.parentElement.lastElementChild.innerHTML = `불합격`;
                console.log(check);
            } else {
            }
        });
        btns.parentElement.style.display = "none"
    });
});
const readBtn = document.querySelectorAll("div.readcheck");
const unreadBtn = document.querySelectorAll("div.unreadcheck");

readBtn.forEach((btns) => {
    btns.addEventListener("click", () => {
        console.log(btns);
        checkBox.forEach((check) => {
            console.log(check.checked);
            if (check.checked) {
                check.parentElement.parentElement.lastElementChild.innerHTML = `열람`;
                console.log(check);
            } else {
            }
        });
        btns.parentElement.style.display = "none"
    });
});

unreadBtn.forEach((btns) => {
    btns.addEventListener("click", () => {
        console.log(btns);
        checkBox.forEach((check) => {
            console.log(check.checked);
            if (check.checked) {
                check.parentElement.parentElement.lastElementChild.innerHTML = `미열람`;
                console.log(check);
            } else {
            }
        });
        btns.parentElement.style.display = "none"
    });
});

// window.addEventListener("click",(e)=>{
//     if(e.target && e.target.matches("div.docu-pass")){
//        const temp = e.target.closest("div.container")
//        const checkbox = document.querySelectorAll('temp tbody tr td:first-child input[type="checkbox"]');
//        checkbox.forEach((box) =>{
//         if(box){
//             box.parentElement.lastElementChildChild.innerHTML = `서류통과`
//         }
//        })

//     }
// })

const pageNum = document.querySelectorAll("div.pagination button");
const pageNumArea = document.querySelector("div.pagination");

pageNumArea.addEventListener("click", (e) => {
    var activeNum = document.querySelector("button.active");
    console.log(activeNum.innerText);
    pageNum.forEach((buttons) => {
        if (e.target.contains(buttons)) {
            if (buttons.innerText == ">") {
                activeNum.classList.remove("active");
                activeNum.nextElementSibling.classList.add("active");
            } else if (buttons.innerText == "<") {
                activeNum.previousElementSibling.classList.add("active");
                console.log(activeNum);
                // activeNum.classList.remove('active')
                console.log(activeNum);
            } else {
                buttons.classList.add("active");
            }
        } else {
            buttons.classList.remove("active");
        }
    });
});

const openModal = document.querySelectorAll(".sendemail-button");
const closeModal = document.getElementById("closeModal");
const closeModal2 = document.getElementById("closeModal2");
const emailModal = document.getElementById("emailModal");
openModal.forEach((button) => {
    button.addEventListener("click", function () {
        emailModal.style.display = "flex";
    });
});

closeModal.addEventListener("click", function () {
    emailModal.style.display = "none";
});
closeModal2.addEventListener("click", function () {
    emailModal.style.display = "none";
});
