import './App.css';
import { BoardWrapper } from './components/Board/BoardWrapper';

function App() {
  return (
    <div className="App">
      <nav></nav>
      <h1 className="navbar-app">App bar</h1>
      <h1 className="navbar-board">Board bar</h1>
      <BoardWrapper />
    </div>
  );
}

export default App;
