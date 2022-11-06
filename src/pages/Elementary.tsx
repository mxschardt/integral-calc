import { ChangeEvent, FormEvent, useState } from 'react';
import elementary from '../../lib/Elemetary/Elementary';
import Accuracy from '../components/Accuracy/Accuracy';
import SolveBtn from '../components/SolveBtn/SolveBtn';
import './styles/elementary.css';

function Elementary() {
  const [xSqrt, setXSqrt] = useState(14.76);
  const [xRsqrt, setXRsqrt] = useState(17.32);
  const [resultSqrt, setResultSqrt] = useState('');
  const [resultRsqrt, setResultRsqrt] = useState('');
  const [accuracy, setAccuracy] = useState('');

  const solveEquaton = (e: FormEvent) => {
    e.preventDefault();

    let resultSqrt = elementary
      .sqrt(xSqrt, xSqrt === 14.76 ? 3.8 : 0.4, Number(accuracy))
      .toFixed(5)
      .toString();
    let resultRsqrt = elementary
      .rsqrt(xRsqrt, xRsqrt === 17.32 ? 0.24 : 1.5, Number(accuracy))
      .toFixed(5)
      .toString();

    setResultSqrt(resultSqrt);
    setResultRsqrt(resultRsqrt);
  };

  return (
    <form onSubmit={(e) => solveEquaton(e)} className="main elementary">
      <EquationResult
        label="e(x)"
        result={elementary.e().toFixed(9).toString()}
      />
      <EquationResult
        label="sin(x)"
        result={elementary.sin().toFixed(9).toString()}
      />
      <section>
        <EquationResult label="sqrt(x)" result={resultSqrt} />
        <div className="options">
          <label htmlFor="x">
            x
            <select
              name="x"
              id="x"
              className="input select"
              required
              onChange={(e) => setXSqrt(+e.target.value)}
            >
              <option value={14.76}>14.76</option>
              <option value={0.142}>0.142</option>
            </select>
          </label>
          <Accuracy
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setAccuracy(e.target.value);
            }}
            defaultValue={0.00001}
          />
        </div>
      </section>
      <section>
        <EquationResult label="rsqrt(x)" result={resultRsqrt} />
        <div className="options">
          <label htmlFor="x">
            x
            <select
              name="x"
              id="x"
              className="input select"
              required
              onChange={(e) => setXRsqrt(+e.target.value)}
            >
              <option value={17.32}>17.32</option>
              <option value={0.464}>0.464</option>
            </select>
          </label>
          <Accuracy
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setAccuracy(e.target.value);
            }}
            defaultValue={0.00001}
          />
        </div>
      </section>
      <SolveBtn />
    </form>
  );
}

export default Elementary;

function EquationResult({ label, result }: { label: string; result: string }) {
  return (
    <div className="equation-result">
      <label>
        {label}
        <input type="text" className="input" readOnly value={result} />
      </label>
    </div>
  );
}
