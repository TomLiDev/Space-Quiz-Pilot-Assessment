
const questionBank = [
    {
        questionText: "Which planet was declassified from a planet to a dwarf planet in 2006?",
        answer1: "Mercury",
        answer2: "Europa",
        answer3: "Pluto"
    },
    {
        questionText: "What is the third planet for the Sun?",
        answer1: "Earth",
        answer2: "Venus",
        answer3: "Jupiter"
    },
    {
        questionText: "What is the largest planet in the solar system?",
        answer1: "Earth",
        answer2: "Venus",
        answer3: "Jupiter"
    }
];

/**  Overall run game function */

document.addEventListener("DOMContentLoaded", function () {
    let n = Math.floor(Math.random() * 2) + 1;
    let firstQuestion = questionBank[n].questionText;
    document.getElementById("question-text").innerHTML = firstQuestion;
    document.getElementById("answer1").innerHTML = questionBank[n].answer1;
    document.getElementById("answer2").innerHTML = questionBank[n].answer2;
    document.getElementById("answer3").innerHTML = questionBank[n].answer3;

    console.log(firstQuestion);
    console.log(n);
});

console.log(questionBank[0]);
console.log(questionBank[0].answer1);

function runQuiz() {
}

function checkAnswer() {
}

function calculateCorrectAnswer() {
}

function incrementScore() {
}

function incrementWrongAnswer() {
}

