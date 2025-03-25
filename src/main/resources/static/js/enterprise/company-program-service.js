const companyProgramService = (() => {
    
    // 공고 조회
    const getPrograms = async (callback) => {
        const response = await fetch(`/enterprises/programs-list`, {
            method: "POST",
        })
        const programList = await response.json()

        if (callback){
            callback(programList)
        }
    }
    // 공고등록
    const isnertProgram = async (programDTO, callback) => {
        const response = await fetch(`/enterprises/program-insert`, {
            method: "post",
            body: JSON.stringify(programDTO),
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        })
    }

    return {getPrograms: getPrograms}
})();