/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [ i + 1, j + 1]
            }
        }
    }
};
// @lc code=end

export { twoSum }

