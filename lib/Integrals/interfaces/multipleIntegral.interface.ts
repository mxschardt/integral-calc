interface MultipleIntegralParams {
  limitA: number;
  limitB: number;
  limitC: number;
  limitD: number;
  nSplits: number;
  fn: (x: number) => number;
}

export default MultipleIntegralParams;