// Omit:
// 用于构造一个类型，它是从Type类型里面过滤了一些属性Keys

interface IKun {
  name: string
  age: number
  slogan?: string
}


// 类型体操
type BWOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}



// 去除某些属性
type Ikuns = Omit<IKun, 'name' | 'slogan'>

type Ikuns2 = BWOmit<IKun, 'name' | 'slogan'>



export { }