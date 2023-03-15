const fib = require('./fibonacci');

describe('math functions', () => {
    it('fibonacci', () => {
        expect(fib(5)).toEqual([0, 1, 1, 2, 3, 5, 8])
    })
    it('fibonacci', () => {
        expect(fib(3)).toEqual([0, 1, 1, 2, 3])
    })
})