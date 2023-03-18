interface ILength {
  length: number;
}

// 1.getLength没有没必要用泛型
function getLength(arg: ILength) {
  return arg.length;
}

const length1 = getLength('677');
const length2 = getLength(['abs', '888', '8888']);
const length3 = getLength({ length: 100 });

// 2.获取传入的内容，这个内容必须有length属性
// Type 相当于是一个变量，用于记录本次调用的类型，所以在整个函数的执行周期中，一直保留着参数的类型
// 通过 extends 关键字来进行泛型约束
function getInfo<T extends ILength>(arg: T): T {
  return arg;
}

const info1 = getInfo('677');
const info2 = getInfo(['abs', '888', '8888']);
const info3 = getInfo({ length: 100 });

// getInfo(9999);
// getInfo({ name: 'zbw' });

export {};
