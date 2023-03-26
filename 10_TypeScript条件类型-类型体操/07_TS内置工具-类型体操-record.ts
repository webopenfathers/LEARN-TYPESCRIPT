interface IKun {
  name: string
  age: number
  slogan?: string
}


// 类型体操
// 确保keys一定是可以作为key的联合类型
type Res = keyof any // => number|string|symbol
type BWRecord<keys extends Res, T> = {
  [P in keys]: T
}

//
type t1 = '上海' | '北京' | '洛杉矶'
type Ikun2 = Record<t1, IKun>
type Ikun3 = BWRecord<t1, IKun>

const ikuns: Ikun2 = {
  '上海': {
    name: 'xxx',
    age: 18
  },
  '北京': {
    name: 'yyy',
    age: 5
  },
  '洛杉矶': {
    name: 'zzz',
    age: 3
  }
}

export { }