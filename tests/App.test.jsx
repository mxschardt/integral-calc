import { describe, expect, it } from 'vitest';

import { getSquare } from '../src/App';

describe('test', () => {
  it('Returns squered number', () => {
    expect(getSquare(2), 4);
    expect(getSquare(3), 9);
    expect(getSquare(4), 16);
  });
});
