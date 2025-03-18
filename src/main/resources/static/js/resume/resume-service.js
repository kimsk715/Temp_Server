
// 컨트롤러로부터 데이터받기
const resumeSelectService = (() => {
    const getResumeList = async (callback) => {
        const response = await fetch(`/resumes/main`)
        const resumeList = await response.json();

         if(callback) {
             callback(resumeList)
         }
    };


    const remove = async (id) => {
        await fetch(`/resume/delete?id=${id}`, {
            method: "delete"
        });
    }

    return {getResumeList:getResumeList, remove: remove}

})();


