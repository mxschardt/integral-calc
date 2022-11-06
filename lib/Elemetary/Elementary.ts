function e() {
  // default values
  const a = [
    0.9999998, 1, 0.5000063, 0.1666674, 0.041635, 0.0083298, 0.0014393,
    0.000204,
  ];
  const x = 1;
  const accuracy = 2 * 10 ** -7;
  let U = 1;
  let sum = 0;
  for (let k = 0; k < a.length; k++) {
    U = a[k] * x ** k;
    sum += U;
    if (Math.abs(U) < accuracy) {
      break;
    }
  }
  return sum;
}

function sin() {
  // default values
  const a = [1.000000002, -0.166666589, 0.008333075, -0.000198107, 0.000002608];
  const x = Math.PI / 2;
  const accuracy = 6 * 10 ** -6;
  let U = 1;
  let sum = 0;
  for (let k = 0; k < a.length; k++) {
    U = a[k] * x ** (2 * k + 1);
    sum += U;
    if (Math.abs(U) < accuracy) {
      break;
    }
  }
  return sum;
}

function sqrt(x: number, y0: number, accuracy: number = 0.00001) {
  // default values
  // x  = 14.76 OR 0.142
  // y0 =  3.8  OR  0.4
  let y1 = y0;
  let U = 1;
  while (Math.abs(U) > accuracy) {
    y1 = (y0 + x / y0) / 2;
    U = y1 - y0;
    y0 = y1;
  }
  return y1;
}

function rsqrt(x: number, y0: number, accuracy: number = 0.00001) {
  // default values
  // x  = 17.32 OR 0.464
  // y0 =  0.24 OR 1.5
  let y1 = y0;
  let U = 1;
  while (Math.abs(U) > accuracy) {
    y1 = (y0 / 2) * (3 - x * y0 * y0);
    U = y1 - y0;
    y0 = y1;
  }
  return y1;
}

export default { e, sin, sqrt, rsqrt };
