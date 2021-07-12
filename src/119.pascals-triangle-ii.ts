/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
    let res = [1]
    let i = 0

    while (i < rowIndex) {
        const arr = []
        for (let j = 0; j < res.length; j++) {
            if (j === 0) {
                arr.push(res[j])
            } else {
                arr.push(res[j] + res[j - 1])
            }
            if (j === res.length - 1) {
                arr.push(res[j])
            }
        }
        res = arr
        i++
    }

    return res
};
// @lc code=end

// console.log(getRow(0))
// console.log(getRow(1))
// console.log(getRow(2))
// console.log(getRow(3))
// console.log(getRow(5))
// console.log(getRow(8))

export { getRow }