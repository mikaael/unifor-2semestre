const quicksort = require('../QuickSort');


test('Testando se [1, 700, 84, 3, 9, 45, 12] irá ficar ordenado', () => {
    expect(quicksort([1, 700, 84, 3, 9, 45, 12])).toStrictEqual([1, 3, 9, 12, 45, 84, 700]);
  });

  test('Testando se [2, 8, 7, 1] irá ficar ordenado', () => {
    expect(quicksort([2, 8, 7, 1])).toStrictEqual([1, 2, 7, 8]);
  });