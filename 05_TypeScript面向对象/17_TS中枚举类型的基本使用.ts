// 定义枚举类型
enum Direction {
  UP,
  LEFT,
  RIGHT,
}

const d1: Direction = Direction.UP;

function turnDirection(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log('角色向左移动一个格子');
      break;
    case Direction.RIGHT:
      console.log('角色向右移动一个格子');
      break;
    default:
      break;
  }
}

// 监听键盘的点击

turnDirection(Direction.LEFT);

export {};
