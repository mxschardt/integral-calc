import { useState } from 'react';
import { create, all } from 'mathjs';
import './App.css';
import leftRectIntegral from '../lib/integralSolver';

function App() {
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState('');
  const [[limitA, limitB], setLimits] = useState([null, null]);
  const [step, setStep] = useState(0);
  const [method, setMethod] = useState('');
  const [algorithm, setAlgorithm] = useState('');

  const math = create(all, {});

  const solveEquaton = (e) => {
    e.preventDefault();

    const sum = leftRectIntegral(limitA, limitB, step, (x) =>
      math.evaluate(equation, { x })
    );

    setResult(sum);
  };

  return (
    <section className="App">
      <h1>Калькулятор Определенных Интегралов</h1>
      <form onSubmit={solveEquaton}>
        <div id="integral-input">
          <div id="integral">
            <input
              type="number"
              id="upper-limit"
              className="input"
              placeholder="b"
              required
              value={limitB}
              onChange={(e) => setLimits([limitA, +e.target.value])}
            />
            <span id="integral-sigh">
              <Integral />
            </span>
            <input
              type="number"
              id="lower-limit"
              className="input"
              placeholder="a"
              required
              value={limitA}
              onChange={(e) => setLimits([+e.target.value, limitB])}
            />
          </div>
          <input
            type="text"
            id="equation"
            className="input"
            placeholder="sin(x)"
            required
            value={equation}
            onChange={(e) => setEquation(e.target.value)}
          />
          <span>dx</span>
        </div>
        <div id="options">
          <label htmlFor="method">
            Метод
            <select
              name="method"
              id="method"
              className="input select"
              required
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="left-square">Прямоугольников левых частей</option>
              <option value="rigth-square">
                Прямоугольников правых частей
              </option>
              <option value="trapezoidal">Трапеций</option>
              <option value="simpson">Парабол</option>
            </select>
          </label>

          <label htmlFor="algorithm">
            Алгоритм
            <select
              name="algorithm"
              id="algorithm"
              className="input select"
              required
              onChange={(e) => setAlgorithm(e.target.value)}
            >
              <option value="constant-step">Постоянный шаг</option>
              <option value="variable-step">Переменный шаг</option>
            </select>
          </label>

          <select
            name="algorithm"
            id="algorithm"
            className="input select"
            required
            onChange={(e) => setAlgorithm(e.target.value)}
          >
            <option value="constant-step">Постоянный шаг</option>
            <option value="variable-step">Переменный шаг</option>
          </select>

          <label htmlFor="step">
            Количество разбиений
            <input
              type="number"
              id="step"
              className="input"
              required
              value={step}
              onChange={(e) => setStep(e.target.value)}
            />
          </label>
        </div>

        <button type="submit" id="solve-btn">
          Решить
        </button>

        <section id="result">
          <h2>Результат</h2>
          <input type="text" className="input" readOnly value={result} />
        </section>
      </form>
      <footer>
        <h3>
          Васильева Марина × Балаев Жамал × Иванов Никита × Рожков Максим ×
          Шардт Максим
        </h3>
      </footer>
    </section>
  );
}

function Integral() {
  return (
    <svg
      width="46"
      height="95"
      viewBox="0 0 46 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4617 94.9C9.26172 94.9 7.16171 94.6 5.16171 94C3.22838 93.4667 1.56171 92.6333 0.161713 91.5L2.56172 86.1C4.62839 87.9 7.29505 88.8 10.5617 88.8C13.3617 88.8 15.5284 87.9667 17.0617 86.3C18.6617 84.6334 19.4617 82.1667 19.4617 78.9V15.7C19.4617 11.0333 20.7617 7.30001 23.3617 4.50001C26.0284 1.63334 29.7617 0.200012 34.5617 0.200012C36.6951 0.200012 38.7617 0.466681 40.7617 1.00002C42.7617 1.53335 44.4617 2.40001 45.8617 3.60001L43.3617 8.90002C42.4284 8.03335 41.2617 7.36668 39.8617 6.90001C38.5284 6.43334 37.0617 6.20001 35.4617 6.20001C32.5951 6.20001 30.3951 7.06668 28.8617 8.80001C27.3284 10.4667 26.5617 12.9 26.5617 16.1V79.3C26.5617 83.9667 25.2284 87.7334 22.5617 90.6C19.9617 93.4667 16.2617 94.9 11.4617 94.9Z"
        fill="black"
      />
    </svg>
  );
}

export default App;
