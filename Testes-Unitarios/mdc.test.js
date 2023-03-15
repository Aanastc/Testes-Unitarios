const {mdc, mdcLista} = require('./mdc.js');

describe('mdc', () => {
    it('mdc', () => {
        expect(mdc(160, 32, 26)).not.toEqual(160, 32, 26);
    })
})

describe('mdc', () => {
    it('mdc', () => {
        expect(mdcLista([4,2])).toEqual(2);
    })
})