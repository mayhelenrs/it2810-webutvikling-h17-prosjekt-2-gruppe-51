var dict = {
    "home-button": "home.html",
    "dog-button": "dog.html",
    "travel-button": "travel.html",
    "sun-button": "sun.html",
    "beer-button": "beer.html",
    "eddy-button": "eddy.html",
    "button": "documentation.html"
};


$("a").click(function(e) {
    var temp = e.className.split(" ")[0];
    $.get("assets/content/"+ dict[temp], function(data) {
        $("#pagecontent").html(data);
        if (temp == "beer-button") {
            initiateBubbles($(".beer-bubble"));
        }
    });
}) ;
