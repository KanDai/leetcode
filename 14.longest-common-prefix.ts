/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return ''
    let baseStr = strs[0]
    for (let i = 1; i < strs.length; i++) {
        if (baseStr.length > strs[i].length) baseStr = strs[i]
    }
    const baseStrArr = baseStr.split('')
    const patterns: string[] = []
    let tempCommonPrefixs: string[] = []
    for (let i = 0; i < baseStrArr.length; i++) {
        const str = i === 0 ? baseStrArr[i] : patterns[i - 1] + baseStrArr[i]
        patterns.push(str)
        tempCommonPrefixs.push(str)
    }

    strs.splice(strs.indexOf(baseStr), 1)

    for (let sIndex = 0; sIndex < strs.length; sIndex++) {
        tempCommonPrefixs = tempCommonPrefixs.filter(str => {
            return strs[sIndex].indexOf(str) === 0
        })
        if (tempCommonPrefixs.length === 0) return ''
    }

    let result = ''
    for (let i = 0; i < tempCommonPrefixs.length; i++) {
        if (tempCommonPrefixs[i].length > result.length) {
            result = tempCommonPrefixs[i]
        }
    }
    return result
};
// @lc code=end

