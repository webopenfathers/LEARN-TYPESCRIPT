let foo: unknown = "aaa";
foo = 123;
// any类型可以进行任何的操作，做任何操作都是合法的
// unknown类型默认情况下在上面进行任意的操作都是非法的
// 要求必须进行类型的校验(缩小)，才能根据缩小的类型，进行对应的操作
if (typeof foo === "string") {
  // 类型缩小---不报错
  console.log(foo.length);
}

// console.log(foo.length);  报错

export {};
