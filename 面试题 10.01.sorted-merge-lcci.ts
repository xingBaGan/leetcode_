/*
 * @lc app=leetcode.cn id=面试题 10.01 lang=typescript
 * @lcpr version=30204
 *
 * [面试题 10.01] 合并排序的数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 Do not return anything, modify A in-place instead.
 */
// 末尾有缓存区，归并排序
function merge(A: number[], m: number, B: number[], n: number): void {
  let left = m - 1;
  let right = n - 1;
  const lLen = A.length;
  while (left >= 0 && right >= 0) {
    const newIndex = lLen - (left + right + 1);
    if(A[left] >= B[right]) {
      A[newIndex] = A[left--];
    } else {
      A[newIndex] = B[right--];
    }
  }

  while (left >= 0) {
    const newIndex = lLen - (left + right + 1);
    A[newIndex] = A[left--];
  }

  while (right >= 0) {
    const newIndex = lLen - (left + right + 1);
    A[newIndex] = B[right--];
  }

};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,0,0,0]\n[2,5,6]\n3\n
// @lcpr case=end

 */

