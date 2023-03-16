// 定义枚举类型
// 默认值：
// enum Direction {
//   LEFT = 0,
//   RIGHT = 1,
// }

// 设置值数字类型--默认递增
// enum Direction {
//   LEFT = 100,
//   RIGHT,
// }

// 设置字符串类型
enum Direction {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

enum Operation {
  READ = 1 << 0,
  WRITE = 1 << 1,
  FOO = 1 << 2,
}

const d1: Direction = Direction.LEFT;

// 监听键盘的点击

export {};
