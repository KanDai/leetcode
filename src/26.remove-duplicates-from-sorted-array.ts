/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return nums.length

    let flag = true

    while (flag) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[i+1]) {
                nums.splice(i, 1)
                break
            }

            if (i === nums.length - 1) {
                flag = false
            }
        }
    }

    return nums.length
};
// @lc code=end

