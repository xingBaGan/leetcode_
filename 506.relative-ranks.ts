/*
 * @lc app=leetcode.cn id=506 lang=typescript
 * @lcpr version=30204
 *
 * [506] 相对名次
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
// 全为整数，且不重复
function findRelativeRanks(score: number[]): string[] {
  const len = score.length;
  const sequence = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  // 直接转为 index 数组
  const count = [] as number[];
  for (let i = 0; i < len; i++) {
    count[score[i]] = i;
  }

  let number = 1;
  // 此时有序的， 对下标数组进行排序
  for (let i = count.length - 1; i >= 0; i--) {
    // 忽略不在数组中
    if (count[i] !== undefined) {
      // 直接转为
      if (number <= 3) {
        // @ts-ignore
        score[count[i]] = sequence[number - 1];
      } else {
        // @ts-ignore
        score[count[i]] = number + "";
      }
      number++;
    }
  }
  // @ts-ignore
  return score;
};
// @lc code=end



/*
// @lcpr case=start
// [5,4,3,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [10,3,8,9,4]\n
// @lcpr case=end

 */

