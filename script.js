function computerPlay(choices) {
  return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return {winner: 0, text: `You chose: ${playerSelection}\n Computer chose: ${computerSelection}\n This round is a tie!`};
  }
  else if (playerSelection === `rock`) {
    if (computerSelection === `paper`) {
      return {winner: 2, text: `You chose: ${playerSelection}\n Computer chose: ${computerSelection}\n You lost this round!`};
    } else {
          return {winner: 1, text: `You chose: ${playerSelection}\n Computer chose: ${computerSelection}\n You won this round!`};
      }
  }
  else if (playerSelection === `paper`) {
    if (computerSelection === `scissors`) {
      return {winner: 2, text: `You chose: ${playerSelection}\n Computer chose: ${computerSelection}\n You lost this round!`};
    } else {
          return {winner: 1, text: `You chose: ${playerSelection}\n Computer chose: ${computerSelection}\n You won this round!`};
      }
  }
  else if (playerSelection === `scissors`) {
    if (computerSelection === `rock`) {
      return {winner: 2, text: `You chose: ${playerSelection}\n Computer chose: ${computerSelection}\n You lost this round!`};
    } else {
          return {winner: 1, text: `You chose: ${playerSelection}\n Computer chose: ${computerSelection}\n You won this round!`};
      }
  }
}

game = () => {
  let userScore = 0;
  let computerScore = 0;
  const choices = ['rock', 'paper', 'scissors'];
 
  for (let i = 0; i < 5; i++) {
      setTimeout(() => {
          let playerSelection = prompt(`Choose Rock, Paper, or Scissors `).toLowerCase();
          let computerSelection = computerPlay(choices);
          const roundResult = playRound(playerSelection, computerSelection);

          console.log(roundResult.text);
          if (roundResult.winner === 1) {
              userScore++;
          } else if (roundResult.winner === 2) {
              computerScore++;
          }
      }, 10)
  }
  
  setTimeout(() => {
      if (userScore > computerScore) {
          console.log(`User won the game!`)
      } else if (userScore < computerScore) {
          console.log(`Computer won the game!`)
      } else {
          console.log(`The game is a tie!`)
      }
  }, 20)
}

game();