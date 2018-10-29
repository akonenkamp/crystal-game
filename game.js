var randomNumber = "";
var wins = 0;
var losses = 0
var counter = 0;
var images = ["crystal_1.JPG", "crystal_2.JPG", "crystal_3.JPG", "crystal_4.JPG"]

function randomNumGenerator() {
    randomNumber = Math.floor(Math.random() * 9) + 1;

}

function resetGame() {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
        crystal.attr("height", "100");
        $(".crystal-images").append(crystal);

    }
}

function resetHTML() {
    $(".target-number").html(randomNumber);
    $(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
    $(".score-number").html(counter);
    $(".crystal-images").empty();
}
function resetTotals () {
    randomNumber ();
    counter = 0;
    resetHTML ();
    resetCrystals ();
}

// Running Code

// Inital Page Set Up
randomNumGenerator();
resetHTML ();
resetGame ();



// logic for when crystals are clicked
function clickCrystals () {
    //attr returns first value of selected html element
    counter += parseInt($(this).attr("value"));
    $(".score-number").html(counter);
    if (counter == randomNumber) {
        wins++;
        resetTotals();
    }
    else if (counter > randomNumber) {
        losses++;
        resetTotals();
    };
};

$(document).on("click", ".crystal", clickCrystals);