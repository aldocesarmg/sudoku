// let myArray = [1, 2, 3, 4, 4, 3];

// Initializing array of depth 2 and filling with 0
let sudoku = new Array(9).fill(new Array(9).fill(0));



console.table(sudoku);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
