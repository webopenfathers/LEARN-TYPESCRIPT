class Person {
  // 成员属性：声明成员属性,可以给初始化值
  name!: string; // 用叹号可以不给初始化值
  age = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log(this.name + 'eating');
  }
  running() {
    console.log(this.name + 'running');
  }
}

// 实例对象：instance
const p1 = new Person('zbw', 19);
const p2 = new Person('kobe', 20);

console.log(p1.name, p2.age);

export {};
