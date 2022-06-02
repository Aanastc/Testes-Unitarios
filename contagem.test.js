const notas = require('./contagem');

describe('math functions', () => {
    it('contagem', () => {
        expect(contagem(10,3)).toEqual(10)
    })
    it('contagem', () => {
        expect(contagem(2,3)).toEqual(5)
    })
})