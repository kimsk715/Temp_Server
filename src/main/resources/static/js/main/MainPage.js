// 메인 슬라이드 배너
const bannerTrack = document.querySelector(".bannerTrack");
const leftArrow = document.querySelector(".leftButton");
const rightArrow = document.querySelector(".rightButton");

// 배너 데이터
const bannersData = [
    {
        img: "https://cdn.jumpit.co.kr/home_contents/main_banner/20250124/v_home_img_mainbanner_1.webp",
        text: "엔지니어 적극 채용 중",
    },
    {
        img: "https://cdn.jumpit.co.kr/home_contents/main_banner/20250124/v_home_img_mainbanner_2.webp",
        text: "개발자들을 위한 특별한 기회",
    },
    {
        img: "https://cdn.jumpit.co.kr/home_contents/main_banner/20250124/v_home_img_mainbanner_3.webp",
        text: '"기술은 사람이다" 에이엠텔레콤 채용 중',
    },
    {
        img: "https://cdn.jumpit.co.kr/home_contents/main_banner/20250124/v_home_img_mainbanner_4.webp",
        text: "최고의 IT 기업에서 성장하세요!",
    },
    {
        img: "https://cdn.jumpit.co.kr/home_contents/main_banner/20250124/v_home_img_mainbanner_5.webp",
        text: "당신을 기다리는 기업들",
    },
];

// 첫 번째와 마지막 배너 복사 (무한 슬라이드용)
const firstClone = { ...bannersData[0] };
const lastClone = { ...bannersData[bannersData.length - 1] };

// 모든 배너 데이터 배열
const allBanners = [lastClone, ...bannersData, firstClone];

// 배너 HTML 추가
bannerTrack.innerHTML = allBanners
    .map(
        (banner) => `
    <div class="bannerSlide">
        <img src="${banner.img}" />
        <h3 class="bannerText">${banner.text}</h3>
    </div>
`
    )
    .join("");

// 슬라이드 변수 설정
const slides = document.querySelectorAll(".bannerSlide");
const texts = document.querySelectorAll(".bannerText");
let count = 1;
const slideWidth = 700; // 배너 슬라이드의 폭
bannerTrack.style.transform = `translateX(-${slideWidth * count}px)`;

// 첫 번째 슬라이드 텍스트 보이기
texts[count].classList.add("showText");

// 자동 슬라이드 함수
const autoSlide = () => {
    count++;
    updateSlide();
};

// 슬라이드 이동 및 텍스트 보이기 업데이트 함수
const updateSlide = () => {
    // 슬라이드 이동
    bannerTrack.style.transition = "transform 0.5s ease";
    bannerTrack.style.transform = `translateX(-${slideWidth * count}px)`;

    // transitionend 이벤트로 텍스트 표시
    bannerTrack.addEventListener(
        "transitionend",
        function handleTransitionEnd() {
            // 이벤트 핸들러를 한 번만 실행하도록 제거
            bannerTrack.removeEventListener(
                "transitionend",
                handleTransitionEnd
            );

            // 텍스트 숨기기
            texts.forEach((text) => text.classList.remove("showText"));

            // 현재 슬라이드의 텍스트 보이기
            const currentSlide = slides[count];
            if (currentSlide) {
                // 텍스트 애니메이션 바로 적용
                currentSlide
                    .querySelector(".bannerText")
                    .classList.add("showText");
            }

            // 마지막 슬라이드에서 첫 번째로 돌아가게 하기기
            if (count === slides.length - 1) {
                setTimeout(() => {
                    bannerTrack.style.transition = "none"; // 트랜지션 없이 위치 리셋
                    count = 1;
                    bannerTrack.style.transform = `translateX(-${
                        slideWidth * count
                    }px)`; // 첫 번째로 이동
                    // 텍스트 숨기고 첫 번째 슬라이드 텍스트 보이기
                    texts.forEach((text) => text.classList.remove("showText"));
                    texts[count].classList.add("showText");
                }, 500); // 딜레이 후 슬라이드 이동
            }

            // 첫 번째 슬라이드에서 마지막으로 돌아가는 처리
            if (count === 0) {
                setTimeout(() => {
                    bannerTrack.style.transition = "none"; // 트랜지션 없이 위치 리셋
                    count = slides.length - 2;
                    bannerTrack.style.transform = `translateX(-${
                        slideWidth * count
                    }px)`; // 마지막으로 이동
                    // 텍스트 숨기고 마지막 슬라이드 텍스트 보이기
                    texts.forEach((text) => text.classList.remove("showText"));
                    texts[count].classList.add("showText");
                }, 500); // 딜레이 후 슬라이드 이동
            }
        }
    );
};

