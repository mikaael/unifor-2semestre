const mdc = require('../MDC');


test('Testando se o MDC de 18 e 12 é 6', () => {
    expect(mdc(18, 12)).toBe("MDC é: 6");
  });

  test('Testando se o MDC de 21 e 14 é 7', () => {
    expect(mdc(21, 14)).toBe("MDC é: 7");
  });