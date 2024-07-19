/*
 * @lc app=leetcode.cn id=169 lang=typescript
 * @lcpr version=30204
 *
 * [169] 多数元素
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
// 假定数组不为空，并且必定存在超过一般的数
// 分治
function majorityElement(nums: number[]): number {
  const len = nums.length;
  return getMode(nums, 0, len - 1);
};

function getMode(nums: number[], left: number, right: number): number {
  // 当只有一个元素时, 返回第一边界元素
  if (left === right) return nums[left];
  const mid = Math.floor((right - left) / 2) + left;
  const l = getMode(nums, left, mid);
  const r = getMode(nums, mid + 1, right);
  if (l === r) return l;
  const lFrequency = getFrequency(nums, left, right, l);
  const rFrequency = getFrequency(nums, left, right, r);
  return lFrequency > rFrequency ? l : r;
}

function getFrequency(nums: number[], left: number, right: number, target: number) {
  let count = 0;
  for (let i = left; i <= right; i++) {
    if (nums[i] === target) {
      count++;
    }
  }
  return count;
}

// @lc code=end



/*
// @lcpr case=start
// [3,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,1,1,1,2,2]\n
// @lcpr case=end

 */

