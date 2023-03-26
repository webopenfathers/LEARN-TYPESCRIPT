class Person { }
class Dog { }


// 类型体操
type BWInstanceType<T extends new (...arg: any[]) => any> = T extends new (...arg: any[]) => infer R ? R : never








const p1: Person = new Person()


// typeof Person：构造函数具体的类型
// InstanceType构造函数创建出来的实例对象的类型
type BWPerson = BWInstanceType<typeof Person>
const p2: BWPerson = new Person()


// 构造函数的例子
// 通用的创建实例的工具函数时会用到
function factory<T extends new (...arg: any[]) => any>(ctor: T): InstanceType<T> {
  return new ctor()
}


const p3 = factory(Person) // Person
const p4 = factory(Dog) // Dog