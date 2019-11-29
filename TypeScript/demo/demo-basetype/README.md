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

- Never 永不存在的值的类型

```ts
function error(message: string): never {
  throw new Error(message);
}
```

- Object 对象类型

```ts
let user: object = {
  name: "djd",
  age: 25
};
```
