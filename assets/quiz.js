var questions = [
    {
        title: 'Commonly used data types DO NOT include',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },
    {
        title: 'The condition in an if / else statement is enclosed within _____.',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parenteses',
    },
    {
        title: 'Arrays in Javascript can be used to store ____',
        choices: [
            'numbers and strings',
            'other arrays',
            'booleans',
            'all of the above',
        ],
        answer: 'all of the above',
    },
    {
        title: 'String values must be enclosed within ____ when being assigned to variables',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        anwser: 'quotes',
    },
    {
        title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['Javascript', 'terminal/bash', 'for loops', 'console.log'],
        answer: 'console.log'
    },
];

let questionIndex = 0;
let score = 50;
let seconds = 60;


function displayQuestion() {

    let welcomeScreen = document.getElementById("welcome-screen");
    if (welcomeScreen != null && welcomeScreen != undefined) {
        welcomeScreen.style.display = "none";
    }

    if (questionIndex < questions.length) {
        let questionFromArray = questions[questionIndex];
        console.log(questionFromArray)
        let message = document.getElementById("message");
        let question = document.getElementById("quiz-question");
        question.innerHTML = questionFromArray.title;

        let questionOptions = questionFromArray.choices;
        let optionsHTML = document.getElementById("options");

        for (let i = 0; i < questionOptions.length; i++) {
            let optionButton = document.createElement("button");
            optionButton.innerHTML = questionOptions[i];
            optionButton.classList.add("option-button");
            optionsHTML.appendChild(optionButton);
            optionButton.addEventListener("click", function () {
                let userChoice = optionButton.innerHTML;
                if (userChoice !== questionFromArray.answer) {
                    console.log(questionFromArray.answer)
                    message.innerHTML = "Incorrect!";
                    score-= 5;
                    seconds-=5;
                    document.getElementById("incorrect-sound").play();
                    document.getElementById("timer").innerHTML = "Time remaining: " + seconds;
                }
                else {
                    message.innerHTML = "Correct!";
                    document.getElementById("correct-sound").play();
                   
                }

                questionIndex++;
                optionsHTML.innerHTML = "";
                displayQuestion();
            });
        }
    }
    else {
        gameOver();
    }
}
function saveScore() {
    let username = document.getElementById("name").value;
    if (username == "") {
        alert("The name field should not be left empty!");
    } else {
        let scoreDataInfo = [];
        let scoreData = { participant: username, score: score };
        if (localStorage.getItem("scoreData") != null) {
            scoreDataInfo = JSON.parse(localStorage.getItem("scoreData"));
        }
        else {
            scoreDataInfo = [];
        }

        scoreDataInfo.push(scoreData);
        localStorage.setItem("scoreData", JSON.stringify(scoreDataInfo));
        window.location.href = "scores.html";
    }
}

function displayScores() {
    let allScores = document.getElementById("high-scores");
    let scoreInfo = JSON.parse(localStorage.getItem("scoreData"));
    for (let i = 0; i < scoreInfo.length; i++) {
        let scoreData = scoreInfo[i];
        let name = scoreData.participant;
        let score = scoreData.score;

        let highScores = document.createElement("div");
        highScores.classList.add("single-score-col");
        highScores.innerHTML = (i + 1) + ". " + name + " - " + score;
        allScores.appendChild(highScores);
    }
}

function setTimer() {
  
    const makeIteration = () => {

        if (seconds > 0) {
            document.getElementById("timer").innerHTML = "Time remaining: " + seconds;
            setTimeout(makeIteration, 1000);
        } else {
            seconds = 0;
            document.getElementById("timer").innerHTML = "Time is out";
            alert("Time is out!");
            gameOver();
        }
        seconds -= 1;
    }

    setTimeout(makeIteration, 1000);
}


function gameOver() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("results-container").style.display = "block";
    document.getElementById("summary").innerHTML = "Your final score: " + score;
}


function startQuiz() {
    displayQuestion();
    setTimer();
}

function playAgain() {
    score = 0;
    questionIndex = 0;
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("results-container").style.display = "none";
    document.getElementById("message").innerHTML = "";
    displayQuestion();
    setTimer();
}

function clearScores() {
    localStorage.clear();
    displayScores();
}