import merge from '../88.merge-sorted-array'
describe('merge', () => {
  // test('should merge two sorted arrays', () => {
  //   let nums1 = [1, 2, 3, 0, 0, 0];
  //   let m = 3;
  //   let nums2 = [2, 5, 6];
  //   let n = 3;
  //   merge(nums1, m, nums2, n);
  //   expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  // });

  test('should merge two sorted arrays', () => {
    let nums1 = [0];
    let m = 0;
    let nums2 = [1];
    let n = 1;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1]);
  });
});