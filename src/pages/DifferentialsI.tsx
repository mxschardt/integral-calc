import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale } from 'chart.js/auto';
import { FormEvent, useState } from 'react';
import SolveBtn from '../components/SolveBtn/SolveBtn';
import {
  EulerMethodI,
  RungeKuttaMethodI,
} from '../../lib/DifferentialEuations/differentialEuations';
import { all, create } from 'mathjs';

function Differentials() {
  const [equation, setEquation] = useState('');
  const [method, setMethod] = useState('euler');
  const [limitA, setLimitA] = useState('');
  const [limitB, setLimitB] = useState('');
  const [step, setStep] = useState('');
  const [x0, setX0] = useState('');
  const [y0, setY0] = useState('');
  const [data, setData] = useState<number[]>([]);
  const [labels, setLabels] = useState<number[]>([]);
  const [graphLabel, setGraphLabel] = useState('');

  const math = create(all, {});

  const solveEquation = (e: FormEvent) => {
    e.preventDefault();

    const fn = (x: number, y: number) => math.evaluate(equation, { x, y });

    const { x, y } =
      method === 'euler'
        ? EulerMethodI(+limitA, +limitB, +x0, +y0, +step, fn)
        : RungeKuttaMethodI(+limitA, +limitB, +x0, +y0, +step, fn);

    setData(y);
    setLabels(x);
    setGraphLabel(equation);
  };
  Chart.register(CategoryScale);
  const graphData = {
    labels,
    datasets: [
      {
        label: graphLabel,
        data,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };
  return (
    <form onSubmit={(e) => solveEquation(e)} className="main">
      <div>
        <div className="equation-result">
          y' =
          <input
            type="text"
            className="equation input"
            placeholder="y * (1 -x)"
            required
            onChange={(e) => setEquation(e.target.value)}
          />
        </div>
        <div className="equation-result">
          <input
            type="number"
            className="input"
            step="0.001"
            required
            placeholder="a"
            onChange={(e) => setLimitA(e.target.value)}
          />
          <input
            type="number"
            className="input"
            step="0.001"
            required
            placeholder="b"
            onChange={(e) => setLimitB(e.target.value)}
          />
        </div>
        <div className="equation-result">
          <input
            type="number"
            className="input"
            step="0.001"
            required
            placeholder="x0"
            onChange={(e) => setX0(e.target.value)}
          />
          <input
            type="number"
            className="input"
            step="0.001"
            required
            placeholder="y0"
            onChange={(e) => setY0(e.target.value)}
          />
        </div>
        <div className="equation-result">
          <label>
            Количество разбиений
            <input
              type="number"
              className="input"
              step="0.001"
              required
              onChange={(e) => setStep(e.target.value)}
            />
          </label>
          <label htmlFor="method">
            Метод
            <select
              name="method"
              id="method"
              className="input select"
              required
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="euler">Эйлера</option>
              <option value="runge">Рунге-Кутта</option>
            </select>
          </label>
        </div>
      </div>
      <SolveBtn />
      <h2>Результаты </h2>
      <ul className="list-result">
        {data.map((e, i) => (
          <li key={i}>
            {i + 1}. x: {labels[i]}; y: {e}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Differentials;
