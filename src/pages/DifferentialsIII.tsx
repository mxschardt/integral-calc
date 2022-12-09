import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale } from 'chart.js/auto';
import { FormEvent, useState } from 'react';
import SolveBtn from '../components/SolveBtn/SolveBtn';
import {
  EulerMethodII,
  EulerMethodIII,
  RungeKuttaMethodII,
} from '../../lib/DifferentialEuations/differentialEuations';
import { all, create } from 'mathjs';

function Differentials() {
  const [equationX, setEquationX] = useState('');
  const [equationY, setEquationY] = useState('');
  const [equationZ, setEquationZ] = useState('');
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
      math.evaluate(equationX.replace("y''", '').replace("y'", 'z'), {
        x,
        y,
        z,
      });

    const { x, y, z } = EulerMethodIII(+limitA, +limitB, +x0, +y0, +z0, +step);

    setDataY(y);
    setDataX(x);
    setDataZ(z);
  };

  return (
    <form onSubmit={(e) => solveEquation(e)} className="main">
      <div>
        <div className="equation-result">
          dy/dt ={' '}
          <input
            type="text"
            className="equation input"
            placeholder="- 2x + 5z"
            onChange={(e) => setEquationX(e.target.value)}
          />
        </div>
        <div className="equation-result">
          dx/dt ={' '}
          <input
            type="text"
            className="equation input"
            placeholder="sin(t – 1)x – y + 3z"
            onChange={(e) => setEquationY(e.target.value)}
          />
        </div>
        <div className="equation-result">
          dz/dt ={' '}
          <input
            type="text"
            className="equation input"
            placeholder="- x +2z"
            onChange={(e) => setEquationZ(e.target.value)}
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
            placeholder="z0"
            onChange={(e) => setZ0(e.target.value)}
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
        </div>
      </div>
      <SolveBtn />
      <h2>Результаты </h2>
      <ul className="list-result">
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
