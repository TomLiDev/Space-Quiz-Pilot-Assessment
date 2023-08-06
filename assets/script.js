
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

function getUserName() {
    alert("get user name start");
    let userNameToPass = document.getElementsByName("name-input")[0].value;
    sessionStorage.setItem("userNameToPass", userNameToPass);
    alert(userNameToPass);

    return userNameToPass;
}

/**  Overall start game function */

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementsByTagName("body")[0].id === "username") {
        let button = document.getElementById("start-quiz-actual-button");
        button.addEventListener("click", getUserName);
    };
    if (document.getElementsByTagName("body")[0].id === "result") {
        setTimeout(resultDisplay, 1000);
    };
    if (document.getElementsByTagName("body")[0].id === "leaderboard-page") {
        setTimeout(createLeaderboardArray, 1000);
    }


    if (document.getElementsByTagName("body")[0].id === "quiz-main") {
        let buttons = document.getElementsByClassName("answer-buttons");
        for (let button of buttons) {
            button.addEventListener("click", checkAnswer);
        };
        let userNameToPass = sessionStorage.getItem("userNameToPass");
        alert(userNameToPass);
        console.log("Just before shuffle");
        shuffleQuestions(questionBank);
    } else {
        var finalScoreRetrieved = localStorage.getItem("final-score");
        let anotherVar = sessionStorage.getItem("Another");
        let scoreToPass = sessionStorage.getItem("scoreToPass");
        let userNameToPass = sessionStorage.getItem("userNameToPass");
        console.log("usernametopass", userNameToPass);
        console.log(anotherVar);
        console.log("scoreToPass", scoreToPass);
        console.log(finalScoreRetrieved);
        console.log("any other page");
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
    if (startCount < 7) {
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
        document.getElementById("final-score").innerHTML = sessionStorage.getItem("scoreToPass");
    };
};

/** Results page function */

function resultDisplay() {
    alert("This is the results page");
    let userNameToPass = sessionStorage.getItem("userNameToPass");
    alert(userNameToPass);
    let scoreToPass = sessionStorage.getItem("scoreToPass");
    alert(scoreToPass);
    document.getElementById("final-score").innerHTML = scoreToPass;
}

/** Leaderboard check score and add to array function */

let leaderBoardScores = [
    {
        rank: 1,
        userName: "John",
        userScore: 30

    },
    {
        rank: 2,
        userName: "Sarah",
        userScore: 70

    },
    {
        rank: 3,
        userName: "Ahmed",
        userScore: 50

    },
];

let interimLeaderboard = [];

function createLeaderboardArray() {
    let rankCells = document.getElementsByClassName("table-rank-cell");
    let nameCells = document.getElementsByClassName("table-name-cell");
    let scoreCells = document.getElementsByClassName("table-score-cell");
    console.log("cells", rankCells);
    console.log("names", nameCells);
    console.log("scores", scoreCells);
    console.log("first rank", rankCells[0].innerHTML);
    for (let i = 0; i < 5; i++) {
        let individual = {};
        console.log(i);
        console.log(rankCells[i].innerHTML);
        console.log(nameCells[i].innerHTML);
        console.log(scoreCells[i].innerHTML);
        individual.userName = nameCells[i].innerHTML;
        individual.userScore = scoreCells[i].innerHTML;
        console.log("individual", individual);
        interimLeaderboard.push(individual);
        console.log("leaderboard", interimLeaderboard);
    }
    findLowestScore();
}

let scoreCheckArray = [];
let minScore = 0;

function findLowestScore() {
    console.log("array length", interimLeaderboard.length);
    for (let i = 0; i < 5; i++) {
        if (i < 5) {
            let scoreToInput = interimLeaderboard[i].userScore;
            console.log("score", scoreToInput);
            scoreCheckArray.push(scoreToInput);
            console.log(scoreCheckArray);
            let minScore = Math.min(...scoreCheckArray);

            console.log("lowest score", minScore);
            sessionStorage.setItem("minScore", minScore);
        }
    }
    checkIfScoreLeaderboard();
};

function checkIfScoreLeaderboard() {
    console.log("Start of score check");
    let scoreToPass = sessionStorage.getItem("scoreToPass");
    let minScore = sessionStorage.getItem("minScore");
    console.log(scoreToPass);
    console.log(minScore);
    alert("Score check", minScore, scoreToPass);
    console.log("min score check");
    if (scoreToPass <= minScore) {
        alert("Not this time pilot,try again");
    } else {
        alert("Well done!");
        createNewLeaderboard();
    }
};

function createNewLeaderboard() {
    console.log(scoreCheckArray);
    console.log("Array", scoreCheckArray);
    let scoreToPass = sessionStorage.getItem("scoreToPass");
    console.log("Score to pass from storage", scoreToPass);
    for (let i = 0; i < 5; i++) {
        console.log("This score", scoreCheckArray[i]);
        if (scoreToPass > scoreCheckArray[i]) {
            console.log("Score higher", scoreCheckArray[i]);
        }
    }
    test();
}

let newEntry = [];
let newLeaderboard = [];

function test() {
    console.log("test start");
    let scoreToPass = sessionStorage.getItem("scoreToPass");
    let userNameToPass = sessionStorage.getItem("userNameToPass");
    interimLeaderboard.pop();
    console.log("popped leaderboard", interimLeaderboard);
    newEntry.userName = userNameToPass;
    newEntry.userScore = scoreToPass;
    console.log("new entry", newEntry);
    interimLeaderboard.push(newEntry);
    console.log("updated leaderboard", interimLeaderboard);
    interimLeaderboard.sort((a, b) => (a.userScore < b.userScore) ? 1 : -1);
    console.log("sorted?", interimLeaderboard);

    updateLeaderboard();
}

function updateLeaderboard() {
    let nameCells = document.getElementsByClassName("table-name-cell");
    let scoreCells = document.getElementsByClassName("table-score-cell");
    for (let i = 1; i < 5; i++) {
        nameCells[i].innerHTML = interimLeaderboard[i].userName;
        scoreCells[i].innerHTML = interimLeaderboard[i].userScore;
    }
}