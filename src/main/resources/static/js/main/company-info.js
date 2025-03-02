// 복사 버튼 만들기, 복사 한 다음 텍스트 alert
// 복사할 버튼을 선택
const copyButton = document.querySelector("#copyUrl"); // 복사 버튼

const copyCurrentUrl = async () => {
    try {
        // clipboard에 지정한 텍스트(여기선 페이지의 url)추가
        await navigator.clipboard.writeText(window.location.href); // window.location.href는 현재 페이지의 url
        alert("URL이 복사되었습니다. 많이 공유해주세요:)"); // 알림 메시지
    } catch (err) {
        console.error("URL 복사 실패:", err);
    }
};

// 버튼 누르면 회사 주소 복사
copyButton.addEventListener("click", copyCurrentUrl);

// 복사 버튼 만들기, 복사 한 다음 텍스트 alert
// 복사할 텍스트 요소와 버튼을 선택
const copyText = document.querySelector("#copyText");
const copyAddressBtn = document.querySelector(".address>button");

// Clipboard API로 특정 텍스트를 복사시킬 수 있다. 신기
copyAddressBtn.addEventListener("click", () => {
    // #copyText 요소의 텍스트를 클립보드에 복사
    navigator.clipboard
        .writeText(copyText.textContent) // 텍스트를 클립보드에 복사
        .then(() => {
            // 복사 성공 시 텍스트 출력
            alert("주소가 복사되었습니다");
        })
        .catch((err) => {
            // 복사 실패 시 오류 메시지 출력
            console.error("Failed to copy text: ", err);
        });
});

// 기업/서비스 소개 더보기 버튼 누르면 정보 전체출력
const moreInfoBtn = document.querySelector(".companyDetailButton");
const moreInfoText = document.querySelector(".companyDetailText");
const textGradient = document.querySelector(".compnayDetailHide");
const expandIcon = moreInfoBtn.querySelector(".expandIcon"); // 펼치기 아이콘
const collapseIcon = moreInfoBtn.querySelector(".collapseIcon"); // 접기 아이콘
const buttonText = moreInfoBtn.querySelector(".buttonText"); // 버튼 내 텍스트 span

// 버튼 클릭 시 이벤트
collapseIcon.style.display = "none";
expandIcon.style.display = "inline-block";

moreInfoBtn.addEventListener("click", () => {
    const isExpanded = moreInfoBtn.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
        // 이미 열려있으면 닫기
        moreInfoText.style.maxHeight = "168px";
        moreInfoText.style.overflow = "hidden";
        textGradient.classList.add("gradient");
        moreInfoBtn.setAttribute("aria-expanded", "false");

        // 버튼 텍스트 변경 (SVG는 유지됨)
        buttonText.textContent = "더 보기";

        // SVG 변경
        expandIcon.style.display = "inline-block";
        collapseIcon.style.display = "none";
    } else {
        // 닫혀있으면 열기
        moreInfoText.style.maxHeight = "none";
        moreInfoText.style.overflow = "visible";
        textGradient.classList.remove("gradient");
        moreInfoBtn.setAttribute("aria-expanded", "true");

        // 버튼 텍스트 변경 (SVG는 유지됨)
        buttonText.textContent = "접기";

        // SVG 변경
        expandIcon.style.display = "none";
        collapseIcon.style.display = "inline-block";
    }
});

// 모달창 이미지 변경...
// 일일히 innerhtml이나 이미지를 다 집어넣고 display를 바꾸는 것보단 배열에 이미지들을 넣어
// 링크만 바꾸는게 더 편해보임
const modalImages = [
    "https://cdn.jumpit.co.kr/lg/images/syyun_26773/20232607112656155_1080_790.webp",
    "https://cdn.jumpit.co.kr/lg/images/syyun_26773/20232607112658487_1080_790.webp",
    "https://cdn.jumpit.co.kr/lg/images/syyun_26773/20232607112653349_1080_790.webp",
    "https://cdn.jumpit.co.kr/lg/images/syyun_26773/20232707112703284_1080_790.webp",
]; // 이미지 목록

