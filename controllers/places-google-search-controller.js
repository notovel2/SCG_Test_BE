const {findPlaces} = require('../services/google-service')
exports.findPlaces = (req, res) => {
    findPlaces().then(response => {
        console.log('response', response);
        
        res.send(response)
    }).catch(err => console.log())
}