function computerPlay(choices) {
    return choices[Math.floor(Math.random()*choices.length)];
  }

const playRound = (playerSelection, computerSelection) => {
    let result;
    switch (playerSelection + computerSelection) {
        case `scissorspaper`:
        case `rockscissors`:
        case `paperrock`:
            result = {winner: 1, text: `You chose: ${playerSelection}\n Computer chose: ${computerSelection}\n You won this round!`};
            break;
        case `scissorsrock`:
        case `paperscissors`:
        case `rockpaper`:
            result = {winner: 2, text: `You chose: ${playerSelection}\n Computer chose: ${computerSelection}\n You lost this round!`};
            break;
        case `paperpaper`:
        case `rockrock`:
        case `scissorsscissors`:
            result = {winner: 0, text: `You chose: ${playerSelection}\n Computer chose: ${computerSelection}\n This round is a tie!`}
            break; 
    }
    return result;
}

game = () => {
    let userScore = 0;
    let computerScore = 0;
    const choices = ['rock', 'paper', 'scissors'];
   
    for (let i = 0; i < 5; i++) {
        playerText = () => {
            let playerSelection = prompt(`Paper, Rock or Scissors?`).toLowerCase();
            while (!((playerSelection === `rock`) || (playerSelection === `paper`) || (playerSelection === `scissors`))) {
                playerSelection= prompt(`Error, you can only type Rock, Paper, or Scissors`).toLowerCase();
            }

            return playerSelection
        }

            let playerSelection = playerText();
            let computerSelection = computerPlay(choices);
            const roundResult = playRound(playerSelection, computerSelection);
  
            console.log(roundResult.text);
            alert(roundResult.text);
            if (roundResult.winner === 1) {
                userScore++;
            } else if (roundResult.winner === 2) {
                computerScore++;
            }
    }
    
    if (userScore > computerScore) {
        console.log(`User won the game!`)
        alert(`User won the game!`);
    } else if (userScore < computerScore) {
        console.log(`Computer won the game!`);
        alert(`Computer won the game!`);
    } else {
        console.log(`The game is a tie!`);
        alert(`The game is a tie!`);
    }
}
  
game();