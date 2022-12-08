export function EulerMethod(
  a: number,
  b: number,
  x0: number,
  y0: number,
  n: number,
  fn: (x: number, y: number) => number
) {
  const resX = [x0],
    resY = [y0];
  const h = (b - a) / n;

  for (let x = x0, y = y0; x < b - h; x += h) {
    y += h * fn(x, y);
    resX.push(Math.round((x + h) * 100) / 100);
    resY.push(y);
  }

  return { x: resX, y: resY };
}

export function RungeKuttaMethod(
  a: number,
  b: number,
  x0: number,
  y0: number,
  n: number,
  fn: (x: number, y: number) => number
) {
  const resX = [x0],
    resY = [y0];
  const h = (b - a) / n;

  for (let x = x0, y = y0; x < b - h; x += h) {
    const k1 = h * fn(x, y);
    const k2 = h * fn(x + h / 2, y + k1 / 2);
    const k3 = h * fn(x + h / 2, y + k2 / 2);
    const k4 = h * fn(x + h, y + k3);
    y += (k1 + 2 * k2 + 2 * k3 + k4) / 6;

    resX.push(Math.round((x + h) * 100) / n);
    resY.push(y);
  }

  return { x: resX, y: resY };
}

const result = EulerMethod(0, 1, 0, 1, 1, (x, y) => y * (1 - x));
console.log(result.x);
