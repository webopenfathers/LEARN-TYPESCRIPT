// interface IPerson {
//   name: string;
//   age: number;
//   height: number;
// }

// const p: IPerson = {
//   name: 'zbw',
//   age: 18,
//   height: 1.88,
// };

// 1.索引签名的理解
interface InfoType {
  // 索引签名：可以通过字符串索引，去获取到一个值，值也是字符串
  [key: string]: string;
}

function getInfo(): InfoType {
  const abc: any = '哈哈哈哈';
  return abc;
}

const info = getInfo();
const name = info['name'];
console.log(name);

// 2.索引签名的案例
interface ICollection {
  [index: number]: string;
  length: number;
}
function printCollection(collection: ICollection) {
  for (let index = 0; index < collection.length; index++) {
    const item = collection[index];
    console.log(item.length);
  }
}

const array = ['abc', 'cba', 'nba'];
const tuple: [string, string] = ['zbw', '南京'];

printCollection(array);
printCollection(tuple);

export {};
