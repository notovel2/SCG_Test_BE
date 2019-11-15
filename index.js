const express = require('express')
const app = express()
const {config} = require('./config')
const scgRouter = require('./routers/scg-router')
const SCG = require('./controllers/SCG')
app.use('/SCG', scgRouter)
const scg = new SCG()
scg.findXYZ([
    "X",
    "5",
    "9",
    "15",
    "23",
    "Y",
    "Z"
])
app.listen(config.port)