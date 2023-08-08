/** Question bank, an array of objects to be shuffled at quiz start */

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
        questionText: "Who was the first person in space?",
        answer1: "Neil Amstrong",
        answer2: "Yuri Gagarin",
        answer3: "Tim Peake",
        correctAnswer: "Yuri Gagarin"
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
    {
        questionNumber: 13,
        questionText: "Approximately, what is the escape velocity of Earth?",
        answer1: "30,000 kph",
        answer2: "40,000 kph",
        answer3: "50,000 kph",
        correctAnswer: "40,000 kph"
    },
    {
        questionNumber: 14,
        questionText: "Approximately, what is the escape velocity of Earth?",
        answer1: "30,000 kph",
        answer2: "40,000 kph",
        answer3: "50,000 kph",
        correctAnswer: "40,000 kph"
    },
    {
        questionNumber: 14,
        questionText: "How many planets can be seen without a telescope?",
        answer1: "3",
        answer2: "6",
        answer3: "5",
        correctAnswer: "5"
    },
    {
        questionNumber: 14,
        questionText: "How many 'rovers' have been successfully operated on Mars?",
        answer1: "6",
        answer2: "4",
        answer3: "2",
        correctAnswer: "6"
    },
];

/** Enter Name Page Function, simply takes text input from name field and
 * stores it as userNameToPass in session storage for use later in the game
 */

function getUserName() {
    let userNameToPass = document.getElementsByName("name-input")[0].value;
    sessionStorage.setItem("userNameToPass", userNameToPass);
}

/**  Overall controlling function, calls different functions based on the page 
 * which has been loaded, e.g. if body = quiz-main then the shuffle questions 
 * function is called, which is the start of the quiz.  
 */

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementsByTagName("body")[0].id === "username") {
        let button = document.getElementById("start-quiz-actual-button");
        button.addEventListener("click", getUserName);
    };
    if (document.getElementsByTagName("body")[0].id === "result") {
        setTimeout(resultDisplay, 100);
    };
    if (document.getElementsByTagName("body")[0].id === "leaderboard-page") {
        setTimeout(createLeaderboardArray, 100);
    }
    if (document.getElementsByTagName("body")[0].id === "quiz-main") {
        let buttons = document.getElementsByClassName("answer-buttons");
        for (let button of buttons) {
            button.addEventListener("click", checkAnswer);
        }
        shuffleQuestions(questionBank);
    }
});

let stopCount = 0;
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
    let i = 0;
    document.getElementById("question-text").innerHTML = questionBank[i].questionText;
    document.getElementById("answer1").innerHTML = questionBank[i].answer1;
    document.getElementById("answer2").innerHTML = questionBank[i].answer2;
    document.getElementById("answer3").innerHTML = questionBank[i].answer3;

    let currentQuestionCorrectAnswer = questionBank[i].correctAnswer;

    setCorrectAnswer(currentQuestionCorrectAnswer);
};

/** Function for every subsequent question after first */

function nextQuestion(currentCount) {
    while (currentCount < 10) {
        document.getElementById("question-text").innerHTML = questionBank[currentCount].questionText;
        document.getElementById("answer1").innerHTML = questionBank[currentCount].answer1;
        document.getElementById("answer2").innerHTML = questionBank[currentCount].answer2;
        document.getElementById("answer3").innerHTML = questionBank[currentCount].answer3;

        let currentQuestionCorrectAnswer = questionBank[currentCount].correctAnswer;

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
    if (this.getAttribute("data-type") === "correct") {
        this.className = "correct-answer-button";
        addCorrectScore();
    } else {
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
    finalScore = newScore;
    setTimeout(questionStyleReset, 2000);

    return finalScore;
};

/** Wrong Answer Function */

function wrongAnswer() {
    setTimeout(questionStyleReset, 2000);
};

/** Function to return answer buttons back to normal style, called after
 * either a correct or incorrect answer
 */

function questionStyleReset() {
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
    if (stopCount < 10) {
        let currentCount = stopCount++;
        nextQuestion(currentCount);
        return currentCount;
    } else {
        endQuiz(finalScore);
    }
}

/** Function to End Quiz */

function endQuiz(finalScore) {
    let scoreToPass = finalScore;
    sessionStorage.setItem("scoreToPass", scoreToPass);
    location.assign("result.html");
    document.getElementById("final-score").innerHTML = finalScore;
    document.getElementById("final-score").innerHTML = sessionStorage.getItem("scoreToPass");
};

/** Results page function */

function resultDisplay() {
    let userNameToPass = sessionStorage.getItem("userNameToPass");
    document.getElementById("player-name-result").innerHTML = userNameToPass;
    let scoreToPass = sessionStorage.getItem("scoreToPass");
    document.getElementById("final-score").innerHTML = scoreToPass;
}

/** Leaderboard functions, 
 * creating an array of objects from current leaderboard, 
 * checking user score against existing score, 
 * adding user score to array if high enough, 
 * updating leaderboard with new values */

let interimLeaderboard = [];

function createLeaderboardArray() {
    let nameCells = document.getElementsByClassName("table-name-cell");
    let scoreCells = document.getElementsByClassName("table-score-cell");
    for (let i = 0; i < 5; i++) {
        let individual = {};
        individual.userName = nameCells[i].innerHTML;
        individual.userScore = scoreCells[i].innerHTML;
        interimLeaderboard.push(individual);
    }
    findLowestScore();
}

let scoreCheckArray = [];

/** Function to find the lowest score in the existing leaderboard, this value
 * is fed to checkIfScoreLeaderboard function
 */

function findLowestScore() {
    for (let i = 0; i < 5; i++) {
        if (i < 5) {
            let scoreToInput = interimLeaderboard[i].userScore;
            scoreCheckArray.push(scoreToInput);
            let minScore = Math.min(...scoreCheckArray);

            sessionStorage.setItem("minScore", minScore);
        }
    }
    checkIfScoreLeaderboard();
};

/** Function to see if the users score is greater than the lowest score 
 * currently on the leaderboard.
 */

function checkIfScoreLeaderboard() {
    let scoreToPass = sessionStorage.getItem("scoreToPass");
    let minScore = sessionStorage.getItem("minScore");
    if (scoreToPass <= minScore) {
        alert("Not this time pilot,try again");
    } else {
        alert("Well done!");
        createNewLeaderboard();
    }
};

/** First function called if user score is high enough to make the leaderboard.
 * Function removes (pops) lowest score off the existing leaderboard array.
 * New object is created with user name and score.
 * This object added to leaderboard array.
 * Leaderboard array then sorted by the score property, so that array is ordered
 * high to low, ready to be put back into leaderboard.
 */

let newEntry = [];

function createNewLeaderboard() {
    let scoreToPass = sessionStorage.getItem("scoreToPass");
    let userNameToPass = sessionStorage.getItem("userNameToPass");
    interimLeaderboard.pop();
    newEntry.userName = userNameToPass;
    newEntry.userScore = scoreToPass;
    interimLeaderboard.push(newEntry);
    interimLeaderboard.sort((a, b) => (a.userScore < b.userScore) ? 1 : -1);

    updateLeaderboard();
}

/** Function which puts newly updated leaderboard array (with username and
 * score in correct rank) back into the HTML table itself */

function updateLeaderboard() {
    let nameCells = document.getElementsByClassName("table-name-cell");
    let scoreCells = document.getElementsByClassName("table-score-cell");
    for (let i = 1; i < 5; i++) {
        nameCells[i].innerHTML = interimLeaderboard[i].userName;
        scoreCells[i].innerHTML = interimLeaderboard[i].userScore;
    }
}