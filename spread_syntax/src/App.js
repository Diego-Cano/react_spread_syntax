import React, { useEffect } from 'react';
import { task1, task2, task3, task4, task5 } from './spread';

function App() {
  useEffect(() => {
    task1();
    task2();
    task3();
    task4();
    task5();
  }, []);

  return (
    <div className="App">
      <h1>JavaScript Spread Syntax Assignment</h1>
      <p>Check the console for outputs.</p>
    </div>
  );
}

export default App;
