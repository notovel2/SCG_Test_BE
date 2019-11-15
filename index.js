const express = require('express')
const app = express()
const {config} = require('./config')
const {port} = config
const scgRouter = require('./routers/scg-router')

app.use(express.json())
app.use('/SCG', scgRouter)

app.listen(port, () => {
    console.log(`listening at port ${port}`)
})