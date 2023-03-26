type IKun = 'sing' | 'dance' | "rap"


// 类型体操
type BWExclude<T, E> = T extends E ? never : T



// 排除
type Ikuns = Exclude<IKun, "rap">

type Ikuns2 = BWExclude<IKun, 'sing'>



export { }