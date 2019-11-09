// Dependencies
var express = require("express");
var path = require("path");

// Set up express app
var blog = express();
var PORT = 3000;

// Set up express app to handle data parsing 
blog.use(express.urlencoded({ extended: true}));
blog.use(express.json());

// Starts the server to begin listening
blog.listen(PORT, function() {
    console.log("Blog listening on PORT " + PORT);
});