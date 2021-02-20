const express = require('express');
const api = express.Router();
const fetch = require('node-fetch');

api.get('/getUserInfo/:id', (req, res) => {
    // res.send(req.method + "-" + req.baseUrl + "/" + (req.params.id));

    fetch("https://api.github.com/users/" + req.params.id)
        .then(res => res.json())
        .then(json => res.send(json))
        .catch((err) => {
            console.log("catch");
            res.send(err);
        });
});

api.all('/*', (req, res) => {
    res.send("Unidentified request");
});

module.exports = api;
