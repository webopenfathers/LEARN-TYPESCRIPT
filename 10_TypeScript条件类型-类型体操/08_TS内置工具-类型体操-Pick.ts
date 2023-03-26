interface IKun {
  name: string
  age: number
  slogan?: string
}


// 类型体操
// 确保keys一定是可以作为key的联合类型
type Res = keyof any // => number|string|symbol
type BWPick<T, K extends keyof T> = {
  [P in K]: T[P]
}



// 挑选出某些属性
type Ikuns = Pick<IKun, 'name' | 'slogan'>

type Ikuns2 = BWPick<IKun, 'name' | 'slogan'>



export { }