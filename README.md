# chonktracker-backend
Intended to be used as a backend for the mobile android application chonk tracker. The applications main purpose will be to hold the time my cat was last fed, and be able to update the time from a mobile device.

## use
To use, the machine should have node installed, then execute in a terminal:
`npm start`
This will spin up the app.js express application. The application is now ready to handle and respond to GET and POST HTTP requests. The requests are meant to be sent from an android app, however cURL will be used for testing purposes. 
To check the current saved time execute:
`curl http://localhost:3000`
This will respond will the current saved time. 
To update the saved time execute:
`curl -d '{"time":"xyz"}' -H "Content-Type: application/json" -X POST http://localhost:3000`
however instead of 'xyz', substitute the time you wish to reflect on the application.