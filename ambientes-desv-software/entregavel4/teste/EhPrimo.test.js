const EhPrimo = require('../EhPrimo');


test('Testando se 4 é primo', () => {
    expect(EhPrimo(4)).toBe("Não é primo!");
  });

  test('Testando se 7 é primo', () => {
    expect(EhPrimo(7)).toBe("É primo!");
  });