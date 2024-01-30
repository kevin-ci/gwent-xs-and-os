let xTurn = true;
let gameRunning = true;
const resultDiv = document.getElementById("result");

function handleClick(event) {
  if (gameRunning) {
    if (xTurn) {
      event.target.innerHTML = `<span class="symbol">X</span>`;
    } else {
      event.target.innerHTML = `<span class="symbol">O</span>`;
    }
    event.target.removeEventListener("click", handleClick);
    xTurn = !xTurn;
    checkForWinner();
  }
}

let tiles = document.querySelectorAll(".col-4");
for (let tile of tiles) {
  tile.addEventListener("click", handleClick);
}

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkForWinner() {
  for (let pattern of winningPatterns) {
    if (
      tiles[pattern[0]].innerText === "X" &&
      tiles[pattern[1]].innerText === "X" &&
      tiles[pattern[2]].innerText === "X"
    ) {
      resultDiv.innerText = "X wins";
      gameRunning = false;
    } else if (
      tiles[pattern[0]].innerText === "O" &&
      tiles[pattern[1]].innerText === "O" &&
      tiles[pattern[2]].innerText === "O"
    ) {
      resultDiv.innerText = "O wins";
      gameRunning = false;
    }
  }
}
