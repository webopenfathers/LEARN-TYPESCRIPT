// 回顾：联合类型
// type ID = number | string;

// let id1: ID = 123;
// let id1: ID = "8888";

// 交叉类型：两种(多种)类型同时满足,使用符号&
type NewType = number & string; // 没有意义never类型

// 通常是对对象类型进行交叉
interface IKun {
  name: string;
  age: number;
}

interface ICoder {
  name: string;
  coding: () => void;
}

type InfoType = IKun & ICoder;

const info: InfoType = {
  name: "zbw",
  age: 18,
  coding: () => {
    console.log("coding");
  },
};

export {};
