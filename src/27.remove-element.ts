/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    let idx = nums.indexOf(val)

    while (idx != -1) {
        nums.splice(idx, 1)

        idx = nums.indexOf(val)
    }

    return nums.length
};
// @lc code=end

// const nums = [3,2,2,3]
// console.log(removeElement(nums, 3))
// console.log(nums)

// const nums2 = [0,1,2,2,3,0,4,2]
// console.log(removeElement(nums2, 2))
// console.log(nums2)

export { removeElement }