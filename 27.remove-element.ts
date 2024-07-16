/*
 * @lc app=leetcode.cn id=27 lang=typescript
 * @lcpr version=30204
 *
 * [27] 移除元素
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
// 类似于移动零, 快慢指针
function removeElement(nums: number[], val: number): number {
    let low = 0;
    // 找到不符合条件的与low 下标交换
    let fast = 0;
  for (fast = 0; fast < nums.length; fast++) {
      // 将不符合条件往前面换，留下来的自然
      if(nums[fast] !== val) {
        swap(nums, low, fast);
        low++;
      }
    }
};

function swap(nums: number[], a: number, b: number) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = nums[a];
}
// @lc code=end



/*
// @lcpr case=start
// [3,2,2,3]\n3\n
// @lcpr case=end

// @lcpr case=start
// [0,1,2,2,3,0,4,2]\n2\n
// @lcpr case=end

 */

