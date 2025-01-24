import { useState } from "react";

import { Button } from "flowbite-react";

import { SudokuTable } from "./SudokuTable";
import { isThereAnySudokuCollision } from "../sudoku";

let emptySudoku = new Array(9);

// Fill emptySudoku with 0
for (let firstDimension = 0; firstDimension < 9; firstDimension++) {
    emptySudoku[firstDimension] = new Array(9);
    for (let secondDimension = 0; secondDimension < 9; secondDimension++) {
        emptySudoku[firstDimension][secondDimension] = 0;
    }
}

// Fill unsolved sudoku with a maximum of 38 to 42 random numbers
let max = 38 + getRandomInt(4, true);

for (let currentIteration = 0; currentIteration < max; currentIteration++) {
    let targetRow = getRandomInt(8, false);
    let targetColumn = getRandomInt(8, false);
    let randomNumber = getRandomInt(9, true);

    if (isThereAnySudokuCollision(emptySudoku, targetRow, targetColumn, randomNumber)) {
        currentIteration--;
        continue;
    }

    emptySudoku[targetRow][targetColumn] = randomNumber;

    /* To modify an element
    let sudokuModified = sudokuBoard.map((currentRowElement, currentIndexRow) => {
        if (currentIndexRow === targetRow) return currentRowElement.map((currentColumnElement, currentColumnIndex) => {
                if (currentColumnIndex === targetColumn) return randomNumber;
                else return currentColumnElement;
            });
        else return currentRowElement;
    });
    */
}

export function GameTable() {
    const [sudokuBoard, setSudokuBoard] = useState(emptySudoku);
    
    // setSudokuBoard();

    return(
        <>
            <SudokuTable sudoku={sudokuBoard} />
            
        </>
    );
}

// Get random
function getRandomInt(max, shouldBeRoundedUp) {
    if (shouldBeRoundedUp) {
        return Math.ceil(Math.random() * max);
    } else {
        return Math.floor(Math.random() * max);
    }
}