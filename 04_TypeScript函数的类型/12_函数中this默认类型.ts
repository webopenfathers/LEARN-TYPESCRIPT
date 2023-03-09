// 在没有对TS进行特殊配置的情况下，this是any类型

// 1.对象中的函数的this
const obj = {
  name: "why",
  studying: function () {
    // 默认情况下，this是any类型
    console.log(this.name, "studying");
  },
};
obj.studying();
// 2.普通函数
function foo() {
  console.log(this);
}

export {};
