import { describe, expect, it } from 'vitest';
import { User } from './user';

describe('User', () => {
  it('should greet properly', () => {
    const user = new User('Alice', 25);
    expect(user.greet()).toBe('Hello, Alice!');
  });

  it('should check if user is adult', () => {
    const adult = new User('Bob', 20);
    const child = new User('Charlie', 10);

    expect(adult.isAdult()).toBe(true);
    expect(child.isAdult()).toBe(false);
  });
});
