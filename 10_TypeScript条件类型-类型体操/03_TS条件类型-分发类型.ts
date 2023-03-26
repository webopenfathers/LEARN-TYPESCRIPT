// 当在泛型中使用条件类型的时候,如果传入一个联合类型,就会变成分发的

type toArray<T> = T extends any ? T[] : never


type NumArray = toArray<number> // number[]


// number[] / string[] 而不是(number|string)[]
type NumAndStrArray = toArray<number | string> // number[] | string[]