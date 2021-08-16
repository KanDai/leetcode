import { containsDuplicate } from '../src/217.contains-duplicate'

test('217: case 1', () => {
    expect(containsDuplicate([1,2,3,1])).toBe(true)
})

test('217: case 2', () => {
    expect(containsDuplicate([1,2,3,4])).toBe(false)
})

test('217: case 3', () => {
    expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true)
})
