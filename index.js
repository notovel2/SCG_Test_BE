const express = require('express')
const app = express()
const {port} = require('./config')
const scgRouter = require('./routers/scg-router')
const placesGoogleSearchRouter = require('./routers/places-google-search-router')

app.use(express.json())
app.use('/SCG', scgRouter)
app.use('/places', placesGoogleSearchRouter)

app.listen(port, () => {
    console.log(`listening at port ${port}`)
})