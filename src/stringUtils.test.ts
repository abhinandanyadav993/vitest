import { describe, expect, it } from 'vitest';
import { capitalize, reverse } from './stringUtils';

describe('stringUtils', () => {
  it('capitalizes the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('capitalizes empty string', () => {
    expect(capitalize('')).toBe('');
  });

  it('reverses a word', () => {
    expect(reverse('abc')).toBe('cba');
  });
});
