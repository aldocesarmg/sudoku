import './App.css';
import { GameTable } from './components/GameTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Sudoku Game
        </p>
      </header>
      <div className='sudoku-table-game my-10'>
        <GameTable />
      </div>
    </div>
  );
}

export default App;
