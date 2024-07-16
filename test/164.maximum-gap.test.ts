import maximumGap from '../164.maximum-gap';

describe('maximumGap', () => {
  test('should return 3 for [3,6,9,1]', () => {
    expect(maximumGap([3, 6, 9, 1])).toBe(3);
  });

  test('should return 0 for [10]', () => {
    expect(maximumGap([10])).toBe(0);
  });

  test('should return 0 for [2,99999999]', () => {
    expect(maximumGap([2, 99999999])).toBe(99999997);
  });

  test('should return 2 for [1, 100, 3]', () => {
    expect(maximumGap([1, 100, 3])).toBe(99);
  });

  test('should return 4 for [1, 1, 1, 1, 1]', () => {
    expect(maximumGap([1, 1, 1, 1, 1])).toBe(0);
  });

  test('should return 5 for [100, 3, 2, 1, 4, 5]', () => {
    expect(maximumGap([100, 3, 2, 1, 4, 5])).toBe(95);
  });

  test('should return 0 for empty array', () => {
    expect(maximumGap([])).toBe(0);
  });

  test('should return 1 for [1, 2]', () => {
    expect(maximumGap([1, 2])).toBe(1);
  });

  test('should return 0 for [2, 1]', () => {
    expect(maximumGap([2, 1])).toBe(1);
  });

  test('should return 4 for [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]', () => {
    expect(maximumGap([100, 90, 80, 70, 60, 50, 40, 30, 20, 10])).toBe(10);
  });

  test('should return 1 for [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]', () => {
    expect(maximumGap([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])).toBe(10);
  });
});
