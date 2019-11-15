const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    req.query
    res.send('Hello')
})

module.exports = router