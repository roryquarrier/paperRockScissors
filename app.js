let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

getComputerChoice();

function convertToWord(letter){
    if (letter === 'r'){
        return "Rock";
    } else if (letter === 's') {
        return 'Scissors';
        } else {
        return 'Paper';
        }
}

function win(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} vs ${convertToWord(computerChoice)}: WIN!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 300);
}

function lose(userChoice, computerChoice ){
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} vs ${convertToWord(computerChoice)}: LOSE!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 300);

}

function draw(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} vs ${convertToWord(computerChoice)}: DRAW!`;
    userChoice_div.classList.add('amber-glow');
    setTimeout(function() {userChoice_div.classList.remove('amber-glow')}, 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            lose(userChoice, computerChoice);
            break;
        case 'ss':
        case 'rr':
        case 'pp':
            draw(userChoice, computerChoice);
            break;
    }
    
}

function getUserChoice(){
    
    rock_div.addEventListener('click', function() {
        game('r');
    })
    
    paper_div.addEventListener('click', function() {
        game('p');
    })
    
    scissors_div.addEventListener('click', function() {
        game('s');
    })
    
}

getUserChoice();





























// FIRST TUTORIAL
// const choices = ['rock', 'paper', 'scissors'];
// const winners =[];

// function game() {
//     for(let i = 1; i<=5; i++){
//         playRound(i);
//     }
//     logWins();
// }


// function playRound(round){
//     const playerSelection = playerChoice();
//     const computerSelection = computerChoice();
//     const winner = checkWinner(playerSelection,computerSelection);
//     winners.push(winner);
//     logRound(playerSelection, computerSelection, winner, round);
// }

// function computerChoice(){
//     return choices[Math.floor(Math.random()*choices.length)];
// }

// function playerChoice(){
//     let input = prompt( 'Type rock, paper or scissors.');
//     while (input == null) {
//         input = prompt('Type rock, paper or scissors.');
//     }
//     input = input.toLowerCase();
//     let check = validateInput(input);
//     while(check == false) {
//         input = prompt('Please ensure correct input.');
//         while (input == null){
//         input = prompt('Type rock, paper or scissors.');
//         }
//         input = input.toLowerCase();
//         check = validateInput(input);
//     }
//     return input;
// }

// // shortened if statement
// function validateInput(choice){
//    choices.includes(choice);
// }

// function checkWinner(choiceP, choiceC) {
//     if (choiceC == choiceP){
//         return "Tie";
//     } else if (
//         (choiceP === 'rock' & choiceC === 'scissors') || 
//         (choiceP === 'scissors' & choiceC === 'paper') ||
//         (choiceP === 'paper' & choiceC === 'rock')) {
//         return 'Player';        
//     } else {
//         return 'Computer';
//     }   
// }

// function logWins() {
//     let playerWins = winners.filter((item) => item == 'Player').length;
//     let computerWins = winners.filter((item) => item = 'Computer').length;
//     let ties = winners.filter((item) => item = 'Tie').length;
//     console.log('Results');
//     console.log('Player wins: ', playerWins);
//     console.log('Computer wins: ', computerWins);
//     console.log('Ties:', ties);
// }

// function logRound(playerChoice,computerChoice,winner, round){
//     console.log('Round:', round);
//     console.log('Player chose: ', playerChoice);
//     console.log('Computer chose: ', computerChoice);
//     console.log(winner, ' won the round');
//     console.log('------------------------------');
// }



  