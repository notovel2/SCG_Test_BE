const express = require('express')
const router = express.Router()
const {findXYZ} = require('../controllers/SCG')
const {isNullOrUndefined} = require('../utils/validator')

router.get('/', (req, res) => {
    res.send('Hello')
})

router.post('/', (req, res) => {
    try {
        let result = findXYZ(req.body)
        res.send(result)
    } catch (error) {
        res.status(400).send('Bad request na')
    }
})

module.exports = router