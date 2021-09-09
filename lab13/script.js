var introvertScore = 0;
var extrovertScore = 0;

function checkQuiz() {
    var answer1 = document.getElementById("question1").value;
    console.log("Question 1: " + answer1);

    var answer2 = document.getElementById("question2").value;
    console.log("Question 2: " + answer2);

    var answer3 = document.getElementById("question3").value;
    console.log("Question 3: " + answer3);

    var answer4 = document.getElementById("question4").value;
    console.log("Question 4: " + answer4);

    var answer5 = document.getElementById("question5").value;
    console.log("Question 5: " + answer5);

    if (answer1 == 0 || answer2 == 0 || answer3 == 0 || answer4 == 0 || answer5 == 0) {
        alert("You have not answered all of the questions. Please choose an answer.");
    }

    if (answer1 > 0 && answer2 > 0 && answer3 > 0 && answer4 > 0 && answer5 > 0) {
        if (answer1 == 1) {
            introvertScore++;
        }
        if (answer1 == 2) {
            extrovertScore++;
        }

        if (answer2 == 1) {
            introvertScore++;
        }
        if (answer2 == 2) {
            extrovertScore++;
        }

        if (answer3 == 1) {
            introvertScore++;
        }
        if (answer3 == 2) {
            extrovertScore++;
        }

        if (answer4 == 1) {
            introvertScore++;
        }
        if (answer4 == 2) {
            extrovertScore++;
        }

        if (answer5 == 1) {
            introvertScore++;
        }
        if (answer5 == 2) {
            extrovertScore++;
        }

        document.getElementById("finalScore").innerHTML = "Your final score is:<br>" + "Extrovert: " + extrovertScore + "<br>" + "Introvert: " + introvertScore + "<br>";

        if (extrovertScore > introvertScore) {
            document.getElementById("finalScore").innerHTML += "<br>You are an EXTROVERT";
        }
        if (introvertScore > extrovertScore) {
            document.getElementById("finalScore").innerHTML += "<br>You are an INTROVERT";
        }
        if (extrovertScore == introvertScore) {
            document.getElementById("finalScore").innerHTML += "<br>You are an AMBIVERT";
        }
    }
}

var images = [
    "img/baby-tires.JPG",
    "img/deer.jpg",
    "img/egg.PNG",
    "img/frog.jpg",
    "img/goose.JPG",
    "img/pain.JPG",
    "img/pet-him.JPG",
    "img/recorder.PNG",
    "img/stonks.jpg",
    "img/supreme-victory.jpg"
];

var descriptions = [
    "Baby dolls mixed with tires",
    "A deer licking a light switch",
    "An egg with leg",
    "The frog from Peppa the Pig",
    "A goose posing for you",
    "A horse, pain",
    "Would you gently pet him for 88 minutes?",
    "An orange man playing the recorder while wearing a wig",
    "Stonks",
    "A goose, supreme victory"
];

function createGallery() {
    // Clearing out the images first
    document.getElementById("gallery").innerHTML = "";

    // Looping in the images
    var maxNumberPhotos = document.getElementById("number").value;
    var output = "";
    for(var i = 0; i < maxNumberPhotos; i++) {
        output += "<img src='";
        output += images[i];
        output += "'>"
        output += "<p>";
        output += descriptions[i];
        output += "</p><br>";
    }

    document.getElementById("gallery").innerHTML += output;
}