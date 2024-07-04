/*
 * @lc app=leetcode.cn id=283 lang=javascript
 * @lcpr version=30204
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length <= 1) return nums;
  // left 从零开始，可以理解为非零边界，每次被交换，left++
  let left = 0;
  let right = -1;
  // right 从零开始遍历
  while (right++ < nums.length) {
    // 目标将右边的非零数往右移动, 可以保证左边都是整数开始的，自然零被挤到右边了
    if (nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
};
// @lc code=end



/*
// @lcpr case=start
// [0,1,0,3,12]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */

