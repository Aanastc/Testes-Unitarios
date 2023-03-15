const ordernar = require('./ordenacao');

describe('math functions', () => {
    it('ordenar', () => {
        expect(ordernar([72,10,22,45,88])).toEqual([10, 22, 45, 72, 88])
    })
    it('ordenar', () => {
        expect(ordernar([72,10,22,45,88])).not.toEqual([45,22,72,10,88])
    })
})