interface MultipleIntegralParams {
  limitA: number;
  limitB: number;
  limitC: number;
  limitD: number;
  nSplitsX: number;
  nSplitsY: number;
  fn: (x: number) => number;
}

export default MultipleIntegralParams;