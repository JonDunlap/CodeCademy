let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 9);

const compareGuesses = (humanGuess, computerGuess, targetNumber) =>
  Math.abs(humanGuess - targetNumber) <= Math.abs(computerGuess - targetNumber)
    ? true
    : false;

const updateScore = (winner) =>
  winner === 'human' ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;
