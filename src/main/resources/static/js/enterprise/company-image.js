
// const imageUploadBox = document.querySelector(".image-upload")
const logoUploadBox = document.getElementById("logo-upload")
const input = document.getElementById("logoattach");
const logoUploadButton = document.getElementById("logobutton")
const logoUploadBoxSpan = document.querySelector("#logo-upload span")
const logoDeleteButton = document.getElementById("logo-remove")
logoUploadButton.addEventListener("click", () => {
    input.click();
});

input.addEventListener("change", (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", (e) => {
        const path = e.target.result;
        console.log(path)
        if (path.includes("image")) {
            logoUploadBox.style.background = `url(${path}) center center / contain no-repeat rgb(100, 100, 100)`;
            logoUploadButton.style.display = "none"
            logoUploadBoxSpan.style.display = "none"
            logoDeleteButton.style.color = "white"    
        } else {
            logoUploadBox.style.backgroundImage = `url("images/document.jpg")`;
        }
    });
});

logoDeleteButton.addEventListener("click", ()=>{
    logoUploadBox.removeAttribute("style")
    logoUploadButton.removeAttribute("style")
    logoUploadBoxSpan.removeAttribute("style")  
    logoDeleteButton.style.color = "black" 
})


const imageUploadBox = document.getElementById("image-upload")
const input2 = document.getElementById("imageattach")
const imageUploadButton = document.getElementById("imagebutton")
const imageUploadBoxSpan = document.querySelector("#image-upload span")
const imageDeleteButton = document.getElementById("image-remove")
imageUploadButton.addEventListener("click", () => {
    input2.click();
});

input2.addEventListener("change", (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", (e) => {
        const path = e.target.result;
        console.log(path)
        if (path.includes("image")) {
            imageUploadBox.style.background = `url(${path}) center center / contain no-repeat rgb(100, 100, 100)`;
            imageUploadButton.style.display = "none"
            imageUploadBoxSpan.style.display = "none"  
            imageDeleteButton.style.color = "white" 
        } else {
            imageUploadBox.style.backgroundImage = `url("images/document.jpg")`;
        }
    });
});

imageDeleteButton.addEventListener("click", ()=>{
    imageUploadBox.removeAttribute("style")
    imageUploadButton.removeAttribute("style")
    imageUploadBoxSpan.removeAttribute("style")   
    imageDeleteButton.style.color = "black" 
})