import sum from './sum';

describe('sum', () => {
  test('2+2', () => {
    const expectedResult = 4
    const result = sum(2, 2)

	  expect(result).toBe(expectedResult)
  });
	
  test('null+2', () => {
    const expectedResult = 'wrong argument'
    const result = sum(null, 2)

    expect(result).toBe(expectedResult)
  });
});