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

    strs.splice(strs.indexOf(baseStr), 1)

    let tempCommonPrefix: string[] = []

    for (let strsIndex = 0; strsIndex < strs.length; strsIndex++) {
        const commonPrefixArr = []
        for (let baseStrPosition = 0; baseStrPosition < baseStrArr.length; baseStrPosition++) {
            if (strs[strsIndex].indexOf(baseStrArr[baseStrPosition]) > -1) {
                let commonPrefix = baseStrArr[baseStrPosition]

                commonPrefixArr.push(commonPrefix)
                for (let nextStr = baseStrPosition + 1; nextStr < baseStrArr.length; nextStr++) {
                    if(strs[strsIndex].indexOf((commonPrefix + baseStrArr[nextStr])) > -1) {
                        commonPrefix = commonPrefix + baseStrArr[nextStr]
                        commonPrefixArr.push(commonPrefix)
                    } else {
                        break
                    }
                }
            }
        }

        if (tempCommonPrefix.length === 0) {
            tempCommonPrefix = commonPrefixArr
        } else {
            tempCommonPrefix = commonPrefixArr.filter(str => {
                return tempCommonPrefix.includes(str)
            })
        }
    }

    if (tempCommonPrefix.length === 0) return ''

    let result = ''
    for (let i = 0; i < tempCommonPrefix.length; i++) {
        if (tempCommonPrefix[i].length > result.length) {
            result = tempCommonPrefix[i]
        }
    }
    return result
};
// @lc code=end

