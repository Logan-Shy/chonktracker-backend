const express = require('express')
const app = express()
const port = 80
var timeSinceFed = "defaultTimeText"

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: true})) //for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => res.send(timeSinceFed)) //Send current TSF in response to GET request at root URL

app.post('/', (req, res) => {   //Update current TSF with kvp from POST body and echo time back
    if(req.body.time == null){
        res.send(`POST request formatted incorrectly`)
    } else {
        timeSinceFed = req.body.time
        console.log(req.body)
        res.send(`POST request received: ${timeSinceFed}`)
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))