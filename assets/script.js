
let questionBank = ["Which planet was declassified from a planet to a dwarf planet in 2006?", "How many moons does Jupiter have?", 'text', 'moretext'];
const questionBank2 = [];
questionBank2[0] = 'I love questions';
questionBank2[1] = 'I hate questions';

const questionBankFull = [
    {
        questionText: "Which planet was declassified from a planet to a dwarf planet in 2006?",
        answer1: "Mercury",
        answer2: "Europa",
        answer3: "Pluto"
    },
    {
        questionText: "Second bitching question",
        answer1: "moreballs",
        answer2: "slut",
        answer3: "donkey"
    }
];

/**  Overall run game function */

document.addEventListener("DOMContentLoaded", function () {
    let firstQuestion = questionBank[0];
    document.getElementById("question-text").innerHTML = firstQuestion;
    console.log(firstQuestion);
});

console.log(questionBank[1]);
console.log(questionBank2[1]);
console.log(questionBankFull[0]);
console.log(questionBankFull[0].answer1);

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

