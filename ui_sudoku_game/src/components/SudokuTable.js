import { Button, Popover } from 'flowbite-react';

export function SudokuTable(props) {
    let sudoku = props.sudoku;
    
    const sudokuRowIterator = sudoku.map((rowElement) => {
        let sudokuColumnIterator = rowElement.map((columnElement) => {
            return(
            <td className='px-4 py-1 font-bold border-2 border-black border-collapse'>
                {(columnElement === 0) ? '_' : columnElement}</td>);
        })
        return(<tr>{sudokuColumnIterator}</tr>);
    });

    return(
        <table className='border-2 border-black border-collapse'>
            {sudokuRowIterator}
        </table>
    )
}