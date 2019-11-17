const {reply} = require('../services/line-bot-service')
const {findPlaces} = require('../services/google-service')

exports.replyMessage = async (replyToken) => {
    let results = await findPlaces()
    if (results.length > 0) {
        let message = results.map(result => `${result.name} : ${result.vicinity}`).join('\n')
        reply(message, replyToken)
    }
}