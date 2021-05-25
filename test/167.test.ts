import { twoSum } from '../src/167.two-sum-ii-input-array-is-sorted'

test('167: case 1', () => {
    expect(twoSum([2,7,11,15], 9)).toEqual(expect.arrayContaining([1,2]));
})

test('167: case 2', () => {
    expect(twoSum([2,3,4], 6)).toEqual(expect.arrayContaining([1,3]));
})

test('167: case 3', () => {
    expect(twoSum([-1,0], -1)).toEqual(expect.arrayContaining([1,2]));
})