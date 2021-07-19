import { isIsomorphic } from '../src/205.isomorphic-strings'

test('205: case 0', () => {
    expect(isIsomorphic('egg', 'add')).toBe(true)
})

test('205: case 1', () => {
    expect(isIsomorphic('foo', 'bar')).toBe(false)
})

test('205: case 2', () => {
    expect(isIsomorphic('paper', 'title')).toBe(true)
})
