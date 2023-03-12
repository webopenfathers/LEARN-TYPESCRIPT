class Person {
  // 语法糖
  constructor(
    public name: string,
    private _age: number,
    readonly height: number
  ) {}

  running() {
    console.log(this._age, 'eating');
  }

  // getter/setter
  set age(newVal) {
    this._age = newVal;
  }

  get age() {
    return this._age;
  }
}
const p = new Person('zbw', 18, 1.88);
console.log(p.name, p.height, p.age); // zbw

// p.height = 1.98;

export {};
