// 传入的key的类型，obj当中key的其中之一
interface IKun {
  name: string;
  age: number;
}

type IKunKeys = keyof IKun; // 'name'|'age'

function getObjectProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const info = {
  name: 'zbw',
  age: 18,
  height: 1.98,
};

const name = getObjectProperty(info, 'name');

export {};
