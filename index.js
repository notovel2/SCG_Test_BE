const express = require('express')
const app = express()
const {port, origin} = require('./config')
const scgRouter = require('./routers/scg-router')
const placesGoogleSearchRouter = require('./routers/places-google-search-router')
const botRouter = require('./routers/line-bot-router')
const cors = require('cors')
const {lineConfig} = require('./config')
const {middleware} = require('@line/bot-sdk')

app.use(cors({
    origin: origin
}))
// app.use(middleware(lineConfig))
app.use(express.json())
app.use('/SCG', scgRouter)
app.use('/places', placesGoogleSearchRouter)
app.use('/bot', botRouter)

app.listen(port, () => {
    console.log(`listening at port ${port}`)
})