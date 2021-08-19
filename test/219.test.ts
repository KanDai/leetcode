import { containsNearbyDuplicate } from '../src/219.contains-duplicate-ii'

test('219: case 1', () => {
    expect(containsNearbyDuplicate([1,2,3,1], 3)).toBe(true)
})

test('219: case 2', () => {
    expect(containsNearbyDuplicate([1,0,1,1], 1)).toBe(true)
})

test('219: case 3', () => {
    expect(containsNearbyDuplicate([1,2,3,1,2,3], 2)).toBe(false)
})
