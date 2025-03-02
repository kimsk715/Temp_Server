const allCheck = document.querySelector("div.top-menu input[type=checkbox]")
const applicantCheckbox = document.querySelectorAll(".file-checkbox")

allCheck.addEventListener("change",()=>{
    applicantCheckbox.forEach((check) =>{
        if(allCheck.checked){
            check.checked = true;
        }
        else{
            check.checked = false;
        }
    })
})

const statusChange = document.querySelector(".statuschange")



const closeModal = document.getElementById("closeModal");
const closeModal2 = document.getElementById("closeModal2");
const emailModal = document.getElementById("emailModal");
statusChange.addEventListener("click", function () {
        emailModal.style.display = "flex";
    });


closeModal.addEventListener("click", function () {
    emailModal.style.display = "none";
});
closeModal2.addEventListener("click", function () {
    emailModal.style.display = "none";
});