// 자동 슬라이드 주기 설정
let autoSlideInterval = setInterval(autoSlide, 4000);

// 왼쪽 버튼 클릭 이벤트
leftArrow.addEventListener("click", () => {
    clearInterval(autoSlideInterval);
    count--;
    updateSlide();
    autoSlideInterval = setInterval(autoSlide, 4000);
});

// 오른쪽 버튼 클릭 이벤트
rightArrow.addEventListener("click", () => {
    clearInterval(autoSlideInterval);
    count++;
    updateSlide();
    autoSlideInterval = setInterval(autoSlide, 4000);
});

// 사이드 배너
const leftSideBanner = document.createElement("div");
const rightSideBanner = document.createElement("div");
const banner = document.querySelector("div.slickTrack");
const buttons = document.querySelectorAll(".sideSlideButton>span");
let slideIndex = 1;
let tempButton = buttons[0];

tempButton.style.backgroundColor = "rgb(136, 136, 136)";

leftSideBanner.innerHTML = `<div class="sideSlickSlide">
                                    <a href="/" class="slickSlideLink">
                                        <div class="sideSlideImg1"></div>
                                    </a>
                                </div>`;
rightSideBanner.innerHTML = `<div class="sideSlickSlide">
                                    <a href="/" class="slickSlideLink">
                                        <div class="sideSlideImg3"></div>
                                    </a>
                                </div>`;

banner.appendChild(leftSideBanner);
banner.prepend(rightSideBanner);

banner.style.transform = `translate(-100px)`;

const startSlideShow = () => {
    slideIndex++;
    banner.style.transform = `translate(-${100 * slideIndex}px)`;
    banner.style.transition = `transform 0.5s`;

    if (slideIndex === 4) {
        setTimeout(() => {
            banner.style.transform = `translate(-100px)`;
            banner.style.transition = `transform 0s`;
        }, 500);
        slideIndex = 1;
    }
    tempButton.style.backgroundColor = "rgb(212, 212, 212)";
    buttons[slideIndex - 1].style.backgroundColor = "rgb(136, 136, 136)";
    tempButton = buttons[slideIndex - 1];
};

let slideTimer = setInterval(startSlideShow, 4000);
let buttonCheck = true;

buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        if (!buttonCheck) {
            return;
        }

        buttonCheck = false;

        clearInterval(slideTimer);

        tempButton.style.backgroundColor = "rgb(212, 212, 212)";
        slideIndex = i + 1;

        banner.style.transform = `translate(-${100 * slideIndex}px)`;
        banner.style.transition = `transform 0.5s`;

        buttons[i].style.backgroundColor = "rgb(136, 136, 136)";
        tempButton = buttons[i];

        slideTimer = setInterval(startSlideShow, 4000);

        setTimeout(() => {
            buttonCheck = true;
        }, 500);
    });
});

const modalContainer = document.getElementById("inquiry-modal");
const openModalButton = document.querySelector("#open-modal-button button");
openModalButton.addEventListener("click",() =>{
    openInquiryModal(modalContainer)
})


const openInquiryModal = (modal) => {
    if(modal){
        modal.style.display = "block";
        document.body.style.overflow = "hidden";

    }
}

const closeInquiryModal = (modal) =>{
    if(modal){
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
}

const submitButton = document.querySelector(".submit-button");
const memberInquiryContent= document.getElementById("member-inquiry-content")
submitButton.addEventListener("click",async (e) => {
    const inquiryContent = memberInquiryContent.querySelector("textarea#normal-inquiry-content").value;
    const inquiryType = memberInquiryContent.querySelector("select#inquiryType").value;

    if(inquiryContent == null || inquiryType == null){
        e.preventDefault();
        return;
    }
    let path = `/enterprise/insert-inquiry?inquiry-type=${inquiryType}&inquiry-content=${inquiryContent}`;
    await fetch(path);

})

const closeButton = document.querySelectorAll(".close-button")

closeButton.forEach((button) =>{
    button.addEventListener("click",()=>{
        closeInquiryModal(modalContainer)
    })
})

document.addEventListener("DOMContentLoaded", () => {
    if(memberData == null){
        beforeLoginWrap.style.display = "block";
        afterLoginWrap.style.display = "none";
    }
    else{
        beforeLoginWrap.style.display = "none";
        afterLoginWrap.style.display = "block";
    }
})