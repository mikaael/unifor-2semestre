const contagem = require('../VlrEntre');

test('Testando se entre os numeros 1 3.4 e 2 vai ter apenas dois numeros inteiros', () => {
    expect(contagem([1, 3.4, 2])).toBe("Contagem dos números inteiros: 2");
  });

  test('Testando se entre os numeros 1.2 20.3 e 8 vai ter apenas um numero inteiro', () => {
    expect(contagem([1.2, 20.3, 8])).toBe("Contagem dos números inteiros: 1");
  });