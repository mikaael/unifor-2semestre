const somatorio = require('../Somatorio');


test('Testando se a soma dos numeros 10 20 e 30 é 60', () => {
    expect(somatorio([10, 20, 30])).toBe("Somatório: 60");
  });

  test('Testando se a soma dos numeros 5 7 e 3 é 15', () => {
    expect(somatorio([5, 7, 3])).toBe("Somatório: 15");
  });