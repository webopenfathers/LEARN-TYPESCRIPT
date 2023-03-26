interface IKun {
  name: string
  age: number
  slogan?: string
}


// 类型体操
type BWRequired<T> = {
  [P in keyof T]-?: T[P]
}

// IKun都变成必选的
type IkunRequired = Required<IKun>

type IkunRequired2 = BWRequired<IKun>

export { }