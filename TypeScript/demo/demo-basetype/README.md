## 基础类型

- 布尔值

```ts
let value: boolean = false;
```

- 数字

```ts
let decLiteral: number = 6; // 10进制
let hexLiteral: number = 0xf00d; // 16进制
let binaryLiteral: number = 0b1010; // 2进制
let octalLiteral: number = 0o744; // 8进制
```

- 字符串

```ts
let name: string = `djd`;
let age: number = 25;
let sentence: string = `My name is ${name}. I am ${age} years old.`;
```

- 数组

```ts
let list: number[] = [1, 2, 3];
```

- 元组

```ts
let x: [string, number] = ["abc", 123];
let y: [string, number] = [123, "abc"]; // Error
```

- 枚举

```ts
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;
```

- Any

```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
```

- Void

> 1. 方法不返回值

```ts
function print(value: string): void {
  console.log(value);
}
```

> 2. 声明一个 void 类型的变量

```ts
let value1: void = undefined;
let value2: void = null;
```

- Null

```ts
let value1: null = null;
```

- Undefined

```ts
let value1: undefined = undefined;
```

_默认情况下，null 与 undefined 是所有类型的子类，可以将 null 与 undefined 赋值给任何类型。 当指定 strictNullChecks = true 时 null 与 undefined 只能赋值给 void 与它们自己_

- Never 永不存在的值的类型，一般用于函数上，表过函数一定不可能执行完(中途会抛错)

```ts
function error(message: string): never {
  throw new Error(message);
}
```

- Void 表达没有任何类型，一般用于函数返回值上，表示函数没有返回值

```ts
function print(a: string): void {}
console.log(print("a")); // undefined
```

- Object 对象类型

```ts
let user: object = {
  name: "djd",
  age: 25
};
```

## 类型断言

```ts
const a: any = "123";
const b: string = a as string; // 断言 a 是 string
const c: string = <string>a; // 断言 a 是 string
```

_类型断言，不会转换数据类型_

```ts
const a: any = "abc";
const b: number = a as number; // 断言 a 是 number
console.log(typeof b); // string
const c: number = Number(a); // 类型转换
console.log(c); // NaN
```
