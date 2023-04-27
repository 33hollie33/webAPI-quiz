var questions = [
    {
        title: 'Commonly used data types DO NOT include',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: ['alerts']
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
let score = 0;
var userScores = 0; 


function displayQuestion() {

    let welcomeScreen = document.getElementById("welcome-screen");
    if (welcomeScreen != null && welcomeScreen != undefined) {
        welcomeScreen.style.display = "none";
    }

    if (questionIndex < questions.length) {
        let questionFromArray = questions[questionIndex];
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
                if (userChoice == questionFromArray.answer) {
                    message.innerHTML = "Correct!";
                    score++;
                    document.getElementById("correct-sound").play();
                }
                else {
                    message.innerHTML = "Incorrect!";
                    document.getElementById('incorrect-sound').play();

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
    userScores.push(score);

function setTimer() {
    let seconds = 60;

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

var userScores = {
   participant: user.value,
    userScores: score.valueOf,
    comment: comment.value.trim()
  };
  
  localStorage.setItem("userScore", JSON.stringify(userScores));
  renderMessage(); }