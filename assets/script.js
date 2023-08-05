
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

/** Enter Name Page */

function userName() {
    console.log("tst");
    let enteredUserName = document.getElementById("name-input").innerText;
    console.log("username", enteredUserName);
    let userName = enteredUserName;
    sessionStorage.setItem("userName", userName);
}

/**  Overall start game function */

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementsByTagName("body")[0].id === "username") {
        let button = document.getElementById("start-quiz-actual-button");
        button.addEventListener("click", userName);
    };

    if (document.getElementsByTagName("body")[0].id === "quiz-main") {
        let buttons = document.getElementsByClassName("answer-buttons");
        for (let button of buttons) {
            button.addEventListener("click", checkAnswer);
        };
        shuffleQuestions(questionBank);
    } else {
        var finalScoreRetrieved = localStorage.getItem("final-score");
        let anotherVar = sessionStorage.getItem("Another");
        let scoreToPass = sessionStorage.getItem("scoreToPass");
        let userName = sessionStorage.getItem("userName");
        console.log(userName);
        console.log(anotherVar);
        console.log(scoreToPass);
        console.log(finalScoreRetrieved);
        console.log("any other page");
        console.log(localStorage.getItem("final-score"), "worked?");
        console.log(finalScore);
        document.getElementById("final-score").innerText = scoreToPass;
    };
});

/** Next Question Function, called after either a correct or wrong answer is entered */

let startCount = 0;
let questionsMax = 10;
let questionArray = [];
let finalScore = 0;

/** Function to shuffle questions array at start of quiz */

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

/** Function to load first question */

function firstQuestion() {
    console.log("first question");

    let i = 0;

    document.getElementById("question-text").innerHTML = questionBank[i].questionText;
    document.getElementById("answer1").innerHTML = questionBank[i].answer1;
    document.getElementById("answer2").innerHTML = questionBank[i].answer2;
    document.getElementById("answer3").innerHTML = questionBank[i].answer3;

    let currentQuestionCorrectAnswer = questionBank[i].correctAnswer;
    console.log("Answer check", currentQuestionCorrectAnswer);

    setCorrectAnswer(currentQuestionCorrectAnswer);
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

    for (let button of buttons) {
        button.disabled = true;
    }
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
    localStorage.setItem("finalScore", "100");
    console.log("Final Score", finalScore);
    console.log(localStorage.getItem("finalScore"));

    setTimeout(questionStyleReset, 2000);

    return finalScore;
};

/** Wrong Answer Function */

function wrongAnswer() {
    setTimeout(questionStyleReset, 2000);
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
        button.disabled = false;
    }
    questionCounter();
};

/** Question Counter Function */

function questionCounter() {
    if (startCount < 4) {
        let currentCount = startCount++;

        console.log("count", currentCount);

        nextQuestion2(currentCount);

        return currentCount;
    } else {
        endQuiz(finalScore);
    }
    if (localStorage.getItem("storageScore") !== null) {
        console.log((localStorage.getItem("storageScore")));
    }

}

/** Function to End Quiz */

function endQuiz(finalScore) {
    console.log(localStorage.getItem("finalScore"), "End quiz score from session storage");
    console.log("End quiz finalScore", finalScore);
    localStorage.setItem("storageScore", finalScore);
    console.log("storage score", (localStorage.getItem("storageScore")));
    setTimeout(totalEnd, 5000);
    function totalEnd() {
        let anotherVar = "Another variable";
        sessionStorage.setItem("Another", anotherVar);
        let scoreToPass = finalScore;
        sessionStorage.setItem("scoreToPass", scoreToPass);
        console.log(localStorage.getItem("finalScore"), "total End quiz score from session storage");
        console.log("total End quiz finalScore", finalScore);
        location.assign("result.html");
        console.log(window.localStorage.getItem("finalScore"));
        document.getElementById("final-score").innerHTML = finalScore;
    };
};

/** Leaderboard check score and add to array function */

let leaderBoardScores = [
    {
        userName: "John",
        userScore: 30

    },
    {
        userName: "Sarah",
        userScore: 70

    },
    {
        userName: "Ahmed",
        userScore: 50

    },
];

leaderboard.html.onload = createExistingLeaderboardArray();

if (document.getElementsByTagName("body") === "leaderboard.html") {
    let userName = sessionStorage.getItem("userName");
    console.log(userName);
}

function createExistingLeaderboardArray() {
    let oldLeaderBoardScores = [];
    document.getElementsByClassName("table-name-cell");

    for (let i = 0, row; row = document.getElementById("leaderboard-table").rows[i]; i++) {
        for (let cell of row.cells) {
            let cellValue = cell.innerHTML;
            console.log(cellValue);
            oldLeaderBoardScores.push(cellValue);
            console.log(oldLeaderBoardScores);
        }
    }
}
