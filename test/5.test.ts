import { longestPalindrome } from '../src/5.longest-palindromic-substring'

test('5: case babad', () => {
    expect(longestPalindrome('babad')).toMatch(/bab|aba/)
})

test('5: case cbbd', () => {
    expect(longestPalindrome('cbbd')).toBe('bb')
})

test('5: case a', () => {
    expect(longestPalindrome('a')).toBe('a')
})

test('5: case ac', () => {
    expect(longestPalindrome('ac')).toBe('a')
})