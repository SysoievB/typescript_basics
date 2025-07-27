abstract class Figure {
    abstract name: string;
    abstract getArea(): number;
}

class Rectangle extends Figure {
    constructor(
        public name: string,
        public x: number,
        public y: number,
        public width: number,
        public height: number
    ) {
        super();
    }

    getArea(): number {
        return this.width * this.height;
    }
}

let someFigure: Figure = new Rectangle("Rectangle", 10, 10, 20, 25);
console.log("area =", someFigure.getArea()); // area = 500
