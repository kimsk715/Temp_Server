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

const openModalButton = document.querySelector("#open-company-inquiry");
const companyInquiryModal = document.querySelector("#inquiry-modal");
const submitButton = document.querySelector(".submit-button");

openModalButton.addEventListener("click",()=>{
    openInquiryModal(companyInquiryModal)
})

submitButton.addEventListener("click", async(e)=>{
    const companyInquiryContent = companyInquiryModal.querySelector("textarea#company-inquiry-content").value;
    const companyInquiryType = companyInquiryModal.querySelector("select#inquiryType").value;

    if(companyInquiryContent == null || companyInquiryType == null){
        e.preventDefault();
        return;
    }
    let path = `/enterprise/insert-inquiry?company-inquiry-type=${companyInquiryType}&company-inquiry-content=${companyInquiryContent}`;
    await fetch(path);
})

const closeButton = document.querySelectorAll(".close-button")

closeButton.forEach((button) =>{
    button.addEventListener("click",()=>{
        closeInquiryModal(companyInquiryModal)
    })
})