const fibonacci = require('../Fibonacci');

test('Testando a série com 4 termos é igual a 0, 1, 1, 2', () => {
    expect(fibonacci(4)).toBe("0, 1, 1, 2.");
});

test('Testando a série com 6 termos é igual a 0, 1, 1, 2, 3, 5', () => {
  expect(fibonacci(6)).toBe("0, 1, 1, 2, 3, 5.");
});