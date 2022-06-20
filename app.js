const express = require('express');
const path = require('path');
const app = express()

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.sendFile(__dirname+'/q.html');
})

app.listen(3000)