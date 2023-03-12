interface ICollection {
  // 索引签名---通过索引访问，并且返回string类型
  [index: number]: string;

  length: number;
}

const names: string[] = ['abc', 'cba', 'nba'];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

function iterator(collection: ICollection) {
  console.log(collection[0]);
  console.log(collection[1]);
}
iterator(names);

const tuple: [string, string] = ['zbw', '18'];
iterator(tuple);

iterator({ [1]: 'zbw', [99]: '18', length: 28 });

export {};
