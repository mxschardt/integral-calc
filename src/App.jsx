import { useState } from 'react';
import turtleLogo from './accets/turtle.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://youtu.be/Wl9oUBgFk6Y" target="_blank" rel="noreferrer">
          <img src={turtleLogo} className="logo" alt="logo" />
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
