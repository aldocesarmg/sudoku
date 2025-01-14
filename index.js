// let myArray = [1, 2, 3, 4, 4, 3];
let defaultQuadrantCoordenades = [[0, 2], [3, 5], [6, 8]];
// Initializing array of depth 2 and filling with 0
//let zeros = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//let sudoku_01 = Array(9).fill(Array(9));

let sudoku = new Array(9);

for (let firstDimension = 0; firstDimension < 9; firstDimension++) {
    sudoku[firstDimension] = new Array(9);
    for (let secondDimension = 0; secondDimension < 9; secondDimension++) {
        sudoku[firstDimension][secondDimension] = 0;
    }
}

fillUnsolvedSudoku(sudoku);

function fillUnsolvedSudoku(emptySudoku) {
    let max = 38 + getRandomInt(4); // 38

    for (let currentIteration = 0; currentIteration < max; currentIteration++) {
        let targetRow = getRandomInt(8, false);
        let targetColumn = getRandomInt(8, false);
        let randomNumber = getRandomInt(9, true);

        if(!isUniqueAmongBigBox(targetRow, targetColumn, randomNumber)) {
            currentIteration--;
            continue;
        }
        // console.log(targetRow + '    ' + targetColumn + '    ' + randomNumber);
        // sudoku[targetRow].splice(targetColumn, 1, randomNumber);
        sudoku[targetRow][targetColumn] = randomNumber;
        // console.table(sudoku);
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
    return !currentBigBox.includes(number);
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

// console.log(isUniqueAmongBigBox(3, 7, 2));
// console.log(sudoku[0].splice(2, 1, 9));
// console.log(sudoku[0]);
// sudoku[0][1] = 3;
console.table(sudoku);

function getRandomInt(max, shouldBeRoundedUp) {
    if (shouldBeRoundedUp) {
        return Math.ceil(Math.random() * max);
    } else {
        return Math.floor(Math.random() * max);
    }
}
