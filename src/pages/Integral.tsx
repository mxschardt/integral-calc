import { create, all } from 'mathjs';
import { ChangeEvent, FormEvent, useState } from 'react';
import { solveIntegral } from '../../lib/Integrals/Integrals';
import Method from '../../lib/Integrals/types/method.type';
import IntegralSigh from '../accets/IntegralSigh';
import LimitInput from '../components/LimitInput/LimitInput';
import './styles/integral.css';

function Integral() {
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState('');
  const [method, setMethod] = useState<Method>('left-square');
  const [limitA, setLimitA] = useState('');
  const [limitB, setLimitB] = useState('');
  const [step, setStep] = useState('');
  const [precision, setPrecision] = useState('');
  const [variableStep, setVariableStep] = useState(false);

  const math = create(all, {});

  const solveEquaton = (e: FormEvent) => {
    e.preventDefault();

    let result = '';
    try {
      const fn = (x: number) => math.evaluate(equation, { x });

      const integralResult = solveIntegral(
        {
          limitA: parseFloat(limitA),
          limitB: parseFloat(limitB),
          nSplits: parseInt(step),
          precision:
            isNaN(parseFloat(precision)) ? undefined : parseFloat(precision),
          fn,
        },
        method,
        variableStep
      );

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
        <input
          type="text"
          className="equation input"
          placeholder="sin(x)"
          required
          onChange={(e) => setEquation(e.target.value)}
        />
        <span>dx</span>
      </div>
      <div className="options">
        <label htmlFor="method">
          ??????????
          <select
            name="method"
            id="method"
            className="input select"
            required
            onChange={(e) => setMethod(e.target.value as Method)}
          >
            <option value="left-square">?????????????????????????????? ?????????? ????????????</option>
            <option value="right-square">?????????????????????????????? ???????????? ????????????</option>
            <option value="trapezoidal">????????????????</option>
            <option value="simpson">??????????????</option>
          </select>
        </label>
        <label htmlFor="step">
          ???????????????????? ??????????????????
          <input
            type="number"
            className="input step"
            required
            onChange={(e) => setStep(e.target.value)}
          />
        </label>
        <label htmlFor="variable-step">
          ???????????????????? ??????
          <input
            type="checkbox"
            className="input variable-step"
            name="variable-step"
            defaultChecked={variableStep}
            onChange={() => setVariableStep(!variableStep)}
            disabled={!(method === 'left-square' || method === 'right-square')}
          />
        </label>
        <label htmlFor="precision">
          ????????????????
          <input
            type="number"
            className="precision input"
            step="0.00001"
            required
            onChange={(e) => setPrecision(e.target.value)}
            disabled={!variableStep}
          />
        </label>
      </div>

      <button type="submit" className="solve-btn">
        ????????????
      </button>

      <section className="result">
        <h2>??????????????????</h2>
        <input type="text" className="input" readOnly value={result} />
      </section>
    </form>
  );
}

export default Integral;
