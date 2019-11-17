const express = require('express')
const router = express.Router()
const {middleware} = require('@line/bot-sdk')
const {lineConfig} = require('../config')
router.use(middleware(lineConfig))

router.get('/', (req, res) => {
    res.send('GET')
})

router.post('/', (req, res) => {
    console.log('req', req);
    res.json(req.body.events)
})

module.exports = router