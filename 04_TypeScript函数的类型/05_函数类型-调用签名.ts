// 1.函数类型表达式
type BarType = (num1: number) => number;

// 2.函数的调用签名(从对象的角度来看待这个函数，也可以有其他属性)
interface IBar {
  name: string;
  age: number;
  // 函数是可以调用的：函数调用签名
  // (参数列表):返回值类型
  (num1: number): number;
}

const bar: IBar = (num1: number) => {
  return 123;
};

bar.name = "zbw";
bar.age = 18;
bar(222);

// 开发中如何选择：
// 1.如果只是描述函数本身(函数可以被调用)，使用函数类型表达式(Function Type Expression)
// 2.如果在描述函数可以作为都西昂被调用，同时也有其他属性时，使用函数调用签名。 
export { };
