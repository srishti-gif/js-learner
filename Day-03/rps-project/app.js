function rockPaperscissorsGame() {
  console.log("welcome to rock paper scissors game");
}

rockPaperscissorsGame();

const userChoicePromt = prompt("Enter your choice");
const userchoice = userChoicePromt.toLowerCase();

let systemchoice;
const randomNumber = Math.floor(Math.random() * 3) + 1;

if (randomNumber === 1) {
  systemchoice = "rock";
} else if (randomNumber === 2) {
  systemchoice = "paper";
} else {
  systemchoice = "scissor";
}

console.log("system choice was", systemchoice);
console.log("user choice is", userchoice);

PlayGame(systemchoice, userchoice);

function PlayGame(systemchoice, userchoice) {
  if (systemchoice === userchoice) {
    console.log("Game draw!! Please select again");
  } else if (userchoice === "rock" && systemchoice === "scissor") {
    console.log("User wins");
  } else if (userchoice === "scissor" && systemchoice === "paper") {
    console.log("User wins");
  } else if (userchoice === "paper" && systemchoice === "rock") {
    console.log("User wins");
  } else {
    console.log("System wins!!");
  }
}
