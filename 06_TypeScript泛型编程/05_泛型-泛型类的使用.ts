class Point<T = number> {
  x: T;
  y: T;
  constructor(x: T, y: T) {
    this.x = x;
    this.y = y;
  }
}

const p1 = new Point(10, 20);
const p2 = new Point('10', '20');

export {};
