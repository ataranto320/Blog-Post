$("#search-btn").on("click", function() {
    var searchedPost = $("#post-search").val().trim();

    // Using a RegEx Pattern to remove spaces from searchedCharacter
    searchedPost = searchedPost.replace(/\s+/g, "").toLowerCase();

    $.get("/api/posts" + searchedPost, function(data) {
        console.log(data);
        if (data) {
            $("#info").show();
            $("#author").text(data.author);
            $("#id").text(data.id);
            $("#authorid").text(data.authorid);
            $("#likes").text(data.likes);
            $("#pop").text(data.popularity);
            $("#reads").text(data.reads);
            $("#tags").text(data.tags);
        } else {
            $("#author").text(
                "No Results.");
                $("info").hide();
        }
    });
});