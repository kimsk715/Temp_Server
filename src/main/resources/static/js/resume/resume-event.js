const resumeId = document.querySelectorAll(".managemenu-wrapper .warning")

document.addEventListener('DOMContentLoaded', async (e) => {
     await resumeSelectService.getResumeList(resumeLayout.showList)
     const resumeId = document.querySelectorAll(".managemenu-wrapper .warning")
          console.log(resumeId);
     resumeId.forEach((id)=>{
          id.addEventListener('click', (e)=>{
               const val = e.target.getAttribute("id");

                resumeSelectService.remove(val);
          });
     });
});





