import { describe, expect, it } from 'vitest';
import { add, multiply } from './math';

describe('math', () => {
  it('adds numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('multiplies numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
