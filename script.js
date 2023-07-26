const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('.score-player');
const computerScore = document.querySelector('.score-computer');
const announcement = document.querySelector('.announcement');

buttons.forEach((button) => {
   button.addEventListener('click', () => {
      playRound(button.id);
   })
});

function getComputerChoice() {
   let choice;
   let randomNum = Math.floor(Math.random() * 3) + 1;
   switch (randomNum) {
      case 1:
         choice='rock';
         break;
      case 2:
         choice='paper';
         break;
      case 3:
         choice='scissors';
         break;
   }
   return choice;
}

function playRound(playerSelection) {

   let computerSelection = getComputerChoice();

   if (playerSelection == computerSelection) {
         announcement.textContent = "You Tied! " + playerSelection + " ties " + computerSelection + '.';
   } else if (
      (playerSelection == 'rock' && computerSelection == 'paper') ||
      (playerSelection == 'paper' && computerSelection == 'scissors') || 
      (playerSelection == 'scissors' && computerSelection == 'rock')
      ) {
         computerScore.textContent = (parseInt(computerScore.textContent) + 1) + '';
         if (parseInt(computerScore.textContent) == 5) {
            announcement.textContent = 'YOU LOST THE GAME!!! ' + computerSelection + ' beats ' + playerSelection + '.';
         } else {
            announcement.textContent = 'You Lose! ' + computerSelection + ' beats ' + playerSelection + '.';
         }
   } else {
      playerScore.textContent = (parseInt(playerScore.textContent) + 1) + '';
      if (parseInt(playerScore.textContent) == 5) {
         announcement.textContent = 'YOU WON THE GAME!!! ' + playerSelection + ' beats ' + computerSelection + '.';
      } else {
         announcement.textContent = 'You Win! ' + playerSelection + ' beats ' + computerSelection + '.';
      }
   }
}