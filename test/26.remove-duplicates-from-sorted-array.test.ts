import removeDuplicates from '../26.remove-duplicates-from-sorted-array';

describe('removeDuplicates', () => {
  // test('should handle an array with multiple duplicates', () => {
  //   const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  //   const result = removeDuplicates(nums);
  //   expect(nums).toEqual([0, 1, 2, 3, 4]);
  //   expect(result).toBe(5);
  // });

  // test('should handle an empty array', () => {
  //   const nums: number[] = [];
  //   const result = removeDuplicates(nums);
  //   expect(nums).toEqual([]);
  //   expect(result).toBe(0);
  // });

  test('[1,1,2]', () => {
    const nums = [1, 1, 2];
    const len = removeDuplicates(nums);
    expect(nums).toEqual([1, 2]);
    nums.length = len;
    expect(len).toBe(2);
  });
});
