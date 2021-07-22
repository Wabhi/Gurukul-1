const Rectangle = require('./rectangle');
const Square = require('./square');

describe('area of squar', () => {
    const square = Rectangle.createSquare(5);

    it('should calculate total area 200 of squar when side is 10', () => {
        const result = square.area();
        expect(result).toBe(25);
    })
    
})