const fib = require('./fibonacci');

describe('math functions', () => {
    it('fibonacci', () => {
        expect(fib(10)).toEqual(10)
    })
    it('fibonacci', () => {
        expect(fib(10)).toEqual(0)
    })
})