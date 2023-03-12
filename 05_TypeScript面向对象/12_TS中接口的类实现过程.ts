interface IKun {
  name: string;
  age: number;
  slogan: string;
  playBasketball: () => void;
}

const ikun: IKun = {
  name: 'zbw',
  age: 18,
  slogan: '你干嘛',
  playBasketball() {},
};

interface IRun {
  running: () => void;
}

// 作用：接口被类实现
class Person implements IKun, IRun {
  name: string;
  age: number;
  slogan: string;

  running() {}

  playBasketball() {}
}

const ikun2 = new Person();
const ikun3 = new Person();
const ikun4 = new Person();
console.log(ikun2.age, ikun2.name, ikun2.slogan);
ikun2.playBasketball();
