import { useState } from 'react';
import reactLogo from '../public/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Hello World!</h1>

      <div className="card">
        <button
          type="button"
          className="count-btn"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}

export const getSquare = (x) => {
  return x * x;
};

export default App;
