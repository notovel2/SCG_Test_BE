const {googleAPIKey} = require('../config')
const axios = require('axios')
const {cache} = require('../shared/cache')
const {isNullOrUndefined} = require('../utils/validator')

const BANGSUE_LOCATION = {
    lat: 13.805879, 
    lon: 100.537655
} 
const getUrl = (lat, lon, radius = 1500, type = "restaurant") => {
    return `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=${radius}&type=${type}&keyword=&key=${googleAPIKey}`
}
exports.findPlaces = async () => {
    let key = `${BANGSUE_LOCATION.lat},${BANGSUE_LOCATION.lon}`
    let url = getUrl(BANGSUE_LOCATION.lat,BANGSUE_LOCATION.lon)
    let value = cache.get(key)
    if (!isNullOrUndefined(value)) {
        console.log('cache');
        return value
    }
    let response = await axios.default.get(url)
    let results = response.data.results
    cache.set(key, results)
    return results
}