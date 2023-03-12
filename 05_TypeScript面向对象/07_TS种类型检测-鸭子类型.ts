// TypeScript对于类型检测的时候使用的是鸭子类型
// 鸭子类型：如果一只鸟，走起来像鸭子,游起来像鸭子，看起来象鸭子
// 鸭子类型，只关心属性和行为，不关心具体的类型
class Person {
  constructor(public name: string, public age: number) {}
}

class Dog {
  constructor(public name: string, public age: number) {}
}

function printPerson(p: Person) {
  console.log(p.age, p.name);
}

printPerson(new Person('zbw', 19));
// printPerson('abc');

// 鸭子类型
printPerson({ name: 'zbw', age: 18 });
printPerson(new Dog('旺财', 3));

export {};
