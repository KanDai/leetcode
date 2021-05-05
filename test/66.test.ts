import { plusOne } from '../src/66.plus-one'

test('66: case 1', () => {
    expect(plusOne([1,2,3])).toEqual(expect.arrayContaining([1,2,4]));
})

test('66: case 2', () => {
    expect(plusOne([4,3,2,1])).toEqual(expect.arrayContaining([4,3,2,2]));
})

test('66: case 3', () => {
    expect(plusOne([5,6,7,8,9])).toEqual(expect.arrayContaining([5,6,7,9,0]));
})

test('66: case 4', () => {
    expect(plusOne([0])).toEqual(expect.arrayContaining([1]));
})

test('66: case 5', () => {
    expect(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])).toEqual(expect.arrayContaining([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]));
})

test('66: case 6', () => {
    expect(plusOne([9])).toEqual(expect.arrayContaining([1,0]));
})

test('66: case 7', () => {
    expect(plusOne([9,9,9,9])).toEqual(expect.arrayContaining([1,0,0,0,0]));
})