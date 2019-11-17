import Axios from 'axios'

const axios = require('axios')
const {lineConfig} = require('../config')

export const reply = (message, replyToken) => {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${lineConfig.channelAccessToken}`
    }
    let body = JSON.stringify({
        replyToken: replyToken,
        messages: [
            {
                type: 'text',
                text: 'Hello'
            }
        ]
    })
    let instance = Axios.create({
        headers: headers
    })
    instance.post(lineConfig.url, body)
}