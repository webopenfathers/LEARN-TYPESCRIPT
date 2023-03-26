interface IKun {
  name: string
  age: number
  slogan?: string
}


// 类型体操
type BWReadonly<T> = {
  readonly [P in keyof T]?: T[P]
}

// IKun都变成只读的
type IkunReadonly = Readonly<IKun>

type IkunReadonly2 = BWReadonly<IKun>

export { }