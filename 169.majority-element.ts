/*
 * @lc app=leetcode.cn id=169 lang=typescript
 * @lcpr version=30204
 *
 * [169] 多数元素
 */

// @lc code=start
// 假定数组不为空，并且必定存在超过一般的数
function majorityElement(nums: number[]): number {
  const len = nums.length;
  let count = 0;
  let candidate;
  // 找到超过一半的的数
  for (let i = 0; i < len; i++) {
    if (count === 0) {
      candidate = nums[i]
      count = 1;
    } else if (candidate == nums[i]) {
      count += 1;
    } else {
      count -= 1;
    }
  }

  return candidate;
};
// @lc code=end



/*
// @lcpr case=start
// [3,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,1,1,1,2,2]\n
// @lcpr case=end

 */

