import { create, all } from 'mathjs';
import { FormEvent, useRef, useState } from 'react';
import Integral from './accets/Integral';
import LimitInput from './components/LimitInput.tsx/LimitInput';

function MultiplyIntegral() {
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState('');

  const [limitA, setLimitA] = useState('');
  const [limitB, setLimitB] = useState('');
  const [limitC, setLimitC] = useState('');
  const [limitD, setLimitD] = useState('');

  const math = create(all, {});

  const solveEquaton = (e: FormEvent) => {};

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
