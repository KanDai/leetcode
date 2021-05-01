import { searchInsert } from '../src/35.search-insert-position'

test('35: case target 5', () => {
    expect(searchInsert([1,3,5,6], 5)).toBe(2)
})

test('35: case target 2', () => {
    expect(searchInsert([1,3,5,6], 2)).toBe(1)
})

test('35: case target 7', () => {
    expect(searchInsert([1,3,5,6], 7)).toBe(4)
})

test('35: case target 0', () => {
    expect(searchInsert([1,3,5,6], 0)).toBe(0)
    expect(searchInsert([1], 0)).toBe(0)
    expect(searchInsert([], 3)).toBe(0)

})

