const categories = {
    "서비스업": {
        "호텔·여행·항공": ["호텔","콘도","카지노","여행사","항공사","관광","관광통역","면세점","유학·이민"],
        "외식업·식음료": ["산림경영 지원 및 서비스업", "목재 생산업"],
        "시설관리·경비·용역": []
    },
    "광업": {
        "광업": ["석탄 광업", "비금속 광물 광업"]
    },
    "제조업": {
        "제조업": ["식료품 제조업", "섬유 및 의복 제조업"]
    }
};

function updateSecondaryCategory() {
    const primaryCategory = document.getElementById("primary-category").value;
    const secondaryCategorySelect = document.getElementById("secondary-category");
    secondaryCategorySelect.innerHTML = "<option value=''>-- 선택 --</option>";
    
    if (primaryCategory && categories[primaryCategory]) {
        Object.keys(categories[primaryCategory]).forEach(key => {
            const option = document.createElement("option");
            option.value = key;
            option.textContent = key;
            secondaryCategorySelect.appendChild(option);
        });
    }
}

function updateTertiaryCategory() {
    const primaryCategory = document.getElementById("primary-category").value;
    const secondaryCategory = document.getElementById("secondary-category").value;
    const tertiaryCategorySelect = document.getElementById("tertiary-category");
    tertiaryCategorySelect.innerHTML = "<option value=''>-- 선택 --</option>";
    
    if (primaryCategory && secondaryCategory && categories[primaryCategory][secondaryCategory]) {
        categories[primaryCategory][secondaryCategory].forEach(item => {
            const option = document.createElement("option");
            option.value = item;
            option.textContent = item;
            tertiaryCategorySelect.appendChild(option);
        });
    }
}
const firstCategory = document.getElementById("firstcat")
const secondCategory = document.getElementById("secondcat")
const tertiCategory = document.getElementById("terticat")
const primaryCategory = document.getElementById("primary-category")
const secondaryCategory = document.getElementById("secondary-category")
const tertiaryCategory = document.getElementById("tertiary-category")

function saveCategory() {
    firstCategory.innerText = primaryCategory.value
    secondCategory.innerText = secondaryCategory.value
    tertiCategory.innerText = tertiaryCategory.value
    firstCategory.classList.remove("hidden")
    secondCategory.classList.remove("hidden")
    tertiCategory.classList.remove("hidden")
    console.log("클릭됨")
}

// creasated 랑 update는 테이블명 X