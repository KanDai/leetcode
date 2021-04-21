import { lengthOfLongestSubstring } from '../src/3.longest-substring-without-repeating-characters'

test('3: case abcabcbb', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
})

test('3: case bbbbb', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
})

test('3: case pwwkew', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
})

test('3: case ""', () => {
    expect(lengthOfLongestSubstring('')).toBe(0)
})