const express = require('express');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
require('./models/db')
const app = express()

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>")
})

app.listen(8000, () => {
    console.log('port is listening');
})