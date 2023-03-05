// 方案一：函数类型表达式function type expression
// 格式：(参数列表)=>返回值
type barType = (num1: number) => number;
const bar: barType = (arg: number): number => {
  return 123;
};

bar(333);

export {};
