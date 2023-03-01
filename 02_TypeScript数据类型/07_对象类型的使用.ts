// 1.对象类型的简单回顾
// const info: {
//   name: string;
//   age: number;
// } = {
//   name: "zbw",
//   age: 18,
// };

// 2.对象类型和函数类型结合使用
type PointType = {
  x: number;
  y: number;
  z?: number;
};
function printCoordinate(point: PointType) {
  console.log("x轴坐标", point.x);
  console.log("y轴坐标", point.y);
}

// printCoordinate(123);
printCoordinate({ x: 23, y: 70 });

export {};
