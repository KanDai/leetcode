/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
    let res = [[1]]
    let i = 0

    while (i < numRows - 1) {
        const arr = []
        for (let j = 0; j < res[i].length; j++) {
            if (j === 0) {
                arr.push(res[i][j])
            } else {
                arr.push(res[i][j] + res[i][j - 1])
            }
            if (j === res[i].length - 1) {
                arr.push(res[i][j])
            }
        }
        res.push(arr)
        i++
    }

    return res
};
// @lc code=end

// console.log(generate(5))

export { generate }