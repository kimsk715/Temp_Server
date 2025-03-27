// 탭 상태 감지하여 자동 슬라이드 제어
// 이거 안 쓰면 다른 탭 갔다 왔을때 배너가 자꾸 탈출함
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        clearInterval(autoSlideInterval); // 자동 슬라이드 중지
    } else {
        autoSlideInterval = setInterval(autoSlide, 4000); // 다시 시작
    }
});

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

// 버튼 상태를 제어하는 변수
let isTransitioning = false;

// 슬라이드 이동 및 텍스트 보이기 업데이트 함수
const updateSlide = () => {
    if (isTransitioning) return; // 슬라이드 이동 중일 때 클릭 이벤트 무시

    isTransitioning = true; // 이동 중임을 표시
    bannerTrack.style.transition = "transform 0.5s ease";
    bannerTrack.style.transform = `translateX(-${slideWidth * count}px)`;

    const transitionEndHandler = () => {
        bannerTrack.removeEventListener("transitionend", transitionEndHandler);

        // 텍스트 숨기기
        texts.forEach((text) => text.classList.remove("showText"));

        // 현재 슬라이드 텍스트 표시
        const currentSlide = slides[count];
        if (currentSlide) {
            currentSlide.querySelector(".bannerText").classList.add("showText");
        }

        // 마지막 슬라이드에서 첫 번째로 돌아가기
        if (count === slides.length - 1) {
            setTimeout(() => {
                bannerTrack.style.transition = "none";
                count = 1;
                bannerTrack.style.transform = `translateX(-${slideWidth * count}px)`;
                texts.forEach((text) => text.classList.remove("showText"));
                texts[count].classList.add("showText");
            }, 0);
        }

        // 첫 번째 슬라이드에서 마지막으로 돌아가기
        if (count === 0) {
            setTimeout(() => {
                bannerTrack.style.transition = "none";
                count = slides.length - 2;
                bannerTrack.style.transform = `translateX(-${slideWidth * count}px)`;
                texts.forEach((text) => text.classList.remove("showText"));
                texts[count].classList.add("showText");
            }, 0);
        }

        // 애니메이션 완료 후 추가 대기 시간 동안 버튼 클릭 제한
        setTimeout(() => {
            isTransitioning = false; // 버튼 활성화
        }, 500); // 애니메이션 종료 후 500ms 대기
    };

    // transitionend 이벤트 리스너 추가
    bannerTrack.addEventListener("transitionend", transitionEndHandler);
};

// 자동 슬라이드 주기 설정
let autoSlideInterval = setInterval(autoSlide, 4000);

// 왼쪽 버튼 클릭 이벤트
leftArrow.addEventListener("click", () => {
    if (isTransitioning) return; // 이동 중일 때 클릭 이벤트 무시
    clearInterval(autoSlideInterval);
    count--;
    updateSlide();
    autoSlideInterval = setInterval(autoSlide, 4000);
});

// 오른쪽 버튼 클릭 이벤트
rightArrow.addEventListener("click", () => {
    if (isTransitioning) return; // 이동 중일 때 클릭 이벤트 무시
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
submitButton.addEventListener("click", async (e) => {
    const inquiryContent = memberInquiryContent.querySelector("textarea#normal-inquiry-content").value;
    const inquiryType = memberInquiryContent.querySelector("select#inquiryType").value;

    if(inquiryContent == null || inquiryType == null){
        e.preventDefault();
        return;
    }
    let path = `/insert-inquiry?inquiry-type=${inquiryType}&inquiry-content=${inquiryContent}`;
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