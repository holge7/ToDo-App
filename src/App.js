import './App.css';

import TaskList from './components/components/Header/Header';
import Board from './components/components/Board/Board';

function App() {
  return (
    <div className='grid grid-cols-12 p-10'>
      <div className='col-span-12'>
        <TaskList />
      </div>
      <div className='col-span-12'>
        <Board />
      </div>
    </div>
  );
}

export default App;
