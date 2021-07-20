const Rectangle = require('../EX-1/rectangle');

describe('area of rectangle', () => {
    const rectangle = new Rectangle(10, 20);
    it('should calculate total area 200 of a reactangle with length=10 and width=20', () => {
        const result = rectangle.area();
        expect(result).toBe(200);
    })
    it('should calculate total perimeter 60 of a reactangle with length=10 and width=20', () => {
        const result = rectangle.perimeter();
        expect(result).toBe(60);
    })
});