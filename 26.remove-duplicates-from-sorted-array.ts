/*
 * @lc app=leetcode.cn id=26 lang=typescript
 * @lcpr version=30204
 *
 * [26] 删除有序数组中的重复项
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
// 使用map
// export default
function removeDuplicates(nums: number[]): number {
  return removeByPoinsInterator(nums);
};

function removeByOffset(nums: number[]): number {
  let offset = 0;
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      // 直接覆盖，是要删除
      nums[i - offset] = nums[i];
      set.add(nums[i]);
      // 如果存在, 第一个认为是有序的，必定offset+1;
    } else {
      // 存在，维护需要交换的有序，右边界
      offset++;
    }
    // 插入排序，用j 记录要被插的index
  }
  return nums.length - offset;
}

function removeByPoinsInterator(nums: number[]) {
  // left 总是符合条件的左端，这要不符合条件
  let left = 0;
  let set = new Set();
  // 直接遍历，找到
  for (let right = 0; right < nums.length; right++) {
    if (set.has(nums[right])) {
      // 相当函数中return
      continue;
    }
    // 对于找不到的，要进行更新。
    set.add(nums[right]);
    // 需要维护不符合条件区间
    swap(nums, left++, right);
  }
  return left;
}

function swap (numbers:number[], a: number, b: number) {
  [numbers[a], numbers[b]] = [numbers[b], numbers[a]];
}
// @lc code=end



/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,2,2,3,3,4]\n
// @lcpr case=end

 */

