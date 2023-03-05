// TypeScript对于传入的函数类型的多余的参数会被忽略掉(校验)
type CalcType = (num1: number, num2: number) => number;
function calc(calcFn: CalcType) {
  calcFn(10, 20);
}

calc(function (num1, num2) {
  return 123;
});

// forEach例子：
const names = ["abc", "cba", "nba"];
names.forEach((item) => {
  console.log(item.length);
});

// TS对于很多类型的检测报不报错，取决于它内部规则
// TS版本在不断的更新：在进行合理的类型检测的情况，让ts同时更好用
// 举个例子：
interface IPerson {
  name: string;
  age: number;
}

const p = {
  name: "zbw",
  age: 18,
  height: 1.88,
  address: "广州市",
};

const info: IPerson = p;

export {};
