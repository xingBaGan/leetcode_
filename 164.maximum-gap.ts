/*
 * @lc app=leetcode.cn id=164 lang=typescript
 * @lcpr version=30204
 *
 * [164] 最大间距
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
// 使用基数排序，之后讲个比较
function maximumGap(nums: number[]): number {
  let len = nums.length;
  if (len < 2) return 0;
  radixSort(nums);

  // 找出数之间的gap
  let maxGap = 0;
  for (let i = 1; i < len; i++) {
    maxGap = Math.max(maxGap, nums[i] - nums[i - 1]);
  }
  return maxGap;
};

function radixSort(nums: number[]) {
  const max = Math.max(...nums);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countSortByTen(nums, exp);
  }
}

function countSortByTen(nums: number[], exp: number) {
  const len = nums.length;
  // 计数数组
  const count = new Array(10).fill(0);
  const output = new Array(len).fill(0);

  // 统计digist 频次
  nums.forEach((val) => {
    const digit = Math.floor(val / exp) % 10;
    count[digit]++;
  });

  // 将频次转为下标
  for (let i = 1; i <= 10; i++) {
    count[i] += count[i - 1];
  }

  // 反向输出到output
  for (let i = len - 1; i >= 0; i--) {
    // 获取index
    const digit = Math.floor(nums[i] / exp) % 10;
    const index = count[digit] - 1;
    output[index] = nums[i];
    count[digit]--;
  }

  // 覆盖原数组
  output.forEach((val, index) => {
    nums[index] = val;
  });
}

// @lc code=end



/*
// @lcpr case=start
// [3,6,9,1]\n
// @lcpr case=end

// @lcpr case=start
// [10]\n
// @lcpr case=end

 */

