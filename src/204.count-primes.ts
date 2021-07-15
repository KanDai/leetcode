/*
 * @lc app=leetcode id=204 lang=typescript
 *
 * [204] Count Primes
 */

// @lc code=start
function countPrimes(n: number): number {
    if (n <= 2) return 0

    const arr = [2]

    for (let i = 3; i < n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) break

            if (j + 1 === i) arr.push(i)
        }
    }

    return arr.length
};
// @lc code=end

console.log(countPrimes(499979))

export { countPrimes }
