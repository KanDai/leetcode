/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    const obj: {
        [key: string]: number
    } = {}
    let max = 0
    let resultKey = ''

    for (let i = 0; i < nums.length; i++) {
        const key = String(nums[i])
        if (obj.hasOwnProperty(key)) {
            obj[key]++
        } else {
            obj[key] = 1
        }

        if (obj[key] > max) {
            max = obj[key]
            resultKey = key
        }
    }

    return Number(resultKey)
};
// @lc code=end

export { majorityElement }