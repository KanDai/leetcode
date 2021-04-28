/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
    if (s === '') return ''

    const sArr = s.split('')
    let result = sArr[0]

    for (let i = 0; i < sArr.length; i++) {
        if (result.length > sArr.length - i) break

        const str = s.substr(i, s.length - i)

        for (let j = 0; j < sArr.length; j++) {
            const cropedStr = str.substr(0, str.length - j)

            if (str[0] !== cropedStr.substr(-1, 1)) continue

            if (cropedStr === cropedStr.split('').reverse().join('')) {
                if (cropedStr.length > result.length) {
                    result = cropedStr
                }
                break
            }
        }
    }

    return result
};
// @lc code=end

// console.log(longestPalindrome('cbbdnclkwdnfk'))

export { longestPalindrome }
