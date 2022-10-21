export function leftRectIntegral(limitA, limitB, nSplits, f) {
  const h = (limitB - limitA) / nSplits;
  let sum = 0;

  for (let x = limitA; x <= limitB - h; x += h) {
    sum += f(x);
  }

  return sum * h;
}

export function rightRectIntegral(limitA, limitB, nSplits, f) {
  const h = (limitB - limitA) / nSplits;
  let sum = 0;

  for (let x = limitA + h; x <= limitB; x += h) {
    sum += f(x);
  }

  return sum * h;
}

export function trapezoidal(limitA, limitB, nSplits, f) {
  const h = (limitB - limitA) / nSplits;
  let sum = (f(limitA) + f(limitB)) / 2;

  for (let x = limitA + h; x <= limitB - h; x += h) {
    sum += f(x);
  }

  return sum * h;
}

export function simpson(limitA, limitB, nSplits, f) {
  const h = (limitB - limitA) / nSplits;
  let sum1 = 0;
  let sum2 = 0;
  for (let x = limitA + h; x <= limitB - h; x += 2 * h) {
    sum1 += 4 * f(x);
  }

  for (let x = limitA + 2 * h; x <= limitB - 2 * h; x += 2 * h) {
    sum2 += 2 * f(x);
  }

  return (h / 3) * (f(limitA) + f(limitB) + sum1 + sum2);
}

export function leftRectIntegralVariable(
  limitA,
  limitB,
  nSplits,
  precision,
  f
) {
  let IN = 0;
  let I2N = 0;
  let R = 1;
  let h = (limitB - limitA) / nSplits;

  while (R > precision) {
    let sum = 0;
    let x = limitA;

    for (x = limitA; x <= limitB - h; x += h) {
      sum += f(x);
    }

    I2N = h * sum;
    R = Math.abs(I2N - IN);
    IN = I2N;
    h /= 2;
  }

  return I2N;
}

export function rightRectIntegralVariable(
  limitA,
  limitB,
  nSplits,
  precision,
  f
) {
  let IN = 0;
  let I2N = 0;
  let R = 1;
  let h = (limitB - limitA) / nSplits;

  while (R > precision) {
    let sum = 0;

    for (let x = limitA + h; x <= limitB; x += h) {
      sum += f(x);
    }

    I2N = h * sum;
    R = Math.abs(I2N - IN);
    IN = I2N;
    h /= 2;
  }

  return I2N;
}
