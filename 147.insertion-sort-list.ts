/*
 * @lc app=leetcode.cn id=147 lang=typescript
 * @lcpr version=30204
 *
 * [147] 对链表进行插入排序
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

// Definition for singly-linked list.
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }

function insertionSortList(head: ListNode | null): ListNode | null {
    // 如果为空列表
    if (head === null) {
        return head;
    }
    // 增加一个dumpHead 节点，为了操作的一致性
    const dumpHead = new ListNode(0);
    dumpHead.next = head;

    // 初始化有序尾节点,指针, 从head 开始
    let lastSored = head;
    // curr 表示要插入的节点
    let curr = head.next;
    // 遍历到结尾
    while(curr !== null) {
        // 如果有序
        if(lastSored.val <= curr.val) {
            // 更新有序节点, 往后移动
            lastSored = lastSored.next;
        } else {
            let prev = dumpHead;
            // 找到山峰
            while (prev.next && (prev.next)!.val<= curr.val ) {
                // 移动prev
                prev = prev.next;
            }
            // 删除curr 节点
            lastSored.next = curr.next;
            // 将curr 节点插入到prev 节点之后
            curr.next = prev.next;
            prev.next = curr;
        }
        // @ts-ignore
        curr = lastSored.next;
    }
    return dumpHead.next;
};
/**
 * 有序的 lastSorted <= curr
 * curr 的初始值为 head.next
 */
// @lc code=end



/*
// @lcpr case=start
// [4,2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [-1,5,3,4,0]\n
// @lcpr case=end

 */

