const calculator = require('./task3');

describe('Calcualtor operations', () => {
  test('Add function', () => {
    const a = 1;
    const b = 2;
    expect(calculator.add(a,b)).toBe(3);
  });
  test('Subtract function', () => {
    const a = 1;
    const b = 2;
    expect(calculator.subtract(a,b)).toBe(0);
  });
  test('Multiply function', () => {
    const a = 1;
    const b = 2;
    expect(calculator.multiply(a,b)).toBe(2);
  });
  test('Divide function', () => {
    const a = 1;
    const b = 2;
    expect(calculator.divide(a,b)).toBe(0);
  });
  test('Capitalize function', () => {
    const str = 'sara';
    expect(calculator.Capitalize(str)).toEqual('Sara');
  });
});