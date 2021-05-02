import { strStr } from '../src/28.implement-str-str'

test('3: case 1', () => {
    expect(strStr('hello', 'll')).toBe(2)
})

test('3: case 2', () => {
    expect(strStr('aaaaa', 'bba')).toBe(-1)
})

test('3: case 3', () => {
    expect(strStr('', '')).toBe(0)
})
