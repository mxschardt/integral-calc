import { create, all } from 'mathjs';
import { FormEvent, useState } from 'react';
import { solveMultipleIntegral } from '../lib/Integrals/Integrals';
import Integral from './accets/Integral';
import LimitInput from './components/LimitInput.tsx/LimitInput';

function MultiplyIntegral() {
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState('');
  const [step, setStep] = useState('');

  const [limitA, setLimitA] = useState('');
  const [limitB, setLimitB] = useState('');
  const [limitC, setLimitC] = useState('');
  const [limitD, setLimitD] = useState('');

  const math = create(all, {});

  const solveEquaton = (e: FormEvent) => {
    e.preventDefault;

    let result = '';
    try {
      const fn = (x: number) => math.evaluate(equation, { x });

      const integralResult = solveMultipleIntegral({
        limitA: +limitA,
        limitB: +limitB,
        limitC: +limitC,
        limitD: +limitD,
        nSplits: +step,
        fn,
      });

      result = integralResult?.toFixed(5).toString() ?? '';
    } catch (e) {
      console.error(e);
      return;
    }

    setResult(result);
  };

  return (
    <form onSubmit={(e) => solveEquaton(e)}>
      <div id="integral-input">
        <div id="integral">
          <LimitInput
            id="limit-b"
            placeholder="b"
            value={limitB}
            onChange={(e) => setLimitB(e.target.value)}
          />
          <span className="integral-sigh">
            <Integral />
          </span>
          <LimitInput
            id="limit-a"
            placeholder="a"
            value={limitA}
            onChange={(e) => setLimitA(e.target.value)}
          />
        </div>
        <span>dx</span>
        <div id="integral">
          <LimitInput
            id="limit-d"
            placeholder="d"
            value={limitD}
            onChange={(e) => setLimitD(e.target.value)}
          />
          <span className="integral-sigh">
            <Integral />
          </span>
          <LimitInput
            id="limit-c"
            placeholder="c"
            value={limitC}
            onChange={(e) => setLimitC(e.target.value)}
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
        <span>dy</span>
      </div>

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

      <button type="submit" id="solve-btn">
        Решить
      </button>

      <section id="result">
        <h2>Результат</h2>
        <input type="text" className="input" readOnly value={result} />
      </section>
    </form>
  );
}

export default MultiplyIntegral;