let currentIndex = 0; // 현재 이미지 인덱스

const imgElement = document.querySelector(".moduleSlide img"); // 이미지 태그
const prevButton = document.querySelector(".moduleLeftButton"); // 왼쪽 버튼
const nextButton = document.querySelector(".moduleRightButton"); // 오른쪽 버튼
const moduleSlide = document.querySelector(".moduleSlide"); // 슬라이드 컨테이너

// 이미지 변경 함수
const updateImage = () => {
    imgElement.src = modalImages[currentIndex];
};

// 왼쪽 버튼 클릭 시
prevButton.addEventListener("click", () => {
    // currentIndex - 1: 현재 인덱스
    // modalImages.length: 배열 안에 있는 이미지들의 개수
    // + modalImages.length 는 인덱스가 음수가 되는걸 방지하기 위해
    // % modalImage.length 는 인덱스가 배열의 크기를 넘어가지 않게 하려고,,
    currentIndex = (currentIndex - 1 + modalImages.length) % modalImages.length;
    updateImage(); // 이미지를 변경
});

// 오른쪽 버튼 클릭 시
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % modalImages.length;
    updateImage();
});

// 초기 이미지 설정
updateImage();

// 홈페이지에서 누른 이미지에 따라 모달창에서 조회 가능하게
// 아으 이미지 이벤트 진짜 많네

const companyImages = document.querySelectorAll(".companyImages img"); // 회사 이미지 리스트
const modal = document.querySelector(".moreImageModal"); // 모달창
const modalImgElement = document.querySelector(".moduleSlide img"); // 모달 내 이미지
const modalCloseButton = document.querySelector(".modalCloseButton"); // 닫기 버튼
const imagesLastStyle = document.querySelector(".moreContentPc"); // 마지막 이미지를 덮는 스타일

// 마지막 이미지로 설정하는 함수
const showThirdImage = () => {
    currentIndex = modalImages.length - 2; // 3번째 이미지 인덱스(마지막 이미지는 가려져 안 보임)
    updateImage(); // 이미지 변경
    modal.style.display = "flex"; // 모달창 띄우기
};

// 마지막 이미지 클릭 이벤트 추가
imagesLastStyle.addEventListener("click", showThirdImage);

// 이미지 클릭 이벤트 추가
companyImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index; // 클릭한 이미지의 인덱스 저장
        updateImage(); // 모달창 이미지 변경
        modal.style.display = "flex"; // 모달창 보이게
    });
});

// 모달창 닫기
modalCloseButton.addEventListener("click", () => {
    modal.style.display = "none"; // 모달창 숨기기
});

// 초기 이미지 설정 함수
const updateModalImage = () => {
    modalImgElement.src = modalImages[currentIndex];
};

