import React from 'react';
import { Counter } from './features/counter/Counter';
import { TaskList } from './features/task/TaskList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <TaskList />
      </header>
    </div>
  );
}

export default App;
