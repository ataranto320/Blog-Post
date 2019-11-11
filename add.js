$("#add-btn").on("click", function(event) {
    event.preventDefault();
    var newPosts = {
        id: $("#id").val().trim(),
        author: $("#author").val().trim(),
        auhtorid: $("#authorid").val().trim(),
        likes: $("#likes").val().trim(),
        popularity: $("#pop").val().trim(),
        reads: $("#reads").val().trim(),
        tags: $("#tags").val().trim(),
    };

    $.post("/api/posts", newPosts).then(function(data) {
        console.log("add.html", data);
        alert("Adding post");
    });
});