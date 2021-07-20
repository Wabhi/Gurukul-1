const Squar = require('../EX-1/squar');

describe('area of squar', () => {
    const squar = new Squar(10);
    it('should calculate total area 200 of squar when side is 10', () => {
        const result = squar.area();
        expect(result).toBe(100);
    })
})
