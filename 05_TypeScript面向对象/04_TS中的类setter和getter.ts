class Person {
  // 私有属性：属性前面加上下划线_。外界访问不到
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  running() {
    console.log('running', this._name);
  }

  // getter/setter：对属性的访问进行拦截操作
  set name(newVal: string) {
    this._name = newVal;
  }

  get name() {
    return this._name;
  }

  // getter/setter：对属性的访问进行拦截操作
  set age(newVal: number) {
    if (newVal >= 0 && newVal < 200) {
      this._age = newVal;
    }
  }

  get age() {
    return this._age;
  }
}

const p = new Person('zbw', 18);
// console.log(p.name);
p.name = 'why';
console.log(p.name);

p.age = -200;
console.log(p.age); // 18

export {};
