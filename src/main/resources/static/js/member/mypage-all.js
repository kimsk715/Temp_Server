const righttopbutton = document.querySelector("div.header-right-user7");
const righttopmenu = document.querySelector("div.header-right-menu8");
NodeList.prototype.addEventListener = Array.prototype.addEventListener;

// 우상단 마우스 이벤트트
righttopbutton.addEventListener("mouseover", function () {
    righttopmenu.style.display = "block";
})
righttopmenu.addEventListener("mouseover", function () {
    righttopmenu.style.display = "block";
})
righttopbutton.addEventListener("mouseout", function () {
    righttopmenu.style.display = "none";
})
righttopmenu.addEventListener("mouseout", function () {
    righttopmenu.style.display = "none";
})

const searchBoxBlink = document.querySelector("div.search-box");
const searchBoxHidden = document.querySelector("div.searchbox-hidden")
const searchBoxOnClick = document.querySelector("div.searchbox-onclick")

document.addEventListener('click', function(e){
    if(searchBoxBlink.contains(e.target)){
        searchBoxHidden.style.display = "block";
        searchBoxOnClick.style.display = "block";
    }
    else if(!searchBoxHidden.contains(e.target)){
        searchBoxHidden.style.display = "none";
        searchBoxOnClick.style.display = "none";
    }
})




