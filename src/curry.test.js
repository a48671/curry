const curry = require('./curry');

describe('test curry', () => {

    let summ;

    beforeEach(() => {
        summ = curry((a, b, c, d) => a + b + c + d);
      });

    it('shud be 4', () => {
        expect(summ(1, 1, 1, 1, 1)).toBe(4);
    });

    it('shud be null', () => {
        expect(typeof summ(1, 1, 1)).toBe('function');
    });

    it('shud be 9', () => {
        summ(3, 3, 2)
        expect(summ(1, 1, 1)).toBe(9);
    });
});