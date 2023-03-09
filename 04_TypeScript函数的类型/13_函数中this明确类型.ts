// 当我们设置配置选项(编译选项compilerOptions,noImplicitThis设置为true，不允许模糊的this存在)

// 1.对象中的函数的this
const obj = {
  name: "why",
  studying: function () {
    // 默认情况下，this是any类型
    console.log(this.name.length, "studying");
  },
};
obj.studying();

// 2.普通函数
function foo(this: { name: string }) {
  console.log(this);
}

foo.call({ name: "zbw" });

export {};
