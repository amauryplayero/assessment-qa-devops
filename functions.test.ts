const {shuffleArray} = require('./utils')

describe('shuffleArray should return an array', () => {
    // CODE HERE
    test('function is called', ()=> {
    // expect(shuffleArray([1,2,3,4])).toHaveReturnedWith([])
    expect(shuffleArray([1,2,3,4])).not.toBe([1,2,3,4])
    expect(typeof shuffleArray([1,2,3,4])).toBe('object')

    })
})