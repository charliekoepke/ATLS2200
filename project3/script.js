document.getElementById("pokeImage").style.visibility = "visible";
document.getElementById("1").style.visibility = "visible";
document.getElementById("label1").style.visibility = "visible";
document.getElementById("2").style.visibility = "visible";
document.getElementById("label2").style.visibility = "visible";
document.getElementById("3").style.visibility = "visible";
document.getElementById("label3").style.visibility = "visible";
document.getElementById("4").style.visibility = "visible";
document.getElementById("label4").style.visibility = "visible";
document.getElementById("submitButton").style.visibility = "visible";

var score = 0;

var audio = document.getElementById("audio");

var pokeCount = 0;

var poke1, poke2, poke3, poke4;
poke1 = Math.round(Math.random() * 7);
poke2 = Math.round(Math.random() * 7);
poke3 = Math.round(Math.random() * 7);
poke4 = Math.round(Math.random() * 7);
checkNumbers();

// Test to see the numbers
console.log(poke1);
console.log(poke2);
console.log(poke3);
console.log(poke4);

var poke = [
    poke1,
    poke2,
    poke3,
    poke4
];

var silhouettes = [
    "img/bulbasaur-silhouette.png",
    "img/dratini-silhouette.png",
    "img/ekans-silhouette.png",
    "img/gengar-silhouette.png",
    "img/marowak-silhouette.png",
    "img/pikachu-silhouette.png",
    "img/squirtle-silhouette.png",
    "img/vulpix-silhouette.png"
];

// The correct choices plus 8 random choices
var choices = [
    'Bulbasaur',
    'Dratini',
    'Ekans',
    'Gengar',
    'Marowak',
    'Pikachu',
    'Squirtle',
    'Vulpix',
    'Snorlax',
    'Raichu',
    'Charmander',
    'Froakie',
    'Audino',
    'Haunter',
    'Floatzel'
];

var pokemon = [
    "img/bulbasaur.png",
    "img/dratini.png",
    "img/ekans.png",
    "img/gengar.png",
    "img/marowak.png",
    "img/pikachu.png",
    "img/squirtle.png",
    "img/vulpix.png"
];

var cries = [
    "audio/bulbasaur-cry.mp3",
    "audio/dratini-cry.mp3",
    "audio/ekans-cry.mp3",
    "audio/gengar-cry.mp3",
    "audio/marowak-cry.mp3",
    "audio/pikachu-cry.mp3",
    "audio/squirtle-cry.mp3",
    "audio/vulpix-cry.mp3"
];

window.onload = start();

function start() {
    audio.src = "audio/whos-that-pokemon.mp3"

    if (pokeCount < 4) {
        audio.play();
        document.getElementById("pokeImage").src = silhouettes[poke[pokeCount]];
        document.getElementById("pokeImage").alt = choices[poke[pokeCount]];
        generateChoices();
        // Buttons will activate that check answer and then move to next question
    }
    else {
        // Display the score
        displayScore();
        // Display the 'Start Over' button
        document.getElementById("startOver").style.visibility = "visible";
    }
}

function checkAnswer() {
    if (document.getElementById("pokeImage").alt == document.getElementById("label1").innerHTML && document.getElementById("1").checked) {
        score++;
        document.getElementById("answer").innerHTML = "CORRECT!";
    }
    else if (document.getElementById("pokeImage").alt == document.getElementById("label2").innerHTML && document.getElementById("2").checked) {
        score++;
        document.getElementById("answer").innerHTML = "CORRECT!";
    }
    else if (document.getElementById("pokeImage").alt == document.getElementById("label3").innerHTML && document.getElementById("3").checked) {
        score++;
        document.getElementById("answer").innerHTML = "CORRECT!";
    }
    else if (document.getElementById("pokeImage").alt == document.getElementById("label4").innerHTML && document.getElementById("4").checked) {
        score++;
        document.getElementById("answer").innerHTML = "CORRECT!";
    }
    else {
        document.getElementById("answer").innerHTML = "INCORRECT!";
    }
    // Move onto next Pokémon by displaying next button
    // Display the Pokémon's actual image
    // Play the Pokémon's cry
    audio.src = cries[poke[pokeCount]];
    audio.play();
    document.getElementById("pokeImage").src = pokemon[poke[pokeCount]];
    document.getElementById("nextButton").style.visibility = "visible";
}

function generateChoices() {
    for (var i = 1; i < 5; i++) {
        document.getElementById("label" + i.toString()).innerHTML = choices[Math.round(Math.random() * 14)];
        // Extra loop to ensure randomness
        for (var j = 1; j < i; j++) {
            if (document.getElementById("label" + j.toString()).innerHTML == document.getElementById("label" + i.toString()).innerHTML) {
                document.getElementById("label" + i.toString()).innerHTML = choices[Math.round(Math.random() * 14)];
            }
        }
    }

    console.log("These are the choices:");
    console.log(document.getElementById("label1").innerHTML);
    console.log(document.getElementById("label2").innerHTML);
    console.log(document.getElementById("label3").innerHTML);
    console.log(document.getElementById("label4").innerHTML);

    var includesAnswer = false;
    // Making sure that the correct answer is at least one of the choices
    for (var k = 1; k < 5; k++) {
        if (document.getElementById("pokeImage").alt == document.getElementById("label" + k.toString()).innerHTML) {
            includesAnswer = true;
        }
    }

    if (!includesAnswer) {
        // Choose a random number between 1 and 4 and replace that choice with the correct answer
        var random = Math.round((Math.random() * 3) + 1);
        console.log("Random Number:");
        console.log(random);
        document.getElementById("label" + random).innerHTML = document.getElementById("pokeImage").alt;
    }
}

function nextQuestion() {
    pokeCount++;
    document.getElementById("answer").innerHTML = "";
    document.getElementById("nextButton").style.visibility = "hidden";
    start();
}

function checkNumbers() {
    // Makes sure that the numbers are all different
    var allDiff = false;
    while (!allDiff) {
        if (poke1 == poke2 || poke1 == poke3 || poke1 == poke4) {
            poke1 = Math.round(Math.random() * 7);
        }
        if (poke2 == poke3 || poke2 == poke4) {
            poke2 = Math.round(Math.random() * 7);
        }
        if (poke3 == poke4) {
            poke3 = Math.round(Math.random() * 7);
        }

        if (poke1 != poke2 && poke1 != poke3 && poke1 != poke4 && poke2 != poke3 && poke2 != poke4 && poke3 != poke4) {
            allDiff = true;
        }
    }
}

function displayScore() {
    // Make everything hidden and just the score visible
    document.getElementById("pokeImage").style.visibility = "hidden";
    document.getElementById("1").style.visibility = "hidden";
    document.getElementById("label1").style.visibility = "hidden";
    document.getElementById("2").style.visibility = "hidden";
    document.getElementById("label2").style.visibility = "hidden";
    document.getElementById("3").style.visibility = "hidden";
    document.getElementById("label3").style.visibility = "hidden";
    document.getElementById("4").style.visibility = "hidden";
    document.getElementById("label4").style.visibility = "hidden";
    document.getElementById("submitButton").style.visibility = "hidden";

    document.getElementById("score").style.visibility = "visible";
    document.getElementById("score").innerHTML = "Your score is " + score + " /4!";
}