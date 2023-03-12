class Person {
  readonly name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 类和实例之间的关系(重要)
const p = new Person('zbw', 18);
console.log(p.age, p.name);

// p.name = 'zbw'; 只读属性不能进行写入操作
p.age = 18;

export {};
