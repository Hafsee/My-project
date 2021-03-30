// jshint esversion:6
const express = require("express");

const app = express();

app.get("/", function (request, response){
    response.send("Hello");
});

app.get("/About", function (request, response){
    response.send("Hi i am Hafsat");
});

app.listen(3000, function () {
    console.log ("Server started on port 3000");
});