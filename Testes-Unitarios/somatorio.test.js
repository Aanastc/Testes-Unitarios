const sum = require('./somatorio')

describe('math functions', () => {
    describe('math functions', () => {
        it('sums 2 numbers', () => {
            expect(sum(1, 2)).not.toBe(4)
        })
        it('sums 2 numbers', () => {
            expect(sum(1, 2)).toBe(3)
        })
    })
})