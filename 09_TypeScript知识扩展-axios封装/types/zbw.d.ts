// 声明loadsh模块
declare module 'loadsh' {
  // 里面是各种方法
  export function join(...arg: any[]): any
}


// 为自己的 变量/函数/类 定义类型声明
declare const zbwName: string
declare const zbwHeight: number
declare const zbwAge: number

declare function foo(bar: string): string

declare class Person {
  constructor(public name: string, public age: number)
}


// 作为第三方库为其他开发者提供类型声明文件 .d.ts => axios.d.ts


// 声明文件模块
declare module "*.jpg"
declare module "*.png"
declare module "*.jpeg"
declare module "*.svg"

declare module '*.vue'


// cdn如何声明
// 声明成命名空间
declare namespace $ {
  export function ajax(settings: any): any
}


