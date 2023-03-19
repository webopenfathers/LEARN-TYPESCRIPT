// TypeScript提供了一种映射类型：函数
// 映射类型不能使用interface定义
type MapPerson<T> = {
  // [index: number]: any;
  // 变量必须是在传过来的类型的属性上面
  // T=IPerson
  // keyof='name'|'age'
  // 索引类型依次进行使用
  [Property in keyof T]: T[Property];
  // name: string;
  // age: number;
};

interface IPerson {
  name: string;
  age: number;
}

// 拷贝一份IPerson
type NewPerson = MapPerson<IPerson>;

export {};
