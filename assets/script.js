
const questionBank = [
    {
        questionNumber: 1,
        questionText: "Which planet was declassified from a planet to a dwarf planet in 2006?",
        answer1: "Mercury",
        answer2: "Europa",
        answer3: "Pluto",
        correctAnswer: "Pluto"
    },
    {
        questionNumber: 2,
        questionText: "What is the third planet from the Sun?",
        answer1: "Earth",
        answer2: "Venus",
        answer3: "Jupiter",
        correctAnswer: "Earth"
    },
    {
        questionNumber: 3,
        questionText: "What is the largest planet in the solar system?",
        answer1: "Earth",
        answer2: "Venus",
        answer3: "Jupiter",
        correctAnswer: "Jupiter"
    },
    {
        questionNumber: 4,
        questionText: "Which is these is not a moon of Jupiter?",
        answer1: "Io",
        answer2: "Europa",
        answer3: "Triton",
        correctAnswer: "Triton"
    },
    {
        questionNumber: 5,
        questionText: "Approximately how long ago was the Big Bang?",
        answer1: "13.8 billion years",
        answer2: "22.6 billion years",
        answer3: "107.3 billion year",
        correctAnswer: "13.8 billion years"
    },
    {
        questionNumber: 6,
        questionText: "When was Neptune discovered?",
        answer1: "1790",
        answer2: "1888",
        answer3: "1846",
        correctAnswer: "1846"
    },
    {
        questionNumber: 7,
        questionText: "What distance is one astronomical unit (AU) equal to?",
        answer1: "The distance between the Earth and the Moon",
        answer2: "The distance between the Earth and the Sun",
        answer3: "The distance between Mars and Venus",
        correctAnswer: "The distance between the Earth and the Sun"
    },
    {
        questionNumber: 8,
        questionText: "What is the average surface temperature of Venus?",
        answer1: "100 degrees",
        answer2: "278 degrees",
        answer3: "475 degrees",
        correctAnswer: "475 degrees"
    },
    {
        questionNumber: 9,
        questionText: "Who was the first man on the moon?",
        answer1: "Neil Armstrong",
        answer2: "Buzz Aldrin",
        answer3: "Yuri Gagarin",
        correctAnswer: "Neil Armstrong"
    },
    {
        questionNumber: 10,
        questionText: "How many planets in the solar system have rings?",
        answer1: "2",
        answer2: "1",
        answer3: "4",
        correctAnswer: "4"
    },
    {
        questionNumber: 11,
        questionText: "Olympus Mons is the highest mountain on which planet?",
        answer1: "Mars",
        answer2: "Jupiter",
        answer3: "Saturn",
        correctAnswer: "Mars"
    },
    {
        questionNumber: 12,
        questionText: "Which is the only planet that rotates clockwise?",
        answer1: "Earth",
        answer2: "Mercury",
        answer3: "Venus",
        correctAnswer: "Venus"
    },
];

/**  Overall start game function */

document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByClassName("answer-buttons");
    for (let button of buttons) {
        button.addEventListener("click", checkAnswer);
    };
    nextQuestion();
});

/** Next Question Function, called after either a correct or wrong answer is entered */

let questionArray = [];

function nextQuestion() {
    console.log("next");
    let n = Math.floor(Math.random() * 9) + 1;
    let nextQuestion = questionBank[n].questionText;
    let questionNo = questionBank[n].questionNumber;
    console.log(questionNo);

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
    questionArray.push(questionNo);
    console.log(questionArray);

    questionCounter(questionArray);
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
    setTimeout(questionStyleReset, 2000);
};

/** Wrong Answer Function */

function wrongAnswer() {
    setTimeout(questionStyleReset, 2000);
};

/** Question Counter Function */

function questionCounter(questionArray) {
    if (questionArray.length === 10) {
        window.location.href = "result";
    }
};

/** Function to return answer buttons back to normal style */

function questionStyleReset() {
    console.log("reset");
    let changeButtons = document.getElementsByTagName("button");

    for (let button of changeButtons) {
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