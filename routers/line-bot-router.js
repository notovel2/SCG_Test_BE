const express = require('express')
const router = express.Router()
const {reply} = require('../controllers/line-bot')

router.get('/', (req, res) => {
    res.send('GET')
})

router.post('/', (req, res) => {
    let events = req.body.events
    reply('Received', events[0].replyToken)
    res.json({})
})

module.exports = router