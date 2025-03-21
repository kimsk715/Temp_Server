const companyProgramService = (() => {
    const getPrograms = async (callback) => {
        const response = await fetch(`/enterprises/programs-list`, {
            method: "POST"
        })


        const programList = await response.json()

        if (callback){
            callback(programList)
        }
    }
    return {getPrograms: getPrograms}
})();