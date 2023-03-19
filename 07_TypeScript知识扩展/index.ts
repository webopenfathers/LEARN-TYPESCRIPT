import { sum } from './utils/math';
// 导入的是类型，推荐在类型的前面加上type关键字
// 目的：
// 可以让一个非TypeScript编辑器比如babel，swc或者esbuild知道什么样的导入可以被安全移除
import type { IDType, IPerson } from './utils/type';

console.log(sum(20, 30));

const id1: IDType = 33;
const person: IPerson = {
  name: 'zbw',
  age: 18,
};
