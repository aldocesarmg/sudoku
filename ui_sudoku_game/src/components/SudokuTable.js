import { useState } from 'react';
import { Button, Popover, Table } from 'flowbite-react';

const defaultQuadrantCoordenades = [[0, 2], [3, 5], [6, 8]];

export function SudokuTable(props) {
    let sudoku = props.sudoku;
    const [hoveredRowElement, setHoveredRowElement] = useState(-1);
    const [hoveredColumnElement, setHoveredColumnElement] = useState(-1);
    const [selectedElement, setSelectedElement] = useState([-10, -10]);

    const sudokuRowIterator = sudoku.map((rowElement, rowElementIndex) => {
        let sudokuColumnIterator = rowElement.map((columnElement, columnElementIndex) => {
            let baseStyle = 'font-medium text-center text-2xl border-2 border-solid text-slate-100';
            let isOddCell = ((Math.floor(rowElementIndex/3)) + Math.floor(columnElementIndex/3)) % 2 === 1;
            let isCurrentElementHovered = columnElementIndex === hoveredColumnElement || rowElementIndex === hoveredRowElement;
            let isSelectedElement = (selectedElement[0] === rowElementIndex && selectedElement[1] === columnElementIndex) || columnElement === sudoku[selectedElement[0]][selectedElement[1]] && columnElement !== 0;
            
            if (isSelectedElement) baseStyle += ' bg-red-700';
            else if (isCurrentElementHovered) baseStyle += ' bg-blue-950';
            else if (isOddCell) baseStyle += ' bg-blue-900';
            else baseStyle += ' bg-blue-800';

            return(
                <Table.Cell
                    className={ baseStyle }
                    onMouseEnter={() => setHoveredColumnElement(columnElementIndex)}
                    onMouseLeave={() => setHoveredColumnElement(-1)}
                    onClick={() => setSelectedElement([rowElementIndex, columnElementIndex])}>
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

    return(
        <div className="overflow-x-auto">
            <Table>
                <Table.Body className="divide-y">
                    {sudokuRowIterator}
                </Table.Body>
            </Table>
        </div>
    )
}