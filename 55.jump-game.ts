/*
 * @lc app=leetcode.cn id=55 lang=typescript
 * @lcpr version=30204
 *
 * [55] 跳跃游戏
 */

// @lc code=start
// 贪心
// export default
function canJump(nums: number[]): boolean {
  if (nums.length === 1) return true;
  return canJumpDP(nums);
};

function canJumpDP(nums: number[]): boolean {
  // 存放能否跳到当前节点，一旦有中断，就false
  const dp = new Array(nums.length).fill(false);
  const len = nums.length;
  // 注意第一个下标一定能跳到的
  dp[0] = true;
  // 判断是否可以到达当前下标节点
  for (let i = 1; i < len; i++) {
    // 判断前面的节点能否到达当前, 不能判断当前到当前吧，下标从
    for (let j = i - 1; j >= 0; j--) {
      // 可以达到j 下标，j 坐标能够跳到 i 节点
      if (dp[j] && nums[j] + j >= i) {
        dp[i] = true;
        break;
      }
    }
    // 当判断前面所有的点都不能到达该点。
    if (!dp[i]) return false
  }

  return dp[len - 1];
}


function canJumpGreedy(nums: number[]): boolean {

  // 代表当前能覆盖的下标
  let cover = 0;
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, i + nums[i]);
    // 发现能够达到最后一个下标
    if (cover >= nums.length - 1) return true;
  }
  return false;
}
// @lc code=end



/*
// @lcpr case=start
// [2,3,1,1,4]\n
// @lcpr case=end

// @lcpr case=start
// [3,2,1,0,4]\n
// @lcpr case=end

 */

