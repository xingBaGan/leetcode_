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
  // 建立最大堆 (还不是有序的)
  buildLargeHeap(nums);
  // i 表示要被排除的, 要交换k 次
  for (let i = len - 1; i >= (len - k); i--) {
    swap(nums, 0, i);
    heapify(nums, i, 0);
  }
  return nums[len - k];
};

// 建立大根堆
function heapify(arr: number[], heapSize: number, i: number) {
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  let largest = i;
  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest != i) {
    swap(arr, i, largest);
    heapify(arr, heapSize, largest);
  }
}

function buildLargeHeap(arr: number[]) {
  const len = arr.length;
  for (let i = Math.floor((len - 1) / 2); i >= 0; i--) {
    heapify(arr, len, i);
  }
}

function swap(arr: number[], a: number, b: number) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
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

