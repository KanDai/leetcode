/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    if (x < 0) return false

    const strArray = String(x).split('')
    const reversedX = Number(strArray.reverse().join(''))

    return x === reversedX ? true : false
};
// @lc code=end

