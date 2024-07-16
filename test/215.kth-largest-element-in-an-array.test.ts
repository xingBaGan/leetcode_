import findKthLargest from '../215.kth-largest-element-in-an-array'

// test('normal', () => {
//   const array = [3, 2, 3, 1, 2, 4, 5, 5, 6];
//   expect(findKthLargest(array, 4)).toBe(4);
// })

test('[3,2,1,5,6,4]', () => {
  const array = [3, 2, 1, 5, 6, 4];
  expect(findKthLargest(array, 2)).toBe(5);
})

