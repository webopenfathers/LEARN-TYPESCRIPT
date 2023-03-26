type IKun = 'sing' | 'dance' | "rap"


// 类型体操
type BWExtract<T, E> = T extends E ? T : never



// 提取
type Ikuns = Extract<IKun, "rap" | 'dance'>

type Ikuns2 = BWExtract<IKun, 'sing' | "rap">



export { }