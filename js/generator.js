function generatePuzzle() {
    let difficulty = document.getElementById("difficulty").value;

    let board = Array(9).fill().map(() => Array(9).fill(0));
    solve(board); // full solution first

    let removeCount = difficulty === "easy" ? 30 :
                      difficulty === "medium" ? 45 : 55;

    while (removeCount > 0) {
        let r = Math.floor(Math.random() * 9);
        let c = Math.floor(Math.random() * 9);
        if (board[r][c] !== 0) {
            board[r][c] = 0;
            removeCount--;
        }
    }

    loadBoard(board);
}