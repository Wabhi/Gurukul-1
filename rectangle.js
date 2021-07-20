class Rectangle{
    //initialize constructor................
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    //area of rectangle.......................
    area() {
        return this.length * this.width;
    }

    //perimeter of rectangle..................
    perimeter() {
        return 2 * (this.length + this.width);
    }
}
module.exports = Rectangle;