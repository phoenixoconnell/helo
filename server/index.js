require('dotenv').config();
const express = require("express");
const app = express();
const controller = require('./controller');
const massive = require('massive');

const { SERVER_PORT, DB_STRING, SESSION_SECRET } = process.env;

app.use(express.json());

massive(DB_STRING).then(db => {
    app.set('db', db);
    console.log('DB Connected');
});

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
});