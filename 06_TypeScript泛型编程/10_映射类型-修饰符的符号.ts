type MapIPerson<T> = {
  -readonly [Property in keyof T]-?: T[Property]; // 全部都是可选和只读属性
};

interface IPerson {
  name: string;
  age?: number;
  readonly height: number;
  address?: string;
}

// 拷贝出的一份全部都是必选和不是只读的
type IPersonRequired = MapIPerson<IPerson>;

const p: IPersonRequired = {
  name: 'zbw',
  age: 18,
  height: 1.98,
  address: '广州市',
};

export {};
