interface A {
  length: number;
}

function getLength<T extends A>(value: T) {
  return value.length; // OK
}

getLength([1, 2, 3]); //OK
getLength("aaa"); // OK
getLength(true); // Error 类型“true”的参数不能赋给类型“A”的参数(因为没有 length 属性)
getLength({ length: 100 }); // OK (因为有 length 属性)
