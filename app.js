const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: true})) //for parsing application/x-www-form-urlencoded

var timeSinceFed = "defaultTimeText"

app.get('/', (req, res) => res.send(timeSinceFed))

app.post('/', (req, res) => {
    timeSinceFed = req.body.time
    console.log(req.body)
    res.send(`POST request received: ${timeSinceFed}`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))