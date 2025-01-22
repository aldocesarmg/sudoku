const defaultQuadrantCoordenades = [[0, 2], [3, 5], [6, 8]];
/*
let sudoku = new Array(9);

for (let firstDimension = 0; firstDimension < 9; firstDimension++) {
    sudoku[firstDimension] = new Array(9);
    for (let secondDimension = 0; secondDimension < 9; secondDimension++) {
        sudoku[firstDimension][secondDimension] = 0;
    }
}
*/

// fillUnsolvedSudoku(sudoku);

function isThereAnySudokuCollision(emptySudoku, targetRow, targetColumn, randomNumber) {
    if (emptySudoku[targetRow][targetColumn] !== 0
        || existsInItsBigBox(emptySudoku, targetRow, targetColumn, randomNumber)
        || existsInItsRow(emptySudoku, targetRow, randomNumber)
        || existsInItsColumn(emptySudoku, targetColumn, randomNumber)) {
        return true;
    }
    return false;
}

// 1st rule - Done
function existsInItsBigBox(emptySudoku, targetRow, targetColumn, number) {
    let rowCoordenades = defaultQuadrantCoordenades[Math.floor(targetRow/3)]; // array
    let columnCoordenades = defaultQuadrantCoordenades[Math.floor(targetColumn/3)]; // array
    let currentBigBox = [];
    // row = [arriba, abajo]     column = [izquierda, derecha]
    for (let currentRow = rowCoordenades[0]; currentRow <= rowCoordenades[1]; currentRow++) { // iterate row
        for (let currentColumn = columnCoordenades[0]; currentColumn <= columnCoordenades[1]; currentColumn++) {
            currentBigBox.push(emptySudoku[currentRow][currentColumn]);
        }
    }
    return currentBigBox.includes(number);
}

// 2nd rule
function existsInItsRow(emptySudoku, targetRow, number) {
    let rowElements = [];

    for (let currentColumn = 0; currentColumn < 9; currentColumn++) {
        rowElements.push(emptySudoku[targetRow][currentColumn]);
    }

    return rowElements.includes(number);
}

function existsInItsColumn(emptySudoku, targetColumn, number) {
    let columnElements = [];

    for (let currentRow = 0; currentRow < 9; currentRow++) {
        columnElements.push(emptySudoku[currentRow][targetColumn]);
    }
    
    return columnElements.includes(number);
}

module.exports = { isThereAnySudokuCollision };