type CalcType = (num1: number, num2: number) => number;

// js实现案例：
function calc(calcFn: CalcType) {
  const num1 = 10;
  const num2 = 20;

  const res = calcFn(num1, num2);
  console.log(res);
}

// 2.函数调用

function add(num1: number, num2: number) {
  return num1 + num2;
}

function foo(num1: string) {
  return num1;
}

calc(add);
// calc(foo);

function mul(num1: number, num2: number) {
  return num1 * num2;
}
calc(mul);

// 3.使用匿名函数
calc(function (num1, num2) {
  return num1 + num2;
});

export {};
