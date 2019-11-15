const {googleAPIKey} = require('../config')
const axios = require('axios')
const BANGSUE_LOCATION = {
    lat: 13.805879, 
    lon: 100.537655
} 
const getUrl = (lat, lon, radius = 1500, type = "restaurant") => {
    return `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=${radius}&type=${type}&keyword=&key=${googleAPIKey}`
}
exports.findPlaces = async () => {
    let url = getUrl(BANGSUE_LOCATION.lat,BANGSUE_LOCATION.lon)
    let response = await axios.default.get(url)
    return response.data.results
}