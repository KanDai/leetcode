/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
    if (nums.length === 1) return nums[0]

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j) continue
            if (nums[i] === nums[j]) break

            if (
                i === nums.length - 1 ||
                j === nums.length - 1
            ) {
                return nums[i]
            }
        }
    }

    return nums[0]
};
// @lc code=end

// singleNumber([1,0,1])

export { singleNumber }

