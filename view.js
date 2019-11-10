$("#search-btn").on("click", function() {
    var searchedCharacter = $("character-search").val().trim();

    // Using a RegEx Pattern to remove spaces from searchedCharacter
    searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();

    $.get("/api/charcters" + searchedCharacter, function(data) {
        console.log(data);
        if (data) {
            $("#stats").show();
            $("#name").text(data.name);
            $("role").text(data.role);
            $("#age").text(data.age);
        } else {
            $("#name").text(
                "No Results.");
                $("stats").hide();
        }
    });
});