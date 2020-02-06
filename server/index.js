//imports
require('dotenv').config();
const express = require("express");
const app = express();
const controller = require('./controller');
const massive = require('massive');

// //controllers
// const { register } = require('./controller')

//.env
const { SERVER_PORT, DB_STRING, SESSION_SECRET } = process.env;

//middleware
app.use(express.json());

//massive
massive(DB_STRING).then(db => {
    app.set('db', db);
    console.log('DB Connected');
});

//endpoints
app.post('/auth/register', controller.register);


//listen
app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
});