const MATCH_ARRAY = ['x', 'y', 'z']

exports.findXYZ = (body) => {
    let array = body.input
    let result = {}
    let tmpMatchArray = MATCH_ARRAY
    
    try {
        if (Array.isArray(array)) {
            array.forEach((value, index) => {
                if (tmpMatchArray.length <= 0) { return }
                value = value.toLowerCase()
                let matchIndex = tmpMatchArray.findIndex(matchItem => matchItem.toLowerCase() === value)

                if (matchIndex >= 0) {
                    let key = tmpMatchArray[matchIndex].toLowerCase()
                    result[key] = index
                    tmpMatchArray.splice(matchIndex, 1)
                }
            })
        }
    } catch (error) {
        console.log(error);
        throw error
    }
    return result
}