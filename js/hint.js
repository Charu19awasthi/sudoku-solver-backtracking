function getHint() {
  let current = getBoardString();
  let solved = SudokuSolver.solve(current);

  if (!solved) {
    playSound("error");
    alert("Invalid board!");
    return;
  }

  let empty = [];

  for (let i = 0; i < 81; i++) {
    if (current[i] === "-") empty.push(i);
  }

  if (empty.length === 0) {
    alert("Already solved!");
    return;
  }

  let index = empty[Math.floor(Math.random() * empty.length)];

  let tds = document.getElementsByTagName("td");
  tds[index].innerText = solved[index];
}