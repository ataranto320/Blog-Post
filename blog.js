// Dependencies
var express = require("express");
var path = require("path");

// Set up express app
var blog = express();
var PORT = 3000;

// Set up express app to handle data parsing 
blog.use(express.urlencoded({ extended: true}));
blog.use(express.json());

// Blog posts 
var posts = [
    {
        id: 1,
        author: "Tom",
        authorId: 1,
        likes: 960,
        popularity: 0.13,
        reads: 50361,
        tags: ["tech", "health"]
    },
    {
        id: 2,
        author: "Janet",
        authorId: 2,
        likes: 1040,
        popularity: 0.11,
        reads: 71357,
        tags: ["fitness", "empowerment"]
    },
    {
        id: 3,
        author: "Jake",
        authorId: 3,
        likes: 979,
        popularity: 0.15,
        reads: 43287,
        tags: ["video games", "movies"]
    }
];

// Routes
// Basic route that sends the user first to AJAX Page
blog.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

blog.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all posts
blog.get("/api/posts", function(req, res) {
    return res.json(posts);
});

// Displays a single post, or returns false
blog.get("/api/posts/:post", function(req, res) {
    var chosen = req.params.post;

    console.log(chosen);

    for (var i = 0; i < posts.length; i++) {
        if (chosen === posts[i].routeName) {
            return res.json(posts[i]);
        }
    }
    return res.json(false);
});

// Create new posts - takes in json input
blog.post("/api/posts", function(req, res) {
    // req.body hosts is equal to the json post sent from the user
    // this works because of our body parsing middleware
    var newPost = req.body;

    // using a RegEx Pattern to remove spaces from new Character
    newPost.routeName = newPost.name.replace(/\s+/g, "").toLowerCase();

    console.log(newPost);

    characters.push(newPost);

    res.json(newPost);
});

// Starts the server to begin listening
blog.listen(PORT, function() {
    console.log("Blog listening on PORT " + PORT);
});