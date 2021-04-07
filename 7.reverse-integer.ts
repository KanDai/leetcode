/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
    // 0の場合は0を返却
    if (x === 0) return 0

    // 値が負の場合は正の整数に変換
    const num = x > 0 ? x : x * -1
    // 配列に変換
    const strArray = String(num).split('')
    // 変換した配列をリバース
    const reversedStr = Number(strArray.reverse().join(''))
    // 元の値が負の場合は負の整数に戻す
    const result = x > 0 ? reversedStr : reversedStr * -1

    // 32ビット符号付き整数に治らない場合は0を返却
    if (
        result < Math.pow(-2, 31) ||
        result > Math.pow(2, 31) - 1
    )
        return 0

    return result
};
// @lc code=end

