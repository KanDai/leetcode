/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let resultStr = (s.length === 1) ? s : ''
    if (resultStr.length === 1)
        return resultStr.length

    const sArr = s.split('')

    for (let i = 0; i < sArr.length; i++) {
        for (let j = i + 1; j <= sArr.length; j++) {
            const temp = s.substring(i, j)

            if (temp.includes(sArr[j])) {
                if (temp.length > resultStr.length)
                    resultStr = temp
                break
            }
            if (j === sArr.length) {
                if (temp.length > resultStr.length)
                    resultStr = temp
            }

        }
    }
    return resultStr.length
};
// @lc code=end

