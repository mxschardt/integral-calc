import { describe, expect, it } from 'vitest';

import { getSquare } from '../src/App';

describe('test', () => {
  it('Returns squered number', () => {
    expect(getSquare(2)).toBe(4);
    expect(getSquare(3)).toBe(9);
    expect(getSquare(5)).toBe(25);
    expect(getSquare(8)).toBe(64);
  });
});
