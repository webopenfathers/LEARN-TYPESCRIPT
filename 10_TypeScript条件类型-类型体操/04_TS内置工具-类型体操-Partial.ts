interface IKun {
  name: string
  age: number
  slogan?: string
}


// 类型体操
type BWPartial<T> = {
  [P in keyof T]?: T[P]
}

// IKun都变成 可选的
// type IkunOptional = Partial<IKun>

type IkunOptional = BWPartial<IKun>