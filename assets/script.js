
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
    if (document.getElementsByTagName("body")[0].id === "quiz-main") {
        sessionStorage.setItem("count", 0);
        let buttons = document.getElementsByClassName("answer-buttons");
        for (let button of buttons) {
            button.addEventListener("click", checkAnswer);
        };
        shuffleQuestions(questionBank);
    } else {
        console.log("any other page");
        console.log(finalScore);
        console.log(sessionStorage.getItem("final-score"));
        document.getElementById("final-score").innerText = (sessionStorage.getItem("final-score"));
    };
});

/** Next Question Function, called after either a correct or wrong answer is entered */

let startCount = 0;
let questionsMax = 10;
let questionArray = [];
let finalScore = 0;

function shuffleQuestions(questionBank) {
    let currentIndex = questionBank.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [questionBank[currentIndex], questionBank[randomIndex]] = [
            questionBank[randomIndex], questionBank[currentIndex]];
    };
    firstQuestion();
    return questionBank;
};

console.log("shuffled questions", questionBank);


/** Function to load first question */

function firstQuestion() {
    console.log("first question");
    for (let i = 0; i < 10; i++) {

        document.getElementById("question-text").innerHTML = questionBank[i].questionText;
        document.getElementById("answer1").innerHTML = questionBank[i].answer1;
        document.getElementById("answer2").innerHTML = questionBank[i].answer2;
        document.getElementById("answer3").innerHTML = questionBank[i].answer3;

        let currentQuestionCorrectAnswer = questionBank[i].correctAnswer;
        console.log("Answer check", currentQuestionCorrectAnswer);

        setCorrectAnswer(currentQuestionCorrectAnswer);
    };
};

/** Function for every subsequent question after first */

function nextQuestion2(currentCount) {
    console.log("loaded question bank", questionBank);
    console.log(currentCount);

    while (currentCount < 10) {
        console.log("selected question", questionBank[currentCount]);
        console.log("Current Question correct answer", questionBank[currentCount].correctAnswer);
        document.getElementById("question-text").innerHTML = questionBank[currentCount].questionText;
        document.getElementById("answer1").innerHTML = questionBank[currentCount].answer1;
        document.getElementById("answer2").innerHTML = questionBank[currentCount].answer2;
        document.getElementById("answer3").innerHTML = questionBank[currentCount].answer3;

        let currentQuestionCorrectAnswer = questionBank[currentCount].correctAnswer;
        console.log("Answer check", currentQuestionCorrectAnswer);

        setCorrectAnswer(currentQuestionCorrectAnswer);
        return currentQuestionCorrectAnswer;
    }
};

/** Function to set correct answer */

function setCorrectAnswer(currentQuestionCorrectAnswer) {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        if (button.innerHTML === currentQuestionCorrectAnswer) {
            button.setAttribute("data-type", "correct");
        } else {
            button.setAttribute("data-type", "wrong");
        };
    };
};

/** Check Answer Function */

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
    setTimeout(questionCounter, 2000);

};

/** Function for Adding score for correct answer */

function addCorrectScore() {
    let oldScore = parseInt(document.getElementById("score").innerHTML);
    let newScore = oldScore + 10;
    document.getElementById("score").innerHTML = newScore;
    console.log("score");
    console.log("oldScore", oldScore);
    console.log(newScore);
    finalScore = newScore;
    sessionStorage.setItem("finalScore", finalScore);
    console.log("Final Score");
    console.log(sessionStorage.getItem("finalScore"));
    console.log(finalScore);
    console.log(parseInt(sessionStorage.getItem("finalScore")));
    setTimeout(questionStyleReset, 2000);
};

/** Wrong Answer Function */

function wrongAnswer() {
    setTimeout(questionStyleReset, 2000);
};

/** Question Counter Function */

function questionCounter() {
    let currentCount = startCount++;

    console.log("count", currentCount);

    nextQuestion2(currentCount);

    return currentCount;
}

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
    nextQuestion2();
};

function endQuiz(finalScore) {
    console.log(sessionStorage.getItem("finalScore"));
    console.log(finalScore);
    setTimeout(totalEnd, 5000);
    function totalEnd() {
        location.href = "result.html";
        console.log(sessionStorage.getItem("finalScore"));
        document.getElementById("final-score").innerHTML = finalScore;
    };
};
