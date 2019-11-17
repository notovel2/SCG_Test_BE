const express = require('express')
const router = express.Router()
const {replyMessage} = require('../controllers/line-bot-controller')

router.get('/', (req, res) => {
    res.send('GET')
})

router.post('/', (req, res) => {
    let events = req.body.events
    replyMessage(events[0].replyToken)
    res.json({})
})

module.exports = router