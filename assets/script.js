
const questionBank = [
    {
        questionText: "Which planet was declassified from a planet to a dwarf planet in 2006?",
        answer1: "Mercury",
        answer2: "Europa",
        answer3: "Pluto",
        correctAnswer: "Pluto"
    },
    {
        questionText: "What is the third planet from the Sun?",
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

    let buttons = document.getElementsByClassName("answer-buttons");
    for (let button of buttons) {
        button.addEventListener("click", checkAnswer);
    };

    nextQuestion();

});

/** Next Question Function, called after either a correct or wrong answer is entered */

function nextQuestion() {
    console.log("next");
    let n = Math.floor(Math.random() * 6) + 1;
    let nextQuestion = questionBank[n].questionText;
    document.getElementById("question-text").innerHTML = nextQuestion;
    document.getElementById("answer1").innerHTML = questionBank[n].answer1;
    document.getElementById("answer2").innerHTML = questionBank[n].answer2;
    document.getElementById("answer3").innerHTML = questionBank[n].answer3;

    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        if (button.innerHTML === questionBank[n].correctAnswer) {
            button.setAttribute("data-type", "correct");
        } else {
            button.setAttribute("data-type", "wrong");
        }
    };
};

function checkAnswer() {
    let buttons = document.getElementsByTagName("button");
    console.log("Button pressed");

    if (this.getAttribute("data-type") === "correct") {
        console.log("correct");
        this.className = "correct-answer-button";
        addCorrectScore();
    } else {
        console.log("wrong");
        this.className = "incorrect-answer-button";
        for (let button of buttons) {
            if (button.getAttribute("data-type") === "correct")
                button.className = "correct-answer-button";
        }
        wrongAnswer();
    };

};

/** Function for Adding score for correct answer */

function addCorrectScore() {
    let oldScore = parseInt(document.getElementById("score").innerHTML);
    document.getElementById("score").innerHTML = oldScore + 10;
    console.log("score");
    console.log(oldScore);
    setTimeout(questionStyleReset, 3000);
};

/** Wrong Answer Function */

function wrongAnswer() {
    setTimeout(questionStyleReset, 2000);
};

/** Question Counter Function */

function questionCounter(num1) {
    let count = 1 + num1;
    console.log(count);
};

/** Function to return answer buttons back to normal style */



function questionStyleReset() {
    console.log("reset");
    let changeButtons = document.getElementsByTagName("button");
    console.log(changeButtons);

    for (let button of changeButtons) {
        console.log(button.innerHTML);
        if (button.className === "correct-answer-button") {
            button.classList.remove("correct-answer-button");
            button.classList.add("answer-buttons");
        }
        if (button.className === "incorrect-answer-button") {
            button.classList.remove("incorrect-answer-button");
            button.classList.add("answer-buttons");
        }

    }
    nextQuestion();
};