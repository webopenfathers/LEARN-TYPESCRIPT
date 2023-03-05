function foo(...args: (string | number)[]) {
  console.log(args); // 是一个数组[123,321]  ['abc',321,'cba']
}

foo(123, 321);
foo("abc", 321, "cba");
