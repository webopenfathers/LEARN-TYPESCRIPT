// 1.typeof:使用最多
function printID(id: number | string) {
  //   console.log();
  typeof id === "string" ? console.log(id.length) : console.log(id);
}

// 2.方向类型判断(平等缩小===，!==,==,and!=)
type Direction = "left" | "right" | "up" | "down";
function switchDirection(direction: Direction) {
  if (direction === "left") {
    console.log(direction, "角色向左移动");
  } else if (direction === "right") {
    console.log(direction, "角色向右移动");
  } else if (direction === "up") {
    console.log(direction, "角色向上移动");
  } else {
    console.log(direction, "角色向下移动");
  }
}

// 3.instanceof(判断某个对象是否是某个类的实例)
// 传入日期，打印日期
function printDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.getTime());
  } else {
    console.log(date);
  }
}

// 4.in操作符(判断对象中是否存在某个属性)
interface ISwim {
  swim: () => void;
}

interface IRun {
  run: () => void;
}

function move(animal: ISwim | IRun) {
  if ("swim" in animal) {
    animal.swim();
  } else if ("run" in animal) {
    animal.run();
  }
}

const fish: ISwim = {
  swim: function () {},
};

const dog: IRun = {
  run: function () {},
};

move(fish);
move(dog);
