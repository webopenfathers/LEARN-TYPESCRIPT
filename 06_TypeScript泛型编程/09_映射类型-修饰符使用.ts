type MapIPerson<T> = {
  readonly [Property in keyof T]?: T[Property]; // 全部都是可选和只读属性
};

interface IPerson {
  name: string;
  age: number;
  height: number;
  address: string;
}

type IPersonOptional = MapIPerson<IPerson>;

const p: IPersonOptional = {};

export {};
