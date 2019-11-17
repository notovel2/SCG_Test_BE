const express = require('express')
const router = express.Router()
const {middleware} = require('@line/bot-sdk')
const {lineConfig} = require('../config')

router.get('/', (req, res) => {
    res.send('GET')
})

router.post('/', middleware(lineConfig), (req, res) => {
    console.log('req', req);
    res.json({})
    // res.json(req.body.events)
})

module.exports = router