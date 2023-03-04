// 保存个人信息：why 18 1.88
// 1.使用数组
// 不合适：数组中最好存放相同的数据类型，获取值之后不能明确的知道对应的数据类型
const info1: any[] = ["zbw", 18, 1.88];
const value = info1[2];
console.log();

// 2.使用对象类型(最多)
const info2 = {
  name: "zbw",
  age: 18,
  height: 1.88,
};

// 3.使用元组类型
// 元组数据类型中可以存放不同的数据类型，取出来的item也是有明确的类型
const info3: [string, number, number] = ["zbw", 18, 1.88];
const value2 = info3[2];

// 在函数中使用元组类型是最多的(函数的返回值)
function useState(initialState: any): [number, (newVal: number) => void] {
  let stateValue = initialState;

  function setValue(newVal: number) {
    stateValue = newVal;

    // 重新渲染组件
  }

  return [stateValue, setValue];
}

const [count, setCount] = useState(10);

setCount(100);

export {};
