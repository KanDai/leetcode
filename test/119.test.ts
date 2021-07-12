import { getRow } from '../src/119.pascals-triangle-ii'

test('119: 0', () => {
    expect(getRow(0)).toMatchObject([1]);
})

test('119: 2', () => {
    expect(getRow(2)).toMatchObject([1,2,1]);
})

test('119: 3', () => {
    expect(getRow(3)).toMatchObject([1,3,3,1]);
})

test('119: 4', () => {
    expect(getRow(4)).toMatchObject([1,4,6,4,1]);
})

test('119: 5', () => {
    expect(getRow(5)).toMatchObject([1,5,10,10,5,1]);
})

test('119: 7', () => {
    expect(getRow(7)).toMatchObject([1,7,21,35,35,21,7,1]);
})
