const {reply} = require('../services/line-bot-service')
const {findPlaces} = require('../services/google-service')

exports.randomRestaurant = async (replyToken) => {
    let results = await findPlaces()
    if (results.length > 0) {
        let randomIndex = Math.floor(Math.random() * Math.floor(results.length)) - 1;
        let result = results[randomIndex]
        // console.log(result);
        let location = result.geometry.location
        let message = `วันนี้ไปกินร้าน ${result.name} แถว ${result.vicinity} กันดีมั้ย
google maps: https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`
        reply(message, replyToken)
    }
}