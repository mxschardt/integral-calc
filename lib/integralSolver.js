export default function leftRectIntegral(limitA, limitB, nSplits, f) {
  const h = (limitB - limitA) / nSplits;
  let sum = 0;

  for (let i = 0; i < nSplits; i += 1) {
    const x = limitA + i * h;
    sum += f(x);
  }

  return sum * h;
}
