const express = require('express');

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

app.listen(8080, () => {
    console.log('listening on port 8080');
})