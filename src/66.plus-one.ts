/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {

    const res: number[] = []
    let isUp = false

    for (let i = 0; i < digits.length; i++) {
        let num = digits[digits.length - (i + 1)]

        if ((i === 0 || isUp) && num === 9) {
            res.unshift(0)
            isUp = true
            continue
        }

        if (
            i === 0 && num < 9 ||
            isUp && num < 9
        ) {
            res.unshift(num + 1)
            isUp = false
            continue
        }

        res.unshift(num)
        isUp = false
    }

    if (isUp) res.unshift(1)

    return res
};
// @lc code=end

// plusOne([1,2,3])

export { plusOne }