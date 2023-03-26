// 移除掉null和undefined类型

type IKun = 'sing' | 'dance' | "rap" | null | undefined


// 类型体操
type BWNonNullable<T> = T extends null | undefined ? never : T




type Ikuns = NonNullable<IKun>

type Ikuns2 = BWNonNullable<IKun>



export { }