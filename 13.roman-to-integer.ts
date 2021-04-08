/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
    let res = 0
    const arr = s.split('')
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    for (let i = 0; i < arr.length; i++) {
        if (
            arr[i] === 'I' && arr[i + 1] === 'V' ||
            arr[i] === 'I' && arr[i + 1] === 'X' ||
            arr[i] === 'X' && arr[i + 1] === 'L' ||
            arr[i] === 'X' && arr[i + 1] === 'C' ||
            arr[i] === 'C' && arr[i + 1] === 'D' ||
            arr[i] === 'C' && arr[i + 1] === 'M'
        ) {
            res += map[arr[i + 1]] - map[arr[i]]
            i++
        } else {
            res += map[arr[i]]
        }
    }

    return res
};
// @lc code=end

