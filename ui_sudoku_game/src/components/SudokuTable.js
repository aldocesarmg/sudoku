import { useState } from 'react';
import { Button, Table } from 'flowbite-react';

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
}

export function SudokuTable() {
    const [sudoku, setSudoku] = useState(Array.from(emptySudoku));
    const [selectedElement, setSelectedElement] = useState([-10, -10, -1]);
    const [isGameStart, setIsGameStart] = useState(true);

    const [hoveredRowElement, setHoveredRowElement] = useState(-1);
    const [hoveredColumnElement, setHoveredColumnElement] = useState(-1);

    const sudokuRowIterator = sudoku.map((rowElement, rowElementIndex) => {
        let sudokuColumnIterator = rowElement.map((columnElement, columnElementIndex) => {
            let baseStyle = 'font-medium text-center text-2xl border-2 border-solid';
            let isSelectedElement = (selectedElement[0] === rowElementIndex && selectedElement[1] === columnElementIndex);
            let isEqualToSelectedElement = columnElement === selectedElement[2] && columnElement !== 0;
            let isCurrentElementHovered = columnElementIndex === hoveredColumnElement || rowElementIndex === hoveredRowElement;
            let isOddCell = ((Math.floor(rowElementIndex/3)) + Math.floor(columnElementIndex/3)) % 2 === 1;
            let isInputNumber = emptySudoku[rowElementIndex][columnElementIndex] === 0;
            
            // let isWrong = pending code to check if number collides with another

            if (isSelectedElement) baseStyle += ' bg-cyan-600';
            else if (isEqualToSelectedElement) baseStyle += ' bg-red-400';
            else if (isCurrentElementHovered) baseStyle += ' bg-blue-950';
            else if (isOddCell) baseStyle += ' bg-blue-900';
            else baseStyle += ' bg-blue-800';

            if (isInputNumber) baseStyle += ' text-slate-300';
            else baseStyle += ' text-cyan-100';

            return(
                <Table.Cell
                    className={ baseStyle }
                    onMouseEnter={() => setHoveredColumnElement(columnElementIndex)}
                    onMouseLeave={() => setHoveredColumnElement(-1)}
                    onClick={() => {
                        if (isGameStart && columnElement === 0) {
                            setSelectedElement([rowElementIndex, columnElementIndex, columnElement]);
                            setIsGameStart(false);
                        } else if (!isGameStart && emptySudoku[rowElementIndex][columnElementIndex] === 0) {
                            setSelectedElement([rowElementIndex, columnElementIndex, columnElement]);
                        }
                        
                    }}>
                    {(columnElement === 0) ? '·' : columnElement}
                </Table.Cell>
            );
        })
        return(<Table.Row
                onMouseEnter={() => setHoveredRowElement(rowElementIndex)}
                onMouseLeave={() => setHoveredRowElement(-1)}>
                {sudokuColumnIterator}
            </Table.Row>);
    });
    //alert('despues de entrar al map sudokutable')

    let sudokuButtonNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((currentNumber) => {
        return(
            <Button
                className="bg-blue-950"
                onClick={() => {
                    if (selectedElement[0] !== -10) {
                        setSudoku(sudoku.map((rowElement, rowElementIndex) => {
                            if (rowElementIndex === selectedElement[0]) {
                                return rowElement.map((columnElement, columnElementIndex) => {
                                    if (columnElementIndex === selectedElement[1]) {
                                        return currentNumber;
                                    }
                                    return columnElement;
                                })
                            }
                            return rowElement;
                        }));
                        setSelectedElement([selectedElement[0], selectedElement[1], currentNumber]);
                    }
                }}>
                    {currentNumber}
            </Button>
        );
    });

    return(
        <div className="overflow-x-auto flex-col">
            <Table>
                <Table.Body className="divide-y">
                    {sudokuRowIterator}
                </Table.Body>
            </Table>
            <Button.Group className="py-8">
                {sudokuButtonNumbers}
            </Button.Group>
        </div>
    )
}

function getRandomInt(max, shouldBeRoundedUp) {
    if (shouldBeRoundedUp) {
        return Math.ceil(Math.random() * max);
    } else {
        return Math.floor(Math.random() * max);
    }
}

