abstract class Shape {
  //getArea方法只有声明没有实现体
  // 实现体让子类自己实现
  // 可以将getArea定义为抽象方法：在方法的前面加abstract
  // 抽象方法必须出现在抽象类中，类的前面需要加上abstract
  abstract getArea();

  // abc() {}
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }
  getArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}

class Triangle extends Shape {
  getArea() {
    return 100;
  }
}

// 通用的函数
function calcArea(shape: Shape) {
  return shape.getArea();
}

calcArea(new Rectangle(10, 20));
calcArea(new Circle(5));
calcArea(new Triangle());

// 抽象类不能被实例化
// 抽象方法必须被子类实现，否则该类必须是一个抽象类
// calcArea(new Shape());
