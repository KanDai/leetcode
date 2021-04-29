/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return nums.length

    let i = 0

    while (i < nums.length - 1) {

        if (nums[i] === nums[i+1]) {
            nums.splice(i, 1)
            i = 0
            continue
        }

        i++
    }

    return nums.length
};
// @lc code=end