// 사원 수 그래프
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("companyGraph").getContext("2d");

    new Chart(ctx, {
        type: "bar", // 기본은 막대 그래프
        data: {
            labels: ["24.07", "24.08", "24.09", "24.10", "24.11"], // x축 라벨
            datasets: [
                {
                    label: "직원 수",
                    data: [216, 218, 217, 215, 226],
                    type: "line", // 선 그래프
                    borderColor: "#2e37ff",
                    backgroundColor: "#2e37ff",
                    fill: false,
                    tension: 0.1,
                    pointRadius: 4, // 점 크기
                    pointStyle: "circle", // 점 스타일을 circle로 변경
                },
                {
                    label: "입사자 수",
                    data: [12, 7, 0, 6, 14],
                    backgroundColor: "#00dd6d",
                },
                {
                    label: "퇴사자 수",
                    data: [5, 1, 8, 3, 8],
                    backgroundColor: "#c4c4c4",
                },
            ],
        },
        options: {
            scales: {
                x: {
                    grid: {
                        display: false, // x축의 세로선 숨기기
                    },
                },
            },
            plugins: {
                legend: {
                    display: false, // 기본 범례 숨기기
                },
                tooltip: {
                    enabled: true, // 툴팁 활성화
                    mode: "index", // 여러 데이터셋에 대해 툴팁을 동시에 표시
                    intersect: false, // 데이터를 정확히 일치시키지 않아도 툴팁 표시
                    backgroundColor: "rgba(255, 255, 255, 0.9)", // 배경색 하얗게 설정
                    borderColor: "#000", // 테두리 색을 검정색으로 설정
                    borderWidth: 1, // 테두리 두께 설정
                    titleColor: "#000", // 제목 텍스트 색상 설정
                    bodyColor: "#000", // 본문 텍스트 색상 설정
                    callbacks: {
                        title: function (tooltipItem) {
                            return tooltipItem[0].label; // x축 레이블(날짜)만 표시
                        },
                        label: function (tooltipItem) {
                            let datasetLabel = tooltipItem.dataset.label || "";
                            let value = tooltipItem.raw;
                            return datasetLabel + ": " + value; // 데이터셋 이름과 값 표시
                        },
                    },
                },
            },
        },
    });
});

// 신뢰도 옆 버튼을 누르면 신뢰도 기준 창이 보임
const button = document.querySelector(".reliabilityBtn");
const infoLayer = document.querySelector(".reliabilityInfo");
const buttonSvgOff = document.querySelector("#reliabilitySvg1");
const buttonSvgOn = document.querySelector("#reliabilitySvg2");

infoLayer.style.display = "none";

button.addEventListener("click", function () {
    if (infoLayer.style.display === "block") {
        infoLayer.style.display = "none";
        buttonSvgOff.style.display = "block";
        buttonSvgOn.style.display = "none";
    } else {
        infoLayer.style.display = "block";
        buttonSvgOn.style.display = "block";
        buttonSvgOff.style.display = "none";
    }
});

// 특정 세션에 진입하면 aria-current의 상태 변경, nav를 누르면 그 구간으로 이동
const sections = document.querySelectorAll(".compSection");
const navLinks = document.querySelectorAll(".sectionNav");

// 스크롤 시 현재 보이는 섹션을 감지하고, 해당 링크의 active 상태를 업데이트하는 함수
function updateActiveLink() {
    let currentSection = null;

    // 모든 섹션을 돌면서 화면에 보이는 섹션을 찾음
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // 섹션이 화면 중앙에 있는 경우
        if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
        ) {
            currentSection = section;
        }
    });

    // 현재 보이는 섹션이 있을 경우
    if (currentSection) {
        // 네비게이션 링크를 돌면서 active 상태를 업데이트
        navLinks.forEach((link) => {
            // 기존 active 클래스와 aria-current 속성을 제거
            link.classList.remove("active");
            link.setAttribute("aria-current", "false");

            // 현재 보이는 섹션의 id와 링크의 data-target이 일치하면 해당 링크에 active 클래스와 aria-current 속성 추가
            if (link.dataset.target === currentSection.id) {
                link.classList.add("active");
                link.setAttribute("aria-current", "true");
            }
        });
    }
}

// 각 네비게이션 링크 클릭 시 해당 섹션으로 부드럽게 스크롤
navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // 기본 동작 방지 (링크 클릭 시 페이지 이동을 방지)

        // 클릭한 링크의 data-target 값에 맞는 섹션을 찾음
        const targetSection = document.getElementById(link.dataset.target);

        // 해당 섹션이 존재하면 부드럽게 스크롤
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop, // 섹션의 최상단 위치로 스크롤
                behavior: "smooth", // 부드러운 스크롤 동작
            });
        }
    });
});

// 스크롤 이벤트 발생 시 updateActiveLink 함수 실행
window.addEventListener("scroll", updateActiveLink);

// 초기 실행: 페이지 로드 시 현재 보이는 섹션을 감지하고 활성화된 링크를 업데이트
updateActiveLink();
