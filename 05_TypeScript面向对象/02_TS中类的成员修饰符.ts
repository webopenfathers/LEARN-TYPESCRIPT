class Person {
  // protected：修饰仅在类自身及子类中可见，受保护的属性或方法
  protected name: string;
  // private：修饰的是仅在同一类中可见，私有的属性或者方法
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // 方法变成私有方法：只能在类内部才能访问
  private eating() {
    console.log('吃东西', this.age, this.name);
  }
}

const p = new Person('why', 18);
// console.log(p.name, p.age);
// p.name = 'kobe';
// p.eating();

// 子类中是否可以访问
class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age);
  }
  studying() {
    console.log('在学习', this.name);
  }
}

const stu = new Student('zbw', 18);
