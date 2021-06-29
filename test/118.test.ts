import { generate } from '../src/118.pascals-triangle'

test('118: 1', () => {
    expect(generate(1)).toEqual(expect.arrayContaining([[1]]));
})

test('118: 3', () => {
    expect(generate(3)).toEqual(expect.arrayContaining([[1],[1,1],[1,2,1]]));
})

test('118: 5', () => {
    expect(generate(5)).toEqual(expect.arrayContaining([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]));
})

test('118: 6', () => {
    expect(generate(5)).toEqual(expect.arrayContaining([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1]]));
})

test('118: 8', () => {
    expect(generate(5)).toEqual(expect.arrayContaining([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1],[1,6,15,20,15,6,1],[1,7,21,35,35,21,7,1]]));
})