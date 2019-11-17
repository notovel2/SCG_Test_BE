const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('GET')
})

router.post('/', (req, res) => {
    console.log('req', req);
    let events = req.body.events
    res.json({
        replyToken: events[0].replyToken,
        messages: [
            {
                type: 'text',
                text: 'Received'
            }
        ]
    })
})

module.exports = router