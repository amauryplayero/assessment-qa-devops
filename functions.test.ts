const {shuffleArray} = require('./utils')

describe('shuffleArray should return an array', () => {
    // CODE HERE
    test('function is called', ()=> {
    expect(Array.isArray(shuffleArray([1,2,3,4]))).toBe(true)
    
    })

    test('function returns random numbers', ()=> {
        
        expect(shuffleArray([1,2,3,4])).not.toBe([1,2,3,4])
        
    
        })

        test('function is a function', ()=> {
        

            expect(typeof shuffleArray).toBe('function')
        
            })
})

