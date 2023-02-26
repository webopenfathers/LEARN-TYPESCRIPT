function getLength(args) {
  return args.length;
}

// 调用函数
console.log(getLength("aaaa"));
console.log(getLength(["abc", "cba", "bbb"]));

console.log(getLength(123));
console.log(getLength());
