// 一：声明对象的两种方式

// 类型别名：type
// 赋值的方式
type PointType = {
  x: number;
  y: number;
  z?: number;
};

// 接口：interface
// 声明的方式
interface PointType2 {
  x: number;
  y: number;
  z?: number;
}

function PrintCoordinate(point: PointType2) {}

export {};
