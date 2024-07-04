/*
 * @lc app=leetcode.cn id=215 lang=typescript
 * @lcpr version=30204
 *
 * [215] 数组中的第K个最大元素
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
// export default
function findKthLargest(nums: number[], k: number): number {
  const len = nums.length;
  // 建立最小堆 (还不是有序的)
  for (let i = 1; i < nums.length; i++) {
    hangup(nums, i);
  }

  // i 表示要被排除的
  for (let i = len - 1; i >= 1; i--) {
    swap(nums, 0, i);
    maxHeapify(nums, i, 0);
  }
  return nums[len - k];
};

function getParentIndex(index: number) {
  return Math.floor((index - 1) / 2);
}

function swap(arr: number[], a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

function hangup(arr: number[], i) {
  let parentIndex = getParentIndex(i);
  // 建立大根堆
  while (arr[parentIndex] < arr[i]) {
    swap(arr, parentIndex, i);
    i = parentIndex;
    parentIndex = getParentIndex(i);
  }
}

function maxHeapify(arr: number[], n: number, index: number) {
  const left = index * 2 + 1;
  const right = index * 2 + 2;
  let largest = index;
  if (arr[largest] < arr[left] && left < n) {
    largest = left;
  }

  if (arr[largest] < arr[right] && right < n) {
    largest = right;
  }

  if (largest != index) {
    swap(arr, largest, index);
    maxHeapify(arr, n, largest);
  }
}
// @lc code=end



/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 4\n
// @lcpr case=end

 */

