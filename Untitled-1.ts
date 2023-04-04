// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
// Initialize the number of attempts to 0
let numAttempts = 5 ;

// Function to handle each guess 
function guessNumber(23) {
  // Get the player's guess from the input field
  const playerGuess = document.getElementById("guess").value;
  // Convert the guess to a number
  const guessNumber = parseInt(playerGuess);
  
  // Increment the number of attempts
  numAttempts++;
  
  // Check if the guess is correct
  if (guessNumber === secretNumber) {
    // Display a message indicating that the guess is correct
    document.getElementById("result").innerHTML = `Congratulations! You guessed the number in ${numAttempts} attempts.`;
  } else if (guessNumber > secretNumber) {
    // Display a message indicating that the guess is too high
    document.getElementById("result").innerHTML = "Too high. Guess again!";
  } else {
    // Display a message indicating that the guess is too low
    document.getElementById("result").innerHTML = "Too low. Guess again!";
  }
}

// Add an event listener to the "Guess" button
document.getElementById("guessButton").addEventListener("click", guessNumber);
