let userScore = 0;
let computerScore = 0;
let timer = 15;
let TimeInterval;
const choices = document.querySelectorAll('.choice');
const scoreBoard = document.getElementById('score');
const result = document.getElementById('result');
const timerDisplay = document.getElementById('timer');

choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        if (timer > 0) {
            const userChoice = e.target.id;
            const computerChoice = getComputerChoice();
            const winner = getWinner(userChoice, computerChoice);
            updateScore(winner);
            showResult(winner, userChoice, computerChoice);
        }
    });
});

 
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    } else if (
        (userChoice === 'rock' && computerChoice ===  'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice ==='scissors' && computerChoice === 'paper')
    ) {
        return 'user';
    } else {
        return 'computer';
    }
}
 
function startTimer() {
    clearInterval(TimeInterval);
    timerDisplay.textContent = ` زمان باقی مانده: ${timer}  ثانیه`;

    TimeInterval = setInterval(() => {
        timer--;
        timerDisplay.textContent = `زمان باقی مانده : ${timer} ثانیه`;
        if (timer <= 0) {
            clearInterval(TimeInterval);
            result.textContent = '⏱️ !وقت تموم شد ';
                   }
    }, 1000);
}
startTimer();


function updateScore(winner) {
    if (winner === 'user') {
        userScore++;
        scoreBoard.style.color = 'green'; 
    } else if (winner === 'computer') {
        computerScore++;
        scoreBoard.style.color = 'red'; 
    }
    scoreBoard.textContent = `${userScore} : ${computerScore}`;
}

function showResult(winner, userChoice, computerChoice) {
    if (winner === 'draw') {
        result.textContent = ` 😊! مساوی شدید ${userChoice}`;
    } else if (winner === 'user') {
        result.textContent = `😎🎉!شما برنده شدید : ${userChoice}شکست میده  ${computerChoice}`;
    } else {
        result.textContent = ` 😒!شما باختید : ${computerChoice} شکست میده ${userChoice}`;
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    timer = 15;
    scoreBoard.textContent = '0 : 0';
    scoreBoard.style.color = '#000'; 
    result.textContent = '';
    startTimer();
}

 