// 只有length属性，才不会编写时报错----类型校验
function getLength(args: { length: number }) {
  return args.length;
}

getLength("aaaa");
getLength(["abc", "cba", "nba", 123]);
const info = {
  length: 100,
};

getLength(info);
 
// getLength(123)
// getLength()

export {};
