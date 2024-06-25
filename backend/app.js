const express = require('express');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then (() => {
    console.log('our db is connected')
}).catch(err => console.log(err.message))
const app = express()

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>")
})

app.listen(8000, () => {
    console.log('port is listening');
})