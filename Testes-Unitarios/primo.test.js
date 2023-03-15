const primo = require('./primo.js')

describe('math functions', () => {
    it('primo ou nao', () => {
        expect(primo(5)).toBe(true)
    })
    it('primo ou nao', () => {
        expect(primo(4)).toBe(false)
    })
})
