const axios = require('axios')
const {lineConfig} = require('../config')

exports.reply = async (message, replyToken) => {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${lineConfig.channelAccessToken}`
    }
    let body = JSON.stringify({
        replyToken: replyToken,
        messages: [
            {
                type: 'text',
                text: message
            }
        ]
    })
    let instance = axios.create({
        headers: headers
    })
    instance.post(lineConfig.url, body)
}