// 1.理解形参和实例参数化，但是参数的类型是固定的
// function foo(name, age) {}

// foo('zbw', 18);
// foo('kobe', 19);

// 2.定义函数：将传入的内容返回
function bar<T>(arg: T): T {
  return arg;
}

// 2.1 完整的写法
const res1 = bar<number>(123);
const res2 = bar<string>('abc');
const res3 = bar<{ name: string }>({ name: 'zbw' });

// 2.2 省略的写法---类型推导
let res4 = bar('aaaaaa');
let res5 = bar(11111);

export {};
