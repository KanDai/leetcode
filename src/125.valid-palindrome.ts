/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    if (s === '') return false

    const matches = s.toLowerCase().match(/[0-9a-z]*/g)
    const filterdStr = matches?.join('')

    return filterdStr === filterdStr.split('').reverse().join('') ? true : false
};
// @lc code=end

// isPalindrome('A man, a plan, a canal: Panama')
// isPalindrome('')

export { isPalindrome }