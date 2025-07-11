const cells = document.querySelectorAll(".cell");
const resetButton = document.getElementById("reset");
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // الصفوف
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // الأعمدة
  [0, 4, 8],
  [2, 4, 6], // الأقطار
];

let currentPlayer = "X";
let gameActive = true;

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.innerHTML === "" && gameActive) {
      cell.innerHTML = currentPlayer;

      if (checkWinner()) {
        alert(currentPlayer + " هو الفائز!");
        gameActive = false;
      } else if (isDraw()) {
        alert("تعادل!");
        gameActive = false;
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
});

function checkWinner() {
  return winCombos.some((combo) => {
    const [a, b, c] = combo;
    return (
      cells[a].innerHTML !== "" &&
      cells[a].innerHTML === cells[b].innerHTML &&
      cells[b].innerHTML === cells[c].innerHTML
    );
  });
}

function isDraw() {
  return [...cells].every((cell) => cell.innerHTML !== "");
}

function resetGame() {
  cells.forEach((cell) => (cell.innerHTML = ""));
  currentPlayer = "X";
  gameActive = true;
}

resetButton.addEventListener("click", resetGame);
