/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    if (!nums.length) return 0

    let position = nums.indexOf(target)

    if (position > -1) return position

    for (let i = 0; i < nums.length; i++) {
        if (target > nums[i]) continue

        position = i
        break
    }

    if ( position === -1) position = nums.length

    return position
};
// @lc code=end

export { searchInsert }