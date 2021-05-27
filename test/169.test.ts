import { majorityElement } from '../src/169.majority-element'

test('169: case 1', () => {
    expect(majorityElement([3,2,3])).toBe(3);
})

test('169: case 2', () => {
    expect(majorityElement([2,2,1,1,1,2,2])).toBe(2);
})

test('169: case 3', () => {
    expect(majorityElement([1])).toBe(1);
})