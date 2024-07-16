/*
 * @lc app=leetcode.cn id=88 lang=typescript
 * @lcpr version=30204
 *
 * [88] 合并两个有序数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
// 原地修改nums1
// 
// export default 
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // nums1中没有元素
  if (m === 0) {
    // 不能直接修改里面的引用
    nums2.forEach((num, index) => {
      nums1[index] = num;
    });
    return;
  }
  // nums2中没有元素
  if (n === 0) {
    // 不进行任何操作
    return;
  }
  // 使用尾部同向双指针
  let p1 = m - 1;
  let p2 = n - 1;

  let currIndex = nums1.length - 1;
  //  从nums1 尾部往前放置
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2] && currIndex >= 0) {
      nums1[currIndex--] = nums1[p1--];
    } else {
      nums1[currIndex--] = nums2[p2--];
    }
  }

  /**
   * 将剩余的数放回nums1.
   */
  while (p1 >= 0 && currIndex >= 0) {
    nums1[currIndex--] = nums1[p1--];
  }

  while (p2 >= 0 && currIndex >= 0) {
    nums1[currIndex--] = nums2[p2--];
  }
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,0,0,0]\n3\n[2,5,6]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n[]\n0\n
// @lcpr case=end

// @lcpr case=start
// [0]\n0\n[1]\n1\n
// @lcpr case=end

 */

