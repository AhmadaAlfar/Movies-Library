'use strict';
const express = require("express");
const recipesData = require('./data/data.json');
const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());
let result = [];
function Recipe(title, poster_path, overview) {
    this.title = title;
    this.poster_path = poster_path;
    this.overview = overview;
    result.push(this);
}

    app.get("/home", (req, res) => {
    recipesData.data.forEach((element) => {
        new Recipe(element.title, element.poster_path, element.overview);
    });
    res.json(result);
})

app.get("/favorite", (req, res) => {
    res.send('Welcome to Favorite Page');
})
app.use(notFoundHandler);

function notFoundHandler(req, res) {
    res.status(404).send(' the server error');
}
function notFoundHandler(req, res) {
    res.status(404).send(' not found page');
}
app.listen(port, () => {
    console.log(`server is listing on port ${port}`);
});