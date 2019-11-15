const express = require('express')
const router = express.Router()
const {isNullOrUndefined} = require('../utils/validator')
const {findPlaces} = require('../controllers/places-google-search-controller')
router.get('/', (req, res) => {
    res.send('GET')
})

router.post('/', (req, res) => {
    try {
        findPlaces(req, res)
    } catch (error) {
        res.status(400).send('Bad request na')
    }
})

module.exports = router