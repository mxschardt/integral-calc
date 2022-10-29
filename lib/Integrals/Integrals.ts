import Method from './method.type';
import IntegralParams from './interfaces/integral.interface';
import MultipleIntegralParams from './interfaces/multipleIntegral.interface';

function getIntegralValue(
  params: IntegralParams,
  method: Method,
  usePrecision: boolean
) {
  const { limitA, limitB } = params;

  if (limitA === limitB) {
    console.error('Limits must differ');
    return null;
  }

  switch (method) {
    case 'left-square':
      return usePrecision
        ? leftRectIntegralVariable(params)
        : leftRectIntegral(params);
    case 'right-square':
      return usePrecision
        ? rightRectIntegralVariable(params)
        : rightRectIntegral(params);
    case 'trapezoidal':
      return trapezoidal(params);
    case 'simpson':
      return simpson(params);
    default:
      const neverHappens: never = method;
      return neverHappens;
  }
}
export function solveMultipleIntegral(params: MultipleIntegralParams) {
  return 100;
}

export function leftRectIntegral(params: IntegralParams) {
  const { limitA, limitB, nSplits, fn } = params;
  const h = (limitB - limitA) / nSplits;
  let sum = 0;

  for (let x = limitA; x <= limitB - h; x += h) {
    sum += fn(x);
  }

  return sum * h;
}

export function rightRectIntegral(params: IntegralParams) {
  const { limitA, limitB, nSplits, fn } = params;
  const h = (limitB - limitA) / nSplits;
  let sum = 0;

  for (let x = limitA + h; x <= limitB; x += h) {
    sum += fn(x);
  }

  return sum * h;
}

export function trapezoidal(params: IntegralParams) {
  const { limitA, limitB, nSplits, fn } = params;
  const h = (limitB - limitA) / nSplits;
  let sum = (fn(limitA) + fn(limitB)) / 2;

  for (let x = limitA + h; x <= limitB - h; x += h) {
    sum += fn(x);
  }

  return sum * h;
}

export function simpson(params: IntegralParams) {
  const { limitA, limitB, nSplits, fn } = params;
  const h = (limitB - limitA) / nSplits;
  let sum1 = 0;
  let sum2 = 0;
  for (let x = limitA + h; x <= limitB - h; x += 2 * h) {
    sum1 += 4 * fn(x);
  }

  for (let x = limitA + 2 * h; x <= limitB - 2 * h; x += 2 * h) {
    sum2 += 2 * fn(x);
  }

  return (h / 3) * (fn(limitA) + fn(limitB) + sum1 + sum2);
}

export function leftRectIntegralVariable(params: IntegralParams) {
  const { limitA, limitB, nSplits, fn, precision } = params;

  let IN = 0;
  let I2N = 0;
  let R = 1;
  let h = (limitB - limitA) / nSplits;

  while (R > (precision ?? 0.0001)) {
    let sum = 0;
    let x = limitA;

    for (x = limitA; x <= limitB - h; x += h) {
      sum += fn(x);
    }

    I2N = h * sum;
    R = Math.abs(I2N - IN);
    IN = I2N;
    h /= 2;
  }

  return I2N;
}

export function rightRectIntegralVariable(params: IntegralParams) {
  const { limitA, limitB, nSplits, fn, precision } = params;

  let IN = 0;
  let I2N = 0;
  let R = 1;
  let h = (limitB - limitA) / nSplits;

  while (R > (precision ?? 0.001)) {
    let sum = 0;

    for (let x = limitA + h; x <= limitB; x += h) {
      sum += fn(x);
    }

    I2N = h * sum;
    R = Math.abs(I2N - IN);
    IN = I2N;
    h /= 2;
  }

  return I2N;
}

export default getIntegralValue;
