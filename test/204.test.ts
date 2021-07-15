import { countPrimes } from '../src/204.count-primes'

test('204: case 0', () => {
    expect(countPrimes(0)).toBe(0);
})

test('204: case 1', () => {
    expect(countPrimes(0)).toBe(0);
})

test('204: case 7', () => {
    expect(countPrimes(7)).toBe(3);
})
test('204: case 10', () => {
    expect(countPrimes(10)).toBe(4);
})

test('204: case 30', () => {
    expect(countPrimes(30)).toBe(10);
})

test('204: case 499979', () => {
    expect(countPrimes(499979)).toBe(41537);
})
