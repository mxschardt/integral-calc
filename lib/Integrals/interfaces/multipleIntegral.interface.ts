interface MultipleIntegralParams {
  limitA: number;
  limitB: number;
  limitC: number;
  limitD: number;
  nSplitsX: number;
  nSplitsY: number;
  fn: (x: number, y: number) => number;
}

export default MultipleIntegralParams;
