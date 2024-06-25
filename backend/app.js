const express = require('express');
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>")
})

app.listen(8000, () => {
    console.log('port is listening');
})