const express = require('express')
const app = express()
const port = 80
var timeSinceFed = "defaultTimeText"
var dayFed = "defaultDayText"

// for parsing application/json
app.use(express.json()) 

//for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true})) 

//Send current TSF and day in JSON format as response to GET request at root URL
app.get('/', (req, res) => res.json({ time: timeSinceFed, day: dayFed})) 

//Update current TSF with kvp from POST body and echo time back
app.post('/', (req, res) => {   
    if(req.body.time == null || req.body.day == null){
        res.send(`POST request formatted incorrectly`)
    } else {
        timeSinceFed = req.body.time
        dayFed = req.body.day
        console.log(req.body)
        res.send(`POST request received: ${dayFed}, ${timeSinceFed}`)
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))