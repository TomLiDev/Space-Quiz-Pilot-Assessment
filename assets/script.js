
const questionBank = [
    {
        questionText: "Which planet was declassified from a planet to a dwarf planet in 2006?",
        answer1: "Mercury",
        answer2: "Europa",
        answer3: "Pluto",
        correctAnswer: "Pluto"
    },
    {
        questionText: "What is the third planet for the Sun?",
        answer1: "Earth",
        answer2: "Venus",
        answer3: "Jupiter",
        correctAnswer: "Earth"
    },
    {
        questionText: "What is the largest planet in the solar system?",
        answer1: "Earth",
        answer2: "Venus",
        answer3: "Jupiter",
        correctAnswer: "Jupiter"
    },
    {
        questionText: "Which is these is not a moon of Jupiter?",
        answer1: "Io",
        answer2: "Europa",
        answer3: "Triton",
        correctAnswer: "Triton"
    },
    {
        questionText: "Approximately how long ago was the Big Bang?",
        answer1: "13.8 billion years",
        answer2: "22.6 billion years",
        answer3: "107.3 billion year",
        correctAnswer: "13.8 billion years"
    },
    {
        questionText: "When was Neptune discovered?",
        answer1: "1790",
        answer2: "1888",
        answer3: "1846",
        correctAnswer: "1846"
    },
    {
        questionText: "What distance is one astronomical unit (AU) equal to?",
        answer1: "The distance between the Earth and the Moon",
        answer2: "The distance between the Earth and the Sun",
        answer3: "The distance between Mars and Venus",
        correctAnswer: "The distance between the Earth and the Sun"
    },
    {
        questionText: "What is the average surface temperature of Venus?",
        answer1: "100 degrees",
        answer2: "278 degrees",
        answer3: "475 degrees",
        correctAnswer: "475 degrees"
    },
];

/**  Overall run game function */

document.addEventListener("DOMContentLoaded", function () {
    let n = Math.floor(Math.random() * 5) + 1;
    let firstQuestion = questionBank[n].questionText;
    document.getElementById("question-text").innerHTML = firstQuestion;
    document.getElementById("answer1").innerHTML = questionBank[n].answer1;
    document.getElementById("answer2").innerHTML = questionBank[n].answer2;
    document.getElementById("answer3").innerHTML = questionBank[n].answer3;

    let buttons = document.getElementsByClassName("answer-buttons");
    for (let button of buttons) {
        button.addEventListener("click", checkAnswer);
    }

    console.log("Test");
    console.log(questionBank[n].correctAnswer);
    let rightAnswer = questionBank[n].correctAnswer;
    console.log(rightAnswer);

    function checkAnswer() {
        console.log("Button pressed");
        console.log(this.innerHTML);
        if (this.innerHTML = rightAnswer) {
            console.log("correct");
            alert("You got it right");
            addCorrectScore();
        } else {
            wrongAnswer();
        }
        console.log("Button pressed");
    }

});

/** Function for Adding score for correct answer */

function addCorrectScore() {
    let oldScore = parseInt(document.getElementById("score").innerHTML);
    document.getElementById("score").innerHTML = oldScore + 10;
    console.log(oldScore);
}

/** Wrong Anser Function */

