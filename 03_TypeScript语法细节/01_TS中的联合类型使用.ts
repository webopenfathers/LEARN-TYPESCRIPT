// 1.联合类型的基本上hi用
// let foo: string | number = "123";
// foo = 123;

// 使用的时候要特别小心
// if (typeof foo === "string") {
//   console.log(foo.length);
// }

// 2.举个例子:打印id
function printID(id: number | string) {
  console.log("您的ID：", id);

  // 类型缩小
  typeof id === "string" ? console.log(id.length) : console.log(id);
}

printID("abc");
printID(123);
