function getComputerChoice() {
   let choice;
   let randomNum = Math.floor(Math.random() * 3) + 1;
   switch (randomNum) {
      case 1:
         choice='Rock';
         break;
      case 2:
         choice='Paper';
         break;
      case 3:
         choice='Scissors';
         break;
      default:
         console.log('Something broke!');
   }
   return choice;
}

function game() {
   let playerSelection;
   let computerSelection;
   let round = 1;
   let playerScore = 0;
   let computerScore = 0;

   function playRound() {
      playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
      if (playerSelection == computerSelection) {
         return 'You Tied! ' + playerSelection + ' ties ' + computerSelection + '.';
      } else if ((playerSelection == 'Rock' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Rock')) {
         computerScore++;
         return 'You Lose! ' + computerSelection + ' beats ' + playerSelection + '.';
      } else {
         playerScore++;
         return 'You Won! ' + playerSelection + ' beats ' + computerSelection + '.';
      }
   }

   while (round <= 5) {
      playerSelection = prompt('Pick your sign:');
      computerSelection = getComputerChoice();
      console.log('ROUND ' + round + ': ' + playRound(playerSelection, computerSelection));
      round++;
   }

   if (playerScore > computerScore) {
      console.log('You won with a score of ' + playerScore + ' to ' + computerScore);
   } else if (computerScore > playerScore) {
      console.log('You lost with a score of ' + playerScore + ' to ' + computerScore);
   } else {
      console.log('You tied with a score of ' + playerScore + ' to ' + computerScore);
   }
}

game();