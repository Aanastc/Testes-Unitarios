const notas = require('./contagem');

describe('math functions', () => {
    it('contagem', () => {
        expect(notas([50,50])).toEqual(2)
    })
    it('contagem', () => {
        expect(notas([50,1])).toEqual(1)
    })
})