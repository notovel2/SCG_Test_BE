const {reply} = require('../services/line-bot-service')
const {findPlaces} = require('../services/google-service')

exports.replyMessage = async (replyToken) => {
    let results = await findPlaces()
    if (results.length > 0) {
        let result = results[0]
        reply(`${result.name} 
        ${result.vicinity}`, replyToken)
    }
}