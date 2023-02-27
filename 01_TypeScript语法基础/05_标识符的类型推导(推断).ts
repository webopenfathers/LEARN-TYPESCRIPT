// 声明一个标识符时，如果有直接赋值，会根据赋值的类型推导出标识符的类型注解
// 这个过程称之为类型推导
// 注意：
// let 进行类型推导，推导出来的是通用类型
// const 进行类型推导，推导出来的是字面量类型（后续专门讲解）
let name = "zbw";
let age = 18;
const height = 1.88;
const message: "Hello" = "Hello";

// name = 566;

export {};
