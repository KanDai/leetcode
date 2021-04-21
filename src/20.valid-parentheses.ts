/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    const sArr = s.split('')
    // 偶数じゃなかったら即false
    if (sArr.length % 2 !== 0) return false

    // 左辺のブラケットを定義
    const lBrackets = ['(', '{', '[']

    while (sArr.length > 0) {
        const startTimeLength = sArr.length

        // 左辺のブラケットじゃなかったら終了
        if (!lBrackets.includes(sArr[0])) break

        for (let i = 0; i <= sArr.length; i++) {
            // 次に来る文字が左辺のブラケットだったら次へ
            if ( lBrackets.includes(sArr[i+1]) )
                continue

            // ブラケットのペアが成立したら成立した分を取り除く
            if (
                (sArr[i] === '(' && sArr[i+1] === ')') ||
                (sArr[i] === '{' && sArr[i+1] === '}') ||
                (sArr[i] === '[' && sArr[i+1] === ']')
            ) {
                sArr.splice(i, 2)
                break
            }
        }

        // ループの間にペアができてなかったら終了
        if (startTimeLength === sArr.length) break
    }

    // ブラケットが全てペアになっていたらtrue
    return sArr.length === 0 ? true : false
};
// @lc code=end

