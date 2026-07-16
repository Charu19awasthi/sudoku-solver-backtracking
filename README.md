# Sudoku Solver using Backtracking

## Overview

This project is a web-based Sudoku solver built using the backtracking algorithm. It allows users to input a partially filled Sudoku grid and computes the correct solution efficiently.

Sudoku is a 9×9 grid-based puzzle where each row, column, and 3×3 subgrid must contain numbers from 1 to 9 without repetition. This project demonstrates how a classic recursive algorithm can be used to solve such constraint-based problems.

---

## Features

* Solves any valid Sudoku puzzle
* Uses an efficient backtracking approach
* Handles partially filled grids
* Simple and responsive user interface
* Runs directly in the browser without any dependencies

---

## Tech Stack

* HTML
* CSS
* JavaScript

---

## Algorithm Explanation

The solver is based on the backtracking technique:

1. Identify an empty cell in the grid
2. Try placing numbers from 1 to 9
3. Check whether the number is valid:

   * Not present in the same row
   * Not present in the same column
   * Not present in the corresponding 3×3 subgrid
4. If valid, proceed to the next empty cell
5. If no valid number is found, backtrack and try a different number

This approach ensures that all possibilities are explored until a valid solution is reached.

---

## Project Structure

sudoku-solver-backtracking/
│
├── index.html      Main user interface
├── style.css       Styling for the application
├── script.js       Backtracking logic and interactions
└── README.md       Project documentation

---

## How to Use

1. Open the deployed application in your browser
2. Enter the known values of the Sudoku puzzle
3. Click on the "Solve" button
4. The completed solution will be displayed instantly

---

## Example

Input:
5 3 0 | 0 7 0 | 0 0 0
6 0 0 | 1 9 5 | 0 0 0

Output:
5 3 4 | 6 7 8 | 9 1 2
6 7 2 | 1 9 5 | 3 4 8

---

## Future Improvements

* Difficulty level selection
* Hint functionality
* Performance optimization for large variations
* Improved UI/UX

---

## Author

Charu Awasthi
GitHub: https://github.com/Charu19awasthi
🔗 Live Demo:
https://charu19awasthi.github.io/sudoku-solver-backtracking/

---

## License

This project is open source and available under the MIT License.
