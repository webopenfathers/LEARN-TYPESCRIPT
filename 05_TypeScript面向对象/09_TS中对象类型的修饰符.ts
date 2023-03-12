// 定义对象类型
type IPerson = {
  // 属性?:可选属性
  name: string;
  // readonly:只读属性
  readonly age: number;
};

interface IKun {
  name?: string;
  readonly slogan: string;
}

const p: IPerson = {
  name: 'zbw',
  age: 18,
};

// p.age = 20;
