import { removeElement } from '../src/27.remove-element'

test('3: case 1', () => {
    const nums = [3,2,2,3]

    expect(removeElement(nums, 3)).toBe(2)
    expect(nums).toEqual(expect.arrayContaining([2, 2]))
})

test('3: case 2', () => {
    const nums = [0,1,2,2,3,0,4,2]

    expect(removeElement(nums, 2)).toBe(5)
    expect(nums).toEqual(expect.arrayContaining([0,1,4,0,3]))
})
