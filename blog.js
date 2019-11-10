// Dependencies
var express = require("express");
var path = require("path");

// Set up express app
var blog = express();
var PORT = 3000;

// Set up express app to handle data parsing 
blog.use(express.urlencoded({ extended: true}));
blog.use(express.json());

// Example Star Wars data
var characters = [
    {
        routeName: "yoda",
        name: "Yoda",
        role: "Jedi Master",
        age: 900
    },
    {
        routeName: "darthvader",
        name: "Darth Vader",
        role: "Sith Lord",
        age: 45
    }
]

// Routes
// Basic route that sends the user first to AJAX Page
blog.get("/", function(req, res) {
    res.sendFile(path.join("view.html"));
});

blog.get("/add", function (req, res) {
    res.sendFile(path.join("add.html"));
});

// Displays all characters
blog.get("/api/characters", function(req, res) {
    return res.json(characters);
});

// Displays a single character, or returns false
blog.get("/api/characters/:character", function(req, res) {
    var chosen = req.params.character;

    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }
    return res.json(false);
});

// Create new characters - takes in json input
blog.post("/api/characters", function(req, res) {
    // req.body hosts is equal to the json post sent from the user
    // this works because of our body parsing middleware
    var newCharacter = req.body;

    // using a RegEx Pattern to remove spaces from new Character
    newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newCharacter);

    characters.push(newCharacter);

    res.json(newCharacter);
});

// Starts the server to begin listening 
blog.listen(PORT, function() {
    console.log("App listening to PORT " + PORT);
});

// Starts the server to begin listening
blog.listen(PORT, function() {
    console.log("Blog listening on PORT " + PORT);
});