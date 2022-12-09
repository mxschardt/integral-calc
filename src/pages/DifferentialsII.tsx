import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale } from 'chart.js/auto';
import { FormEvent, useState } from 'react';
import SolveBtn from '../components/SolveBtn/SolveBtn';
import {
  EulerMethodII,
  RungeKuttaMethodII,
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
  const [z0, setZ0] = useState('');
  const [dataY, setDataY] = useState<number[]>([]);
  const [dataX, setDataX] = useState<number[]>([]);
  const [dataZ, setDataZ] = useState<number[]>([]);
  const math = create(all, {});

  const solveEquation = (e: FormEvent) => {
    e.preventDefault();

    const fn = (x: number, y: number, z: number) =>
      math.evaluate(equation.replace("y''", '').replace("y'", 'z'), {
        x,
        y,
        z,
      });

    const { x, y, z } =
      method === 'euler'
        ? EulerMethodII(+limitA, +limitB, +x0, +y0, +z0, +step, fn)
        : RungeKuttaMethodII(+limitA, +limitB, +x0, +y0, +z0, +step, fn);

    setDataY(y);
    setDataX(x);
    setDataZ(z);
  };

  return (
    <form onSubmit={(e) => solveEquation(e)} className="main">
      <div>
        <div className="equation-result">
          <input
            type="text"
            className="equation input"
            placeholder="y’’ + y’/x + y"
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
          <input
            type="number"
            className="input"
            step="0.001"
            required
            placeholder="y'0"
            onChange={(e) => setZ0(e.target.value)}
          />
        </div>
        <div className="equation-result">
          <label>
            Шаг
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
      <ul className='list-result'>
        {dataY.map((e, i) => (
          <li key={i}>
            {i + 1}. x: {dataX[i]}; y: {e}; y': {dataZ[i]}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Differentials;
