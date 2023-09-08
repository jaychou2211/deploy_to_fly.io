const express = require('express');
require('dotenv').config()

const port = process.env.PORT || 8080;

const app = express();
app.get('/', (req, res) => {
    console.log('someone made a request!');
    res.send('Hi there');
})

app.get('/hello', (req, res) => {
    console.log('someone made a request to /hello endpoint!');
    res.send('hello');
})

app.get('/a', (req, res) => {
    console.log('process.env.A : ', process.env.A);
    res.send(process.env.A);
})

app.listen(8080, () => {
    console.log('listening on port 8080');
})