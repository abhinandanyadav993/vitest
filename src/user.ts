export class User {
  constructor(public name: string, public age: number) {}

  isAdult() {
    return this.age >= 18;
  }

  greet() {
    return `Hello, ${this.name}!`;
  }
}
