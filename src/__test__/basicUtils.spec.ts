import { product } from '../app/basicUtils';

describe('BasicUtil test suite', () => {
  it('return the product of 3 and 2', () => {
    const actual = product(3, 2);
    expect(actual).toBe(6);
    expect(actual).toEqual(6);
    expect(actual).toBeLessThan(8);
    expect(actual).toBeGreaterThan(5);
  });
});
