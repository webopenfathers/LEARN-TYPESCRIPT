// 泛型的默认值
interface IKun<T = string> {
  name: T;
  age: number;
  slogan: T;
}

const kun1: IKun<string> = {
  name: 'zbw',
  age: 18,
  slogan: '333',
};

const kun2: IKun<number> = {
  name: 444,
  age: 18,
  slogan: 999,
};

// 泛型的默认值
const kun3: IKun = {
  name: 'kobe',
  age: 18,
  slogan: '困困加油',
};

export {};
