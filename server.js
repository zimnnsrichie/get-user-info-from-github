const express = require('express');
const server = express();
const api = require('./api');

server.use('/api', api);

server.all('/', (req, res, next) => {
    console.log("Welcome...");
    next();
}, (req, res) => {
    res.send("Unidentified request");
});

server.listen(3000, (err) => {
    if (err) throw err;

    console.log('Server is listening');
});
