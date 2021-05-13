import { singleNumber } from '../src/136.single-number'

test('136: case 1', () => {
    expect(singleNumber([2,2,1])).toBe(1)
})

test('136: case 2', () => {
    expect(singleNumber([4,1,2,1,2])).toBe(4)
})

test('136: case 3', () => {
    expect(singleNumber([4,1,2,1,2,4,7])).toBe(7)
})

test('136: case 4', () => {
    expect(singleNumber([1])).toBe(1)
})

test('136: case 5', () => {
    expect(singleNumber([1,0,1])).toBe(0)
})
