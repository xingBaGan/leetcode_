/*
 * @lc app=leetcode.cn id=912 lang=typescript
 * @lcpr version=30204
 *
 * [912] 排序数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function sortArray(nums: number[]): number[] {
  // 桶排序
  const len = nums.length;
  if (len <= 1) return nums;
  const bucketSize = 5;
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  // 计算痛的个数
  const bucketCount = Math.floor(((max - min) / bucketSize) + 1);
  const buckets: number[][] = new Array(bucketCount).fill(null).map(() => []);

  // 将相应的数据分给相应的桶
  nums.forEach((val) => {
    const bucketIndex = Math.floor((val - min) / bucketSize);
    buckets[bucketIndex].push(val);
  });

  nums.length = 0;
  for (let i = 0; i < buckets.length; i++) {
    merge_sort(buckets[i]);
    nums.push(...buckets[i]);
  }
  return nums;
};

function merge_sort(arr: number[]) {
  const len = arr.length;
  if (len <= 1) return arr;
  divide_part(arr, 0, len - 1);
  return arr;
}

// 将整体分为左右两部分
function divide_part(arr: number[], left: number, right: number) {
  if (left < right) {
    const mid = Math.floor((right - left) / 2) + left;
    divide_part(arr, left, mid);
    divide_part(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}

// 升序排序
function merge(arr: number[], left: number, mid: number, right: number) {
  let p1 = left;
  let p2 = mid + 1;
  const helper = [] as number[];
  // 升序
  while (p1 <= mid && p2 <= right) {
    if (arr[p1] <= arr[p2]) {
      helper.push(arr[p1++]);
    } else {
      helper.push(arr[p2++]);
    }
  }

  while (p1 <= mid) {
    helper.push(arr[p1++]);
  }

  while (p2 <= right) {
    helper.push(arr[p2++]);
  }

  // 将helper放入result
  helper.forEach((val, index) => {
    arr[index + left] = val;
  })
}

// @lc code=end



/*
// @lcpr case=start
// [5,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [5,1,1,2,0,0]\n
// @lcpr case=end

 */

