class Person {}

// 构造签名---可以通过new调用并且返回构造函数
interface ICTORPerson {
  new (): Person;
}

function factory(fn: ICTORPerson) {
  const f = new fn();
  return f;
}

factory(Person);
