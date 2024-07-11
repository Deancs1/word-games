// rock paper scissors

const gestures = ["rock", "paper", "scissors"];

// Function to generate a random gesture for the computer
function randomGesture() {
  return gestures[Math.floor(Math.random() * gestures.length)];
}

// Function to determine the winner based on gestures
function compareGestures(randomGesture, userGesture) {
  if (
    (randomGesture === "rock" && userGesture === "scissors") ||
    (randomGesture === "scissors" && userGesture === "paper") ||
    (randomGesture === "paper" && userGesture === "rock")
  ) {
    return `you lose!`;
  } else if (
    (userGesture === "rock" && randomGesture === "scissors") ||
    (userGesture === "scissors" && randomGesture === "paper") ||
    (userGesture === "paper" && randomGesture === "rock")
  ) {
    return `you win!!!`;
  } else {
    return `it's a tie`;
  }
}

// main execution

if (process.argv.length !== 3) {
  console.log(
    "you did not enter a value, please chose rock, paper or scissors"
  );
  process.exit(1);
}

// Get player's gesture from command line
const userGesture = process.argv[2].toLowerCase();
if (!gestures.includes(userGesture)) {
  console.log("Invalid input, please choose rock, paper or scissors!");
  process.exit(1);
}

const computerGesture = randomGesture();
const result = compareGestures(computerGesture, userGesture);
console.log(
  `you chose ${userGesture}, the computer chose ${computerGesture}. ${result}`
);
