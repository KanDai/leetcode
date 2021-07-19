/*
 * @lc app=leetcode id=205 lang=typescript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
    const sArray = s.split('')
    const tArray = t.split('')
    const tempMapping: Record<string, string> = {}
    const strMapping: Record<string, string> = {}

    for ( let i = 0; i < sArray.length;  i++ ) {
        const key = sArray[i]
        tempMapping[key] = tArray[i]
    }

    const keys = Object.keys(tempMapping)

    keys.forEach((key: string) => {
        const newKey = tempMapping[key]
        strMapping[newKey] = key
    })

    const tNewArray = tArray.map((str: string) => strMapping[str] )

    return s === tNewArray.join('')
};
// @lc code=end

// console.log(isIsomorphic('egg', 'add'))
// console.log(isIsomorphic('foo', 'bar'))
// console.log(isIsomorphic('paper', 'title'))

export { isIsomorphic }