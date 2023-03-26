// 在条件类型中推断:
// 条件类型提供了infer 关键词,可以从正在比较的类型中推断类型,然后true分支里引用该推断结果


// 定义一个函数类型并拿到其返回值类型
type CalcFnType = (num1: number, num2: string) => number

function foo() {
  return 'abc'
}

function bar() {
  return function boo() { }
}


// 总结类型体操题目：BwReturnType
// 1. 推断返回值类型
type BwReturnType<T extends (...arg: any[]) => any> = T extends (...arg: any[]) => infer R ? R : never

// 1. 推断参数类型
type BwParameterType<T extends (...arg: any[]) => any> = T extends (...arg: infer A) => any ? A : never


// 获取一个函数的返回值类型：内置工具
type CalcReturnType = BwReturnType<CalcFnType> // number类型
type FooReturnType = BwReturnType<typeof foo> // string类型
type BarReturnType = BwReturnType<typeof bar> // () => void类型
// type FooReturnType2 = BwReturnType<boolean>

type CalcParameterType = BwParameterType<CalcFnType> //  [num1: number, num2: string]

export { }