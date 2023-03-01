// 在定义一个TypeScript中的函数时，都要明确的指定参数的类型

function sum(num1: number, num2: number) {
  return num1 + num2;
}

sum(123, 321);
// sum({}, "321");
// sum('333', "321");

export {};
