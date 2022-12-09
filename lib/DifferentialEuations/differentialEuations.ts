export function EulerMethodI(
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

export function RungeKuttaMethodI(
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

export function EulerMethodII(
  a: number,
  b: number,
  x0: number,
  y0: number,
  z0: number,
  n: number,
  fn: (x: number, y: number, z: number) => number
) {
  const resX = [x0],
    resY = [y0],
    resZ = [z0];
  const h = (b - a) / n;
  for (let x = x0, y = y0, z = z0; x < b - h; x += h) {
    y = y + h * z;
    z = z + h * fn(x, y0, z);
    y0 = y;
    resX.push(x + h);
    resY.push(y);
    resZ.push(z);
  }
  return { x: resX, y: resY, z: resZ };
}

export function RungeKuttaMethodII(
  a: number,
  b: number,
  x0: number,
  y0: number,
  z0: number,
  n: number,
  fn: (x: number, y: number, z: number) => number
) {
  const resX = [x0],
    resY = [y0],
    resZ = [z0];
  const h = (b - a) / n;
  for (let x = x0, y = y0, z = z0; x < b - h; x += h) {
    const k1 = h * fn(x, y, z);
    const k2 = h * fn(x + h / 2, y + k1 / 2, z);
    const k3 = h * fn(x + h / 2, y + k2 / 2, z);
    const k4 = h * fn(x + h, y + k3, z);
    y = y + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
    z = z + h * fn(x, y0, z);
    y0 = y;
    resX.push(x + h);
    resY.push(y);
    resZ.push(z);
  }
  return { x: resX, y: resY, z: resZ };
}

export function EulerMethodIII(
  a: number,
  b: number,
  x0: number,
  y0: number,
  z0: number,
  n: number,
) {
  const resX = [x0],
    resY = [y0],
    resZ = [z0],
    resT = [a];
  const h = (b - a) / n;
  for (let x = x0, y = y0, z = z0; a < b - h; a += h) {
    x = x0 + h * (-2 * x0 + 5 * z0);
    y = y0 + h * (Math.sin(a - 1) * x0 - y0 + 3 * z0);
    z = z0 + h * (-x0 + 2 * z0);
    x0 = x;
    y0 = y;
    z0 = z;
    resX.push(x + h);
    resY.push(y);
    resZ.push(z);
    resT.push(a);
  }
  return { x: resX, y: resY, z: resZ, t: resT };
}
