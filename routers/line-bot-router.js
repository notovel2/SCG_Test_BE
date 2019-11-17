const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('GET')
})

router.post('/', (req, res) => {
    console.log('req', req);
    res.json({})
    // res.json(req.body.events)
})

module.exports = router