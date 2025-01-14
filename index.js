// let myArray = [1, 2, 3, 4, 4, 3];
let defaultQuadrantCoordenades = [[0, 2], [3, 5], [6, 8]];
// Initializing array of depth 2 and filling with 0
let sudoku = new Array(9).fill(new Array(9).fill(0));

// fillUnsolvedSudoku(sudoku);

function fillUnsolvedSudoku(emptySudoku) {
    let max = 38 + getRandomInt(4);

    for (let currentIteration = 0; currentIteration < max; currentIteration++) {
        let targetRow = getRandomInt(8);
        let targetColumn = getRandomInt(8);

        // if ()
    }
}

// 1st rule
function isUniqueAmongBigBox(targetRow, targetColumn, number) {
    let rowCoordenades = defaultQuadrantCoordenades[Math.floor(targetRow/3)]; // array
    let columnCoordenades = defaultQuadrantCoordenades[Math.floor(targetColumn/3)]; // array
    let currentBigBox = [];
    // row = [arriba, abajo]     column = [izquierda, derecha]
    for (let currentRow = rowCoordenades[0]; currentRow <= rowCoordenades[1]; currentRow++) { // iterate row
        for (let currentColumn = columnCoordenades[0]; currentColumn <= columnCoordenades[1]; currentColumn++) {
            currentBigBox.push(sudoku[currentRow][currentColumn]);
        }
    }
    return currentBigBox.includes(number);
}

// 2nd rule
function isUniqueAmongRow() {

}

function isUniqueAmongColumn() {

}

// 3rd rule
function isUniqueAmongRowBigBoxes() {

}

function isUniqueAmongColumnBigBoxes() {

}

sudoku[3][7] = 3;
console.log(isUniqueAmongBigBox(3, 7, 2));

function getQuadrantXCoordenades() {
    if (sudoku[Math.ceil(targetRow/3)]) {
        
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
