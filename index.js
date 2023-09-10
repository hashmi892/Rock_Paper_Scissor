// Get buttons and result elements
const btn = document.querySelectorAll(".btn");
const result = document.querySelector("#result");
const userSel = document.querySelector("#user_selection");
const compSel = document.querySelector("#computer_selection");
const userScore = document.querySelector("#user_score");
const compScore = document.querySelector("#computer_score");

let userTotalScore = 0;
let compTotalScore = 0;

btn.forEach((curEle) => {
  curEle.addEventListener("click", () => {
    // Define choices
    const choices = ["rock", "paper", "scissor"];

    // Generate a random computer choice
    const computerChoice = Math.floor(Math.random() * choices.length);

    // Display user and computer choices
    userSel.textContent = curEle.id.toUpperCase();
    compSel.textContent = choices[computerChoice].toUpperCase();

    // Determine the game result
    if (curEle.id === choices[computerChoice]) {
      result.textContent = "Match Tie";
    } else if (
      (curEle.id === "rock" && choices[computerChoice] === "paper") ||
      (curEle.id === "paper" && choices[computerChoice] === "scissor") ||
      (curEle.id === "scissor" && choices[computerChoice] === "rock")
    ) {
      compTotalScore++;
      compScore.textContent = compTotalScore;
      result.textContent = "You lose this game";
    } else if (
      (curEle.id === "rock" && choices[computerChoice] === "scissor") ||
      (curEle.id === "paper" && choices[computerChoice] === "rock") ||
      (curEle.id === "scissor" && choices[computerChoice] === "paper")
    ) {
      userTotalScore++;
      userScore.textContent = userTotalScore;
      result.textContent = "Congratulations! You win this game";
    }
  });
});
