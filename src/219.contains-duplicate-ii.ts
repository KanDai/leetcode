/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    for (let i = 0; i < nums.length; i++ ) {
        for (let j = i + 1; j < nums.length; j++ ) {
            if (nums[i] === nums[j] && Math.abs(i - j) <= k)
                return true
        }
    }

    return false
};
// @lc code=end

export { containsNearbyDuplicate }
