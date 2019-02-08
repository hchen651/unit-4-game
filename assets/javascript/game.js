var targetNumber = Math.floor((Math.random() * 101) + 19);

$("#number-to-guess").text(targetNumber);
$("#current-total").text("0");

var counter = 0;

for (var i = 0; i < 4; i++) {
    var numberOptions = Math.floor((Math.random() * 12)+1);
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.addClass("crystal-image-"+i);
    imageCrystal.attr("src", "assets/images/c" + i + ".png");
    imageCrystal.attr("data-crystalvalue", numberOptions);
    imageCrystal.attr("style", "padding: 10px;");
    $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#current-total").text(counter);

    if (counter === targetNumber) {
        alert("You win!");
        newGame();
    }

    else if (counter >= targetNumber) {
        alert("You lose!!");
        newGame();
    }

});

function newGame() {
    targetNumber = Math.floor((Math.random() * 101)+19);
    counter = 0;
    $("#number-to-guess").text(targetNumber);
    $("#current-total").text(counter);
    for (var i = 0; i < 4; i++) {
        var numberOptions = Math.floor((Math.random() * 12)+1);
        var imageCrystal = $(".crystal-image-"+i);
        imageCrystal.attr("data-crystalvalue", numberOptions);    
        $("#crystals").append(imageCrystal);
    }
}