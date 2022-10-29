interface IntegralParams {
  limitA: number;
  limitB: number;
  nSplits: number;
  fn: (x: number) => number;
  precision?: number;
}

export default IntegralParams;
