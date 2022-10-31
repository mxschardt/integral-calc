import { create, all } from 'mathjs';
import { ChangeEvent, FormEvent, useState } from 'react';
import { solveMultipleIntegral } from '../../lib/Integrals/Integrals';
import IntegralSigh from '../accets/IntegralSigh';
import LimitInput from '../components/LimitInput/LimitInput';
import './styles/integral.css';

function MultiplyIntegral() {
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState('');
  const [stepX, setStepX] = useState('');
  const [stepY, setStepY] = useState('');

  const [limitA, setLimitA] = useState('');
  const [limitB, setLimitB] = useState('');
  const [limitC, setLimitC] = useState('');
  const [limitD, setLimitD] = useState('');

  const math = create(all, {});

  const solveEquaton = (e: FormEvent) => {
    e.preventDefault();

    let result = '';
    try {
      const fn = (x: number, y: number) => math.evaluate(equation, { x, y });

      const integralResult = solveMultipleIntegral({
        limitA: parseFloat(limitA),
        limitB: parseFloat(limitB),
        limitC: parseFloat(limitC),
        limitD: parseFloat(limitD),
        nSplitsX: parseInt(stepX),
        nSplitsY: parseInt(stepY),
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
    <form onSubmit={(e) => solveEquaton(e)} className='main'>
      <div className="integral-input">
        <div className="integral">
          <LimitInput
            className="input upper-limit"
            placeholder="b"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLimitB(e.target.value)
            }
          />
          <span className="integral-sigh">
            <IntegralSigh />
          </span>
          <LimitInput
            className="input lower-limit"
            placeholder="a"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLimitA(e.target.value)
            }
          />
        </div>
        <span>dx</span>
        <div className="integral">
          <LimitInput
            className="input upper-limit"
            placeholder="d"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLimitD(e.target.value)
            }
          />
          <span className="integral-sigh">
            <IntegralSigh />
          </span>
          <LimitInput
            className="input lower-limit"
            placeholder="c"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLimitC(e.target.value)
            }
          />
        </div>
        <input
          type="text"
          className="equation input"
          placeholder="sin(x)"
          required
          onChange={(e) => setEquation(e.target.value)}
        />
        <span>dy</span>
      </div>

      <div className="options">
        <label htmlFor="step">
          Количество разбиений по Х
          <input
            type="number"
            className="step input"
            required
            onChange={(e) => setStepX(e.target.value)}
          />
        </label>
        <label htmlFor="step">
          Количество разбиений по Y
          <input
            type="number"
            className="step input"
            required
            onChange={(e) => setStepY(e.target.value)}
          />
        </label>
      </div>

      <button type="submit" className="solve-btn">
        Решить
      </button>

      <section className="result">
        <h2>Результат</h2>
        <input type="text" className="input" readOnly value={result} />
      </section>
    </form>
  );
}

export default MultiplyIntegral;
