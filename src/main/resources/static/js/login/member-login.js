const idLabel = document.querySelector("#id-label");
const txt_tool = document.querySelector(".txt_tool");

txt_tool.addEventListener("focus", (e) => {
  console.log("IN");
  idLabel.style.transform = "translateY(-10px)";
  idLabel.style.fontSize = "10px";
});

txt_tool.addEventListener("blur", (e) => {
  console.log("in");
  if (txt_tool.value === "") {
    idLabel.style.transform = "translateY(0px)";
    idLabel.style.fontSize = "16px";
  }
});

const password = document.querySelector("#password");
const passowrdLabel = document.querySelector("#password-label");

password.addEventListener("focus", (e) => {
  console.log("IN");
  passowrdLabel.style.transform = "translateY(-10px)";
  passowrdLabel.style.fontSize = "10px";
});

password.addEventListener("blur", (e) => {
  console.log("in");
  if (password.value === "") {
    passowrdLabel.style.transform = "translateY(0px)";
    passowrdLabel.style.fontSize = "16px";
  }
});

const tabs = document.querySelectorAll('[role="tab"]');
const managerlogin = document.querySelector(".link_rater");
const loging = document.querySelector(".loging");
const tit = document.querySelectorAll(".area_intergranted_login");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    console.log("In");

    tabs.forEach((t) => {
      t.setAttribute("aria-selected", "false");
      t.setAttribute("tabindex", "-1");
      t.classList.remove("active");

      console.log("In2");
    });
    tab.setAttribute("aria-selected", "true");
    tab.setAttribute("tabindex", "0");
    tab.classList.add("active");

    if (managerlogin.style.display === "none") {
      loging.style.display = "none";

      managerlogin.style.display = "block"; // 처음 클릭하면 표시
    } else {
      loging.style.display = "block";

      managerlogin.style.display = "none";
    }
  });
});

const company = document.querySelector("#company_login");
const companysub = document.querySelector(".sprt_login");
const normal = document.querySelector("#normal_page");
const companybutton = document.querySelector("#company_B");
const normalbutton = document.querySelector("#normal_B");
const compnayLogo = document.querySelector(".company_logo");
const normalLogo = document.querySelector(".person_logo");

// normalbutton.style.display=""
// companybutton.style.display="none"

company.style.opacity = "0";
company.style.pointerEvents = "none";

compnayLogo.style.display = "none";

normalLogo.style.display = "block";

companybutton.addEventListener("click", () => {
  console.log("IN");
  if (company.style.opacity === "0") {
    console.log("IN2");
    normalLogo.style.display = "none";
    compnayLogo.style.display = "block";
    //
    normal.style.pointerEvents = "none";
    company.style.pointerEvents = "auto";
    //
    company.style.opacity = "1";
    normal.style.opacity = "0";
    //
    companysub.style.display = "block";
  }
});
normalbutton.addEventListener("click", () => {
  console.log("normal IN");
  if (normal.style.opacity === "0") {
    console.log("if-IN");
    normalLogo.style.display = "block";
    compnayLogo.style.display = "none";
    normal.style.opacity = "1";
    normal.style.pointerEvents = "auto";
    company.style.pointerEvents = "none";
    company.style.opacity = "0";
  }
});
