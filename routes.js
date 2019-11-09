import { SSL_OP_TLS_BLOCK_PADDING_BUG } from "constants";

// Routes
// Basic route that sends the user first to AJAX Page
blog.get("/", function(req, res) {
    res.sendFile(path.join("view.html"));
});

blog.get("/add", function (req, res) {
    res.sendFile(path.join("add.html"));
});

