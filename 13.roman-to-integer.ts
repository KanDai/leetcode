/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
    let res = 0
    const arr = s.split('')

    const getRomanInt = (s: string): number => {
        if (s === 'I') return 1
        if (s === 'V') return 5
        if (s === 'X') return 10
        if (s === 'L') return 50
        if (s === 'C') return 100
        if (s === 'D') return 500
        if (s === 'M') return 1000
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
            res += getRomanInt(arr[i + 1]) - getRomanInt(arr[i])
            i++
        } else {
            res += getRomanInt(arr[i])
        }
    }

    return res
};
// @lc code=end

