const {findPlaces} = require('../services/google-service')
exports.findPlaces = (req, res) => {
    findPlaces().then(response => {
        res.send(response)
    }).catch(err => console.log(err))
}