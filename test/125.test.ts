import { isPalindrome } from '../src/125.valid-palindrome'

test('125: case 1', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
})

test('125: case 2', () => {
    expect(isPalindrome('abcdefgfedcba')).toBe(true)
})

test('125: case 3', () => {
    expect(isPalindrome('a,./@bcdefgfedcba')).toBe(true)
})

test('125: case 4', () => {
    expect(isPalindrome('ab12cdef45g54fedc21ba')).toBe(true)
})

test('125: case 5', () => {
    expect(isPalindrome('race a car')).toBe(false)
})

test('125: case 6', () => {
    expect(isPalindrome('a')).toBe(true)
})

test('125: case 7', () => {
    expect(isPalindrome('ab')).toBe(false)
})

test('125: case 8', () => {
    expect(isPalindrome('')).toBe(false)
})

test('125: case 9', () => {
    expect(isPalindrome(' ')).toBe(true)
})
